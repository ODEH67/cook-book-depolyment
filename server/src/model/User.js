import mongoose from "mongoose";

const { Schema } = mongoose;

// a separate schema for the nested adress object
const adressSchema = new Schema(
    {
        house: {
        type: String
        },
        nr: {
        type: String
        },
        postcode: {
        type: String
        },
        city: {
        type: String
        },
        country: {
        type: String,
        required: true
        }
    }
);


const userSchema = new Schema({
    username: {
        type: String,
        unique: true,
        required: true,
        index: true
    },
    email: {
        type: String,
        unique: true,
        required: true,
        index: true
    },
    password: {
        type: String,
        required: true,
        index: true
    },
    address: {
        type: adressSchema,
        _id: false
    }
});

export default mongoose.model("User", userSchema);