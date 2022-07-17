import { ScrappingService } from './scrapping.service';
import { ScrappingController } from './scrapping.controller';
import { Module } from '@nestjs/common';

@Module({
  controllers: [ScrappingController],
  providers: [ScrappingService]
})
export class ScrappingModule {}
