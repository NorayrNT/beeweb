import { Connection } from "mongoose";
import { DB_CONNECTION } from "../../database/constants";
import { USER_MODEL } from "../constants";
import { UserSchema } from "../schema/user.schema";

export const userProvider = [
    {
        provide: USER_MODEL,
        useFactory: (conn: Connection) => conn.model("User",  UserSchema),
        inject: [DB_CONNECTION] 
    }
]