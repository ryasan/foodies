const mongoose = require('mongoose')

const Schema = mongoose.Schema

const recipeSchema = new Schema({
    image: String,
    largeImage: String,
    imgPublicId: String,
    title: String,
    directions: [{ type: String }],
    ingredients: [{ type: String }],
    likedByIds: [
        {
            type: Schema.Types.ObjectId,
            ref: 'User'
        }
    ],
    creatorUsername: String,
    creatorId: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
})

module.exports = mongoose.model('Recipe', recipeSchema)
