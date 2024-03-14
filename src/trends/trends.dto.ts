import { PartialType } from '@nestjs/mapped-types';
import {
  IsDate,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString
} from 'class-validator';

export class AddTrendsDto {
  @IsNumber()
  @IsOptional()
  id: number;

  @IsString()
  @IsNotEmpty()
  readonly trend: string;

  @IsString()
  @IsNotEmpty()
  readonly country: string;

  @IsDate()
  @IsOptional()
  createdAt: Date;

  @IsDate()
  @IsOptional()
  updatedAt: Date;
}

export class UpdateTrendsDto {
  @IsNumber()
  id: number;

  @IsString()
  readonly trend: string;

  @IsString()
  @IsOptional()
  readonly country: string;

  @IsDate()
  @IsOptional()
  updatedAt: Date;
}
