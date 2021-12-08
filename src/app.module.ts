import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { WorkspacesModule } from './workspaces/workspaces.module';
import { UsersModule } from './users/users.module';
import { ChannelsModule } from './channels/channels.module';
import { AuthModule } from './auth/auth.module';
import { MulterConfigs } from './config/multer.configs';

@Module({
  imports: [DatabaseModule, UsersModule, WorkspacesModule, ChannelsModule, AuthModule,MulterConfigs],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
