import 'dotenv/config'
import multer from 'multer'
import fs from 'fs'
import { Request } from 'express'

const createDirectoryRecursively = (path: string): string => {
    const pathArray = path.split('/')
    let currentPath = ''

    pathArray.forEach((path) => {
        currentPath += path + '/'
        if (!fs.existsSync(currentPath)) {
            fs.mkdirSync(currentPath)
        }
    })

    return currentPath
}

const storage = multer.diskStorage({

    destination: (req: Request, file: Express.Multer.File , cb: (error: Error | null, destination: string) => void) => {
        const dirPath = 'uploads'
        const directoryPath = req.query.directoryPath

        if (!fs.existsSync(dirPath)) {
            fs.mkdirSync(dirPath)
        }

        if (directoryPath) {
            createDirectoryRecursively(`${dirPath}/${directoryPath}`)
            return cb(null, `${dirPath}/${directoryPath}`)
        }

        cb(null, dirPath)
    },
    filename: (req: Request, file: Express.Multer.File, cb: (error: Error | null, filename: string) => void) => {
        cb(null, `${Date.now()}-${file.originalname}`)
    }
})

export const upload = multer({ storage })
