import path from "node:path"
import crypto from "node:crypto"
import multer from "multer"

const TMP_FOLDER = path.resolve(__dirname, "..", "..", "tmp")
const UPLOADS_FOLDER = path.resolve(TMP_FOLDER, "uploads")

const MAX_SIZE = 3
const MAX_FILE_SIZE = 1024 * 1024 * MAX_SIZE //3MB
const ACCEPTED_IMAGE_TYPES = ["image/jpeg", "image/jpg", "image/png"]

export const MULTER = {
  storage: multer.diskStorage({
    destination: TMP_FOLDER,
    filename(request, file, callback) {
      const fileHash = crypto.randomBytes(10).toString("hex")
      const filename = `${fileHash}-${file.originalname}`

      return callback(null, filename)
    }
  })
}

export default {
  TMP_FOLDER,
  UPLOADS_FOLDER,
  MULTER,
  MAX_FILE_SIZE,
  ACCEPTED_IMAGE_TYPES,
  MAX_SIZE,
}