export const imgFileFilter = (req: any, file: Express.Multer.File, cb: any) => {
    if(file) {
        try{ 
            const mime = file.mimetype.split("/");
            let type = mime[mime.length - 1];
            let type_arr = ["jpeg","jpg","png"];
            
            if(!type_arr.includes(type)){
                 cb(new Error("only specifid file types are allowed."))
            }            
        }catch(e) {
            console.log(e.message);
        }        
    }
    cb(null, true)
}

export const filename = (req: any, file: Express.Multer.File, cb: any) => {
    if(!file.originalname) {
        return cb(new Error("something went wrong!"))
    }
    cb(null, file.originalname);
}