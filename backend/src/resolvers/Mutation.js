const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const User = require('../models/user')
const Recipe = require('../models/recipe')
const utils = require('../utils')

const Mutation = {
    async signup (parent, { signupInput }, ctx) {
        let { email, password, username } = signupInput
        email = email.toLowerCase()
        const hashedPw = await bcrypt.hash(password, 10)
        const user = await new User({
            email,
            username,
            password: hashedPw
        }).save()
        const token = jwt.sign({ userId: user._id }, process.env.APP_SECRET)
        utils.setCookieToken(ctx, token)
        return user
    },
    async signin (parent, { email, password }, ctx) {
        const user = await User.findOne(
            { email },
            '_id email username password'
        )

        if (!user) {
            throw new Error(`No such user found for email ${email}`)
        }
        const validPassword = await bcrypt.compare(password, user.password)

        if (!validPassword) {
            throw new Error('Invalid Password!')
        }
        const token = jwt.sign({ userId: user._id }, process.env.APP_SECRET)
        utils.setCookieToken(ctx, token)
        return user
    },
    async signout (parent, args, ctx) {
        ctx.response.clearCookie('token')
        return { message: 'See you again soon!' }
    },
    async createRecipe (parent, { createRecipeInput }, ctx) {
        const {
            image,
            largeImage,
            title,
            directions,
            ingredients,
            imgPublicId
        } = createRecipeInput
        const { userId, user } = ctx.request
        if (!userId) throw Error('You must be logged in to do that')
        const recipe = await new Recipe({
            image,
            largeImage,
            title,
            directions,
            ingredients,
            imgPublicId,
            creatorUsername: user.username,
            creatorId: userId
        }).save()
        await User.findByIdAndUpdate(userId, { $push: { recipes: recipe._id } })
        return recipe
    },
    async updateRecipeLikes (parent, { recipeId }, ctx) {
        const recipe = await Recipe.findById(recipeId)
        const { userId } = ctx.request
        const { likedByIds } = recipe

        if (likedByIds.includes(userId)) {
            likedByIds.splice(likedByIds.indexOf(userId, 1))
        } else {
            likedByIds.push(userId)
        }

        await recipe.save()

        return recipe
    },
    async deleteRecipe (parent, { recipeId }, ctx) {
        const recipe = await Recipe.findById(recipeId)
        const ownsRecipe = recipe.creatorId.toString() === ctx.request.userId
        if (!ownsRecipe) {
            throw new Error("This isn't yours to delete!")
        }
        utils.deleteImageFromCloud(recipe.imgPublicId, ctx.response)
        await User.findByIdAndUpdate(ctx.request.userId, {
            $pull: { recipes: recipe._id }
        })
        await Recipe.findByIdAndDelete(recipeId)
        return { _id: recipeId }
    }
}

module.exports = Mutation
