import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MtgController } from './controllers/mtg.controller';

@Module({
  imports: [],
  controllers: [AppController, MtgController],
  providers: [AppService],
})
export class AppModule {}
