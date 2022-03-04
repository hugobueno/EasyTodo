import mongoose, {Model, model,} from "mongoose";

interface IUser extends mongoose.Document {
    name: string,
    email: string,
    createAt?: string,
    updateAt?: string,
}

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,

    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    createAt: {
        type: Date,
        default: Date.now,
    },
    updateAt: {
        type: Date,
        default: Date.now,
    },
})


export const User: Model<IUser> = mongoose.models.User || model("User", UserSchema)