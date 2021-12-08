import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Req, Request } from '@nestjs/common';
import { WorkspacesService } from './workspaces.service';
import { CreateWorkspaceDto } from './dto/create-workspace.dto';
import { UpdateWorkspaceDto } from './dto/update-workspace.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';

@Controller('workspace')
export class WorkspacesController {
  constructor(private readonly workspacesService: WorkspacesService) {}

  @UseGuards(JwtAuthGuard)
  @Post("create")
  async create(@Body() workspaceObj, @Request() req: Request) {
    return await this.workspacesService.create(workspaceObj, req);
  }

  @Delete(':id')
  async remove(@Param('id') id) {
    await this.workspacesService.remove(id);
  }
  
  @UseGuards(JwtAuthGuard)
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateWorkspaceDto) {
    console.log(updateWorkspaceDto);

    return this.workspacesService.update(id, updateWorkspaceDto);
  }

  // @Get()
  // findAll() {
  //   return this.workspacesService.findAll();
  // }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.workspacesService.findOne(+id);
  // }


}
