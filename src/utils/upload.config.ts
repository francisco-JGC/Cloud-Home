import 'dotenv/config'
import multer from 'multer'
import fs from 'fs'
import { Request } from 'express'

const storage = multer.diskStorage({
    destination: (req: Request, file: Express.Multer.File , cb: (error: Error | null, destination: string) => void) => {

        const dirPath: string = process.env.UPLOAD_DIR_PATH || '../uploads'
        
        if (!fs.existsSync(dirPath)) {
            fs.mkdirSync(dirPath)
        }
        cb(null, dirPath)
    },
    filename: (req: Request, file: Express.Multer.File, cb: (error: Error | null, filename: string) => void) => {
        cb(null, file.originalname)
    }
})

const upload = multer({ storage })

export default upload