import { Body, Controller, Get, HttpCode, Post, Res } from '@nestjs/common';
import { Response } from 'express';
import { EditorService } from './editor.service';

@Controller('editor')
export class EditorController {
  constructor(private editorService: EditorService) {}

  @Get('keywords')
  getKeywords() {
    const keywords = this.editorService.getKeywords();
    const operators = this.editorService.getOperators();
    const subjectAndProps = this.editorService.getSubjectAndProps();
    return { keywords, operators, attributes: subjectAndProps };
  }

  @Post('compile')
  @HttpCode(200)
  compile(@Body() body: { code: string }, @Res() res: Response) {
    return res.send(this.editorService.compile(body));
  }
}
