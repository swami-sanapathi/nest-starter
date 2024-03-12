import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getBlahBlah(): string { 
    return this.appService.getHello();
  }

  @Get('health')
  healthCheck(): string {
    return 'I am healthy';
  }
}
