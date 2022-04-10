import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MtgController } from './controllers/mtg.controller';
import { Movie } from './movies/movie.entity';
import { MoviesModule } from './movies/movies.module';
import { Blueprint } from './shop/blueprint.entity';
import { ShopModule } from './shop/shop.module';

@Module({
  imports: [HttpModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'ansible',
      password: 'ansible',
      database: 'bighetti',
      entities: [Movie, Blueprint],
      synchronize: false,
    }),
    MoviesModule, ShopModule],
  controllers: [AppController, MtgController,],
  providers: [AppService,],
})
export class AppModule { }
