import { Controller, Get, HttpCode, InternalServerErrorException, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';

@Controller('/trends')
export class TrendsController {
    @Get()
    @HttpCode(201)
    getTrends(@Req() req: Request, @Res() res: Response) {
        return res.send({ message: 'Trends' });
    }
}
