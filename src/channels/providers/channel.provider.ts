import { Connection } from "mongoose";
import { DB_CONNECTION } from "../../database/constants";
import { CHANNEL_MODEL } from "../constants";
import { ChannelSchema } from "../schema/channel.schema";

export const channelProvider = [
    {
        provide: CHANNEL_MODEL,
        useFactory: (conn :Connection) => conn.model("Channel", ChannelSchema),
        inject:[DB_CONNECTION]
    }
]