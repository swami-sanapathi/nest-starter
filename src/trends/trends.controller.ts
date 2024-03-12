import { Controller, Get, HttpCode, Post, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';
import { TrendsService } from './trends.service';

@Controller('/trends')
export class TrendsController {
  constructor(private trendsService: TrendsService) {}
  @Get()
  getTrends(@Req() req: Request, @Res() res: Response) {
    console.log('Trends api call');
    const trends = this.trendsService.getTrends();

    return res.send({
      message: 'Trends fetched successfully.',
      data: trends
    });
  }

  @Post()
  @HttpCode(201)
  addTrend(@Req() req: Request, @Res() res: Response) {
    const trend = req.body.trend;
    const latestTrends = this.trendsService.addTrend(trend);
    return res.send({
      message: 'Trend added successfully.',
      data: latestTrends
    });
  }

  @Get('/unauthorized')
  shouldThrowUnauthorizedException() {
    this.trendsService.shouldThrowUnauthorizedException();
  }
}
