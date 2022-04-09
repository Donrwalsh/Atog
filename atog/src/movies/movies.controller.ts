import { Controller, Get, Inject, Param } from "@nestjs/common";
import { MoviesService } from "src/movies/movies.service";

@Controller('movie')
export class MoviesController {
    @Inject() private readonly moviesService: MoviesService;

    @Get(`id/:imdbId`)
    async getByImdbId(
        @Param('imdbId') imdbId: string
    ) {
        return await this.moviesService.getMovieByImdbId(imdbId);
    }

    @Get(`all`)
    getAll() {
        return this.moviesService.findAll();
    }

}