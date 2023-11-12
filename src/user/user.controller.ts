import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { JWTGuard } from 'src/auth/guards/jwt.guard';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @UseGuards(JWTGuard)
  @Get(':id')
  async getProfile(@Param('id') id: number) {
    return await this.userService.findById(id);
  }
}
