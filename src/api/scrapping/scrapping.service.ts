import { Injectable } from '@nestjs/common';
import { ScrappingFollowersDto } from './scrapping.dto';
import * as axios from 'axios';
@Injectable()
export class ScrappingService {
    public async scrappeFollowers(data: ScrappingFollowersDto) {
        console.log('here0')
        let resp = null;
        // const url  = `https://www.instagram.com/${data.username}/?__a=1`;
       const url = `https://i.instagram.com/api/v1/users/web_profile_info/?username=${data.username}`; 

        return resp;
    };
}
