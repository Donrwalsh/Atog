import { HttpService } from "@nestjs/axios";
import { Injectable } from "@nestjs/common";
import { lastValueFrom } from "rxjs";
import { movieKey } from '../config/app-config';

@Injectable()
export class MovieService {
    constructor(private httpService: HttpService) { }

    baseMovieUrl = 'http://www.omdbapi.com/?apikey=' + movieKey + '&';

    async getMovieByImdbId(imdbId: string): Promise<any> {
        var url = this.baseMovieUrl + 'i=' + imdbId;
        const result = await lastValueFrom(this.httpService.get(url));
        return result.data;
    }
}