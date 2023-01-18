import { Router } from 'express'
import fs from 'fs'

const router = Router()
const routerPath = __dirname

const deleteFileExtension = (fileName: string): string => fileName.split('.')[0]

fs.readdirSync(routerPath).forEach((file) => {
    const skipFiles = ['index.ts', 'index.js']
    
    if (!skipFiles.includes(file)) {
        const fileName = deleteFileExtension(file)
        const route = require(`./${ file}`)
        
        router.use(`/${ fileName }`, route.default)
    }
})

export default router