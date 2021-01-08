import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Controller('feature')
export class FeatureController {
  @Get()
  @UseGuards(AuthGuard())
  async create(@Req() req: any): Promise<Record<string, string>> {
    console.log(req.user);
    const user: Record<string, string> = req.user;
    return user;
  }
}
