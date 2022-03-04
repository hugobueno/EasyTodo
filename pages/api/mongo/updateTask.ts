import { NextApiRequest, NextApiResponse } from 'next'
import { connectToDatabase } from '../../../src/database/mongo'
import { Task } from '../../../src/models/taksModels'

const handleUpdateTask = async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        await connectToDatabase()
        const { id, completed } = req.body
        const task = await Task.findByIdAndUpdate(id, {
            completed: completed,
        }, { new: true })
        return res.status(200).json({
            message: 'Task updated',
            task: task,
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: 'Error',
            error: 'failed to update task',
        })
    }
}

export default handleUpdateTask