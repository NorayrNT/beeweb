import { Module } from '@nestjs/common';
import { WorkspacesService } from './workspaces.service';
import { WorkspacesController } from './workspaces.controller';
import { DatabaseModule } from '../database/database.module';
import { workspaceProvider } from './providers/workspace.provider';
import { UsersService } from '../users/users.service';
import { UsersModule } from '../users/users.module';

@Module({
  imports: [DatabaseModule, UsersModule],
  controllers: [WorkspacesController],
  providers: [WorkspacesService, ...workspaceProvider]
})
export class WorkspacesModule {}
