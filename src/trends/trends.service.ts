import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AddTrendsDto, UpdateTrendsDto } from './trends.dto';

@Injectable()
export class TrendsService {
  private trends: AddTrendsDto[] = [
    {
      id: 1,
      trend: 'NestJS',
      country: 'India',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: 2,
      trend: 'Angular',
      country: 'India',
      createdAt: new Date(),
      updatedAt: new Date()
    }
  ];
  getTrends(): AddTrendsDto[] {
    return this.trends;
  }

  addTrend(trend: AddTrendsDto): AddTrendsDto[] {
    this.trends.push(trend);
    return this.trends;
  }

  updateTrend(trend: UpdateTrendsDto): AddTrendsDto[] {
    const index = this.trends.findIndex((t) => t.id === trend.id);

    if (trend.id) {
      this.trends[index] = { ...this.trends[index], ...trend };
    }
    return this.trends;
  }

  shouldThrowUnauthorizedException(): void {
    throw new UnauthorizedException(
      'You are not authorized to perform this operation'
    );
  }
}
