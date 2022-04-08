import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MovieController } from './controllers/movie.controller';
import { MtgController } from './controllers/mtg.controller';
import { MovieService } from './services/movie.service';

@Module({
  imports: [HttpModule],
  controllers: [AppController, MtgController, MovieController],
  providers: [AppService, MovieService],
})
export class AppModule { }
