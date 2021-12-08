import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Req, Request, UseInterceptors, UploadedFile } from '@nestjs/common';
import { UsersService } from './users.service';
import { UpdateUserDto } from './dto/update-user.dto';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { FileInterceptor } from '@nestjs/platform-express';
import { fileUploadOptions } from './options/file_upload_options';

@Controller('user')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @UseInterceptors(FileInterceptor("imgUpload", fileUploadOptions))
  @Post("create")
  async create(
    @Body() createUserDto,
    @UploadedFile() file?: Express.Multer.File
  ) {
    return  await this.usersService.create(createUserDto, file);
  }

  @UseGuards(JwtAuthGuard)
  @Get("profile")
  profile(@Request() req): any {
      return req.user;
  }
  
}
