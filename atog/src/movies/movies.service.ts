import { HttpService } from "@nestjs/axios";
import { InjectRepository } from '@nestjs/typeorm';
import { Connection, Repository } from 'typeorm';
import { Injectable } from "@nestjs/common";
import { lastValueFrom } from "rxjs";
import { movieKey } from '../config/app-config';
import { Movie } from "./movie.entity";

@Injectable()
export class MoviesService {
    constructor(
        @InjectRepository(Movie) private moviesRepository: Repository <Movie>,
        private httpService: HttpService,
        private connection: Connection,
        ) { }

    baseMovieUrl = 'http://www.omdbapi.com/?apikey=' + movieKey + '&';

    async getMovieByImdbId(imdbId: string): Promise<any> {
        var url = this.baseMovieUrl + 'i=' + imdbId;
        const result = await lastValueFrom(this.httpService.get(url));
        return result.data;
    }

    findAll(): Promise < Movie[] > {
        return this.moviesRepository.find();
    }

    findOne(id: string): Promise < Movie > {
        return this.moviesRepository.findOne(id);
    }

  async remove(id: string): Promise < void> {
        await this.moviesRepository.delete(id);
    }
}
