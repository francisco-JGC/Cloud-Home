import { Router } from 'express'
import { UploadController } from '../controllers/upload.controller' 
import { upload } from '../config/multer.config' 

const router = Router()

router.post('/', upload.single('file'), UploadController.uploadFile)
router.post('/:directoryPath', upload.single('file'), UploadController.uploadFile)

export default router