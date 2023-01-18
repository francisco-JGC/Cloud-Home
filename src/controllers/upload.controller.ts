import { Request, Response } from 'express'

export class UploadController {
    
    static uploadFile(req: Request, res: Response): Response {
        return res.status(200).json({ message: 'File uploaded successfully' })
    }
}

