import {
  Body,
  Controller,
  Get,
  HttpCode,
  Post,
  Req,
  Res,
  ValidationPipe
} from '@nestjs/common';
import { Request, Response } from 'express';
import { getCurrentDate } from 'src/utils/date-fns';
import { AddTrendsDto, UpdateTrendsDto } from './trends.dto';
import { TrendsService } from './trends.service';

@Controller('/trends')
export class TrendsController {
  constructor(private trendsService: TrendsService) {}
  @Get()
  getTrends(@Req() req: Request, @Res() res: Response) {
    console.log('Trends api call');
    const trends = this.trendsService.getTrends();

    return res.send({ data: trends });
  }

  @Post()
  @HttpCode(201)
  addTrend(
    @Body(ValidationPipe) trendsDto: AddTrendsDto,
    @Res() res: Response
  ) {
    trendsDto.id = this.trendsService.getTrends().length + 1;
    trendsDto.createdAt = getCurrentDate();
    trendsDto.updatedAt = getCurrentDate();
    const latestTrends = this.trendsService.addTrend(trendsDto);
    return res.send({ data: latestTrends });
  }

  @Post('/update')
  updateTrend(
    @Body(ValidationPipe) updateTrendsDto: UpdateTrendsDto,
    @Res() res: Response
  ) {
    updateTrendsDto.updatedAt = getCurrentDate();
    const latestTrends = this.trendsService.updateTrend(updateTrendsDto);
    return res.send({ data: latestTrends });
  }

  @Get('/unauthorized')
  shouldThrowUnauthorizedException() {
    this.trendsService.shouldThrowUnauthorizedException();
  }
}
