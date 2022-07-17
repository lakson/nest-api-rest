import { ScrappingFollowersDto } from './scrapping.dto';
import { Controller, Get, Body, Req, Post } from '@nestjs/common';
import { Followers } from './scrapping.model';
import { ScrappingService } from './scrapping.service';


@Controller('scrapping')
export class ScrappingController {
  constructor(private readonly service: ScrappingService) {

  }
  @Post('followers')
  private followers(@Body() body: ScrappingFollowersDto): Promise<Followers | void> {
    return this.service.scrappeFollowers(body);
  }
}
