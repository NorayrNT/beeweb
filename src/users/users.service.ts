import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { USER_MODEL } from './constants';
import { User } from './user.interface';
import * as bcrypt from "bcrypt";

@Injectable()
export class UsersService {
  constructor(
    @Inject(USER_MODEL) private userModel: Model<User>
  ) {}

  // Check user by email
  async checkByEmail(email: string): Promise<User | null> {
    try{
      const user = await this.userModel.findOne({'email': email});
      return user;
    }catch(e) {
      return e.message;
    }
  } 

  // Create a new user
  async create(userObj: User, file?: Express.Multer.File): Promise<User | null> {
    try{      
      if(userObj.password) {
        userObj.password = await bcrypt.hash(userObj.password.toString(),10);
      }
      if(file && file.originalname) {
        userObj.img = file.originalname
      }
      const new_user = await this.userModel.create(userObj);
      return new_user;
    }catch(e) {
      return e.message;
    }
  }

}
