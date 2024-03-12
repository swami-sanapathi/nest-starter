import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TrendsController } from './trends/trends.controller';

@Module({
  imports: [],
  controllers: [AppController, TrendsController],
  providers: [AppService],
})
export class AppModule {}
