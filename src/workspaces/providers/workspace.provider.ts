import { Connection } from "mongoose";
import { DB_CONNECTION } from "../../database/constants";
import { WORKSPACE_MODEL } from "../constants";
import { WorkspaceSchema } from "../schema/workspace.schema";

export const workspaceProvider = [
    {
        provide: WORKSPACE_MODEL,
        useFactory: (conn: Connection) => conn.model("Workspace", WorkspaceSchema),
        inject: [DB_CONNECTION]
    }
]