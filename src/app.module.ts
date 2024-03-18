import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TrendsModule } from './trends/trends.module';
import { EditorModule } from './editor/editor.module';

@Module({
  imports: [TrendsModule, EditorModule],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
