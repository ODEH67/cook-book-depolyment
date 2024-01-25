import mongoose from "mongoose";

const { Schema } = mongoose;

// a separate schema for the nested ingredients object
const ingredientsSchema = new Schema(
        {
        ingredient: {
            type: String,
            required: true
            },
        quantity: {
            type: String,
            required: true
            }
        }
);


const RecipeSchema = new Schema({
    category: {
        type: String,
        required: true,
        index: true
    },
    title: {
        type: String,
        unique: true,
        required: true
    },
    description: {
        type: String,
        required: true,
        index: true
    },
    preporation_time: {
        type: String,
        required: true,
        index: true
    },
    serving: {
        type: String,
        required: true,
        index: true
    },
    ingredients: {
        type: [ingredientsSchema], // the nested ingredientsSchema
        required: true,
        index: true

    },
    image: {
        type: String,
        index: true
    }
    ,
    owner: {
        type: Schema.Types.ObjectId,
        ref: "User", // Specifies the collection
    }
});

export default mongoose.model("Recipe", RecipeSchema);