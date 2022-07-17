import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { ScrappingController } from './scrapping/scrapping.controller';
import { ScrappingService } from './scrapping/scrapping.service';
import { ScrappingModule } from './scrapping/scrapping.module';

@Module({
  imports: [UserModule, ScrappingModule],
  controllers: [],
  providers: []
})
export class ApiModule {}
