import { NextApiRequest, NextApiResponse } from 'next'
import { connectToDatabase } from '../../../src/database/mongo'
import { Task } from '../../../src/models/taksModels'

const handleRemoveAllTask = async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        await connectToDatabase()
        const { userId} = req.body
        const tasks = await Task.deleteMany({
            owner: userId,
            completed: true,
        })
        return res.status(200).json({
            message: 'Tasks removed',
            tasks: tasks,
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: 'Error',
            error: 'failed to remove task',
        })
    }
}

export default handleRemoveAllTask