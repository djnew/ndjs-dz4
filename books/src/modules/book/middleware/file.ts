import multer from 'multer'
import { Request } from 'express'

interface File {
  mimetype: string
}

const storage = multer.diskStorage({
  destination (req, file, cb) {
    cb(null, 'public/uploads')
  },
  filename (req, file, cb) {
    cb(null, `${new Date().toISOString().replace(/:/g, '-')}-${file.originalname}`)
  }
})

const allowedTypes = [
  'text/html',
  'text/plain',
  'text/markdown',
  'application/pdf',
  'application/msword',
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
]

const fileFilter = (req: Request, file: File, cb: multer.FileFilterCallback) => {
  if (allowedTypes.includes(file.mimetype)) {
    cb(null, true)
  } else {
    cb(null, false)
  }
}
const multerFile = multer({
  storage, fileFilter
})

export { multerFile }
