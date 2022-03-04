import { connect } from "mongoose"
const uri = process.env.MONGO_URI as string

export const connectToDatabase = () => connect(uri).then(()=>{
    console.log('Connected to database')
})
