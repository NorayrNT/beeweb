import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { UsersService } from '../users/users.service';
import { WORKSPACE_MODEL } from './constants';
import { CreateWorkspaceDto } from './dto/create-workspace.dto';
import { UpdateWorkspaceDto } from './dto/update-workspace.dto';
import { Workspace } from './workspace.interface';

@Injectable()
export class WorkspacesService {
  constructor(
    @Inject(WORKSPACE_MODEL) private workspaceModel: Model<Workspace>,
    private userService: UsersService
  ) {}

  // Create workspace
  async create(workspaceObj: Workspace, req): Promise<Workspace | null> {
    if(workspaceObj.name) {
      const new_slag = await this.checkAndCreateSlag(workspaceObj.name);
      workspaceObj.slag = (new_slag === false) ? workspaceObj.name : workspaceObj.slag = workspaceObj.name + "_" + new_slag;
    }
    try{
      if(req.user) {
         const authUser = await this.userService.checkByEmail(req.user.email);
         if(authUser) {
           workspaceObj.userId = authUser.id;
         }
      }
      const new_workspace = await this.workspaceModel.create(workspaceObj);
      return new_workspace;
    }catch(e) {
      return e.message;
    }
  }

  // Check the slag of the workspace and create
  async checkAndCreateSlag(name:string): Promise<boolean | string> {
    try{
      const users = await this.workspaceModel.find({name: name}).exec();
      if(users.length) {
        const lastPostfix = this.retrievePostfix(users[users.length - 1].slag);
        return  this.createPostfix(lastPostfix);
      }
      return false;
    }catch(e) {
      return e.message;
    }
  }

  // Retrieve postFix
  retrievePostfix(name: string): string {
    let arr = name.split("_");
    if(arr.length > 1) {
      return  arr[arr.length - 1];
    }
    return "0";
  }

  // Post_fix of the workspace's name
  createPostfix(postFixNumber: string): string {
    return (+postFixNumber + 1).toString(); 
  }

  // Remove a workspace
  async remove(id: string) {
    try{
      return await this.workspaceModel.findByIdAndRemove(id);
    }catch(e) {
      return e.message;
    }
  }
  
  // Update a workspace
  async update(id: string, updateWorkspaceDto: Workspace) {
      try{
        const workspace = await this.workspaceModel.findOneAndUpdate({id:id},updateWorkspaceDto,{
          new: true
        })
      }catch(e) {
        return e.message;
      }
  }


}
