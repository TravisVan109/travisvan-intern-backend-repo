import { Controller, Get, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Roles } from './roles.decorator';
import { JwtService } from '@nestjs/jwt';

@Controller('admin')
export class AdminController {

  constructor(private jwtService: JwtService) { }


  @Get('test-token')
  getTestToken() {
    const token = this.jwtService.sign({ 'https://myapp.com/roles': ['admin'] });
    return { token };
  }

  @Get('dashboard')
  @UseGuards(AuthGuard('jwt'))
  @Roles('admin')
  getDashboard() {
    return { message: 'Welcome, Admin!' };
  }

  @Get('reports')
  @UseGuards(AuthGuard('jwt'))
  @Roles('admin', 'manager')
  getReports() {
    return { message: 'Reports data' };
  }
}