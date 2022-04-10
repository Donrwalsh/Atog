import { HttpService } from "@nestjs/axios";
import { Injectable } from "@nestjs/common";
import { InjectRepository } from '@nestjs/typeorm';
import { lastValueFrom } from "rxjs";
import { Connection, getConnection, Repository } from 'typeorm';
import { movieKey } from '../config/app-config';
import { Movie } from "./movie.entity";

@Injectable()
export class MoviesService {
    constructor(
        @InjectRepository(Movie) private moviesRepository: Repository<Movie>,
        private httpService: HttpService,
        private connection: Connection,
    ) { }

    baseMovieUrl = 'http://www.omdbapi.com/?apikey=' + movieKey + '&';

    async getMovieByImdbId(imdbId: string): Promise<any> {
        const databaseCheck = await this.findByImdbId(imdbId);
        if (databaseCheck.id) {
            return databaseCheck;
        }
        var url = this.baseMovieUrl + 'i=' + imdbId;
        const result = await lastValueFrom(this.httpService.get(url));
        await getConnection()
            .createQueryBuilder()
            .insert()
            .into(Movie)
            .values({
                title: result.data.Title,
                rated: result.data.Rated,
                released: result.data.Released,
                runtime: result.data.Runtime,
                director: result.data.Director,
                poster: result.data.Poster,
                imdbID: result.data.imdbID,
                boxOffice: result.data.boxOffice
            })
            .execute();
        return result.data;
    }

    findAll(): Promise<Movie[]> {
        return this.moviesRepository.find();
    }

    findByImdbId(imdbId: string): Promise<Movie> {
        return this.moviesRepository.createQueryBuilder("movies")
            .where("movies.imdbId = :imdbId", { imdbId })
            .execute();
    }

    findOne(id: string): Promise<Movie> {
        return this.moviesRepository.findOne(id);
    }

    async remove(id: string): Promise<void> {
        await this.moviesRepository.delete(id);
    }
}
