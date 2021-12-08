import { diskStorage } from "multer";
import { filename, imgFileFilter } from "../../helpers/file_upload_helper";

export const fileUploadOptions = {
    storage: diskStorage({
        destination: process.env.UPLOAD_DEST,
        filename: filename
    }),
    fileFilter: imgFileFilter
}