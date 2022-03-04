import { NextApiRequest, NextApiResponse } from 'next'
import { connectToDatabase } from '../../../src/database/mongo'
import { User } from '../../../src/models/userModel'


const handleValidUser = async (req: NextApiRequest, res: NextApiResponse) => {

    try {
        await connectToDatabase()
        const { email } = req.query
        const verified = await User.findOne({
            email: email,
        })
        if (!verified) {
            const createUser = await User.create({
                name: 'Hugo Bueno',
                email: email,
            })
            return res.status(200).json({
                message: 'User created',
                user: createUser,
            })
        }
        return res.status(200).json({
            message: 'User already exists',
            user: verified,
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: 'Error',
            error: 'failed to create user',
        })
    }

}

export default handleValidUser