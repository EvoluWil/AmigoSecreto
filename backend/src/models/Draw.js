import mongoose from "mongoose";

const DrawSchema = new mongoose.Schema({
    pairs: [[{
        name: String,
        email: String
    }],],

    group:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Group"
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }
})
export default mongoose.model("Draw", DrawSchema, "draw")
