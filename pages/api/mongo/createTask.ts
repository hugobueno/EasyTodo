import { NextApiRequest, NextApiResponse } from 'next'
import { connectToDatabase } from '../../../src/database/mongo'
import { Task } from '../../../src/models/taksModels'

const handleCreateTask = async (req: NextApiRequest, res: NextApiResponse) => {
        try {
            await connectToDatabase()
            const { description, userId } = req.body
            const task = await Task.create({
                description: description,
                owner: userId,
            })
            return res.status(200).json({
                message: 'Task created',
                task: task,
            })
        } catch (error) {
            console.log(error);
            return res.status(500).json({
                message: 'Error',
                error: 'failed to create task',
            })
        }
}

export default handleCreateTask