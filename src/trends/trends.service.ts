import { Injectable, UnauthorizedException } from '@nestjs/common';

@Injectable()
export class TrendsService {
  private trends = ['trend1', 'trend2', 'trend3'];
  getTrends(): string[] {
    return this.trends;
  }

  addTrend(trend: string): string[] {
    this.trends.push(trend);
    return this.trends;
  }
}
