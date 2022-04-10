import { Module } from "@nestjs/common";
import { TypeOrmModule } from '@nestjs/typeorm';
import { Blueprint } from "./blueprint.entity";
import { ShopController } from "./shop.controller";
import { ShopService } from "./shop.service";

@Module({
    imports: [TypeOrmModule.forFeature([Blueprint])],
    providers: [ShopService,],
    controllers: [ShopController],
})
export class ShopModule {}