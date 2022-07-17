import { IsNumber, IsString } from 'class-validator';

export class ScrappingFollowersDto {
  @IsString()
  public readonly username: string;

  @IsNumber()
  public readonly count: number;
}
