import { Controller, Get } from '@nestjs/common';
import { AdminService } from './admin.service';

@Controller()
export class AdminController {
  constructor(private readonly adminService: AdminService) {}

  @Get()
  getHelloAdmin(): string {
    return this.adminService.getHelloAdmin();
  }  
}