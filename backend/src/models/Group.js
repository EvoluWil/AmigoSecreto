import mongoose from "mongoose";

const GroupSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
        index:{
            unique: true
        }
    },
    friends:[],
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }
})
export default mongoose.model("Group", GroupSchema, "group");
