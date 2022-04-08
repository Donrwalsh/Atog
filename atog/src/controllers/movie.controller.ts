import { Controller, Get, Inject, Param } from "@nestjs/common";
import { MovieService } from "src/services/movie.service";

@Controller('movie')
export class MovieController {
    @Inject() private readonly movieService: MovieService;

    @Get(`:imdbId`)
    async getByImdbId(
        @Param('imdbId') imdbId: string
    ) {
        return await this.movieService.getMovieByImdbId(imdbId);
    }

}