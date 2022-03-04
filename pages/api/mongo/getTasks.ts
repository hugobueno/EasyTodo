import { NextApiRequest, NextApiResponse } from 'next'
import { connectToDatabase } from '../../../src/database/mongo'
import { Task } from '../../../src/models/taksModels'

const handleGetTasks = async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        await connectToDatabase()
        const { userId } = req.query
        const tasks = await Task.find({
            owner: userId,
        })
        return res.status(200).json({
            message: 'Tasks found',
            tasks: tasks,
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: 'Error',
            error: 'failed to get tasks',
        })
    }
}

export default handleGetTasks