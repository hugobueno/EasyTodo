import mongoose ,{Model, model}from "mongoose";

interface ITaskSchema extends mongoose.Document {
    description : string,
    completed : boolean,
    owner : string,
    createdAt : string,
}

const TaskSchema = new mongoose.Schema({
    description: {
        type: String,
        required: true,

    },
    completed: {
        type: Boolean,
        default: false,
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "User", 
    },
    createdAt: {
        type: Date,
        default: Date.now,
    }
})

export const Task: Model<ITaskSchema> = mongoose.models.Task || model("Task", TaskSchema)