const User = require('../models/user')
const Recipe = require('../models/recipe')

const Query = {
    async me (parent, args, ctx) {
        if (!ctx.request.userId) return null
        return await User.findById(ctx.request.userId)
    },
    async recipes (parent, { limit, skip }, ctx) {
        return await Recipe.find({}, null, { limit, skip })
    },
    async recipeDetails (parent, { recipeId }, ctx) {
        return await Recipe.findById(recipeId)
    },
    async myRecipes (parent, { limit, skip }, ctx) {
        // 1. find user
        const user = await User.findById(ctx.request.userId)
        // 2. get user's recipe id collection and return actual recipe item
        const recipes = await Recipe.find(
            { _id: { $in: user.recipes } },
            null,
            {
                limit,
                skip
            }
        )
        // 3. return recipes
        return recipes
    },
    async likedRecipes (parent, { limit, skip }, ctx) {
        return await Recipe.find({ likedByIds: ctx.request.userId }, null, {
            limit,
            skip
        })
    }
}

module.exports = Query
