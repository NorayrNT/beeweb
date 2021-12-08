import { MulterModule } from "@nestjs/platform-express";

require("dotenv").config();

export const MulterConfigs = MulterModule.registerAsync({
    useFactory: async () => ({
        storage: process.env.UPLOAD_DIR  
    })
})