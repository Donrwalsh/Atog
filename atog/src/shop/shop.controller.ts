import { Body, Controller, Get, Inject, Post } from "@nestjs/common";
import { Blueprint } from "./blueprint.entity";
import { ShopService } from "./shop.service";

@Controller('shop')
export class ShopController {
    @Inject() private readonly shopService: ShopService;

    @Get()
    get() {
        return this.shopService.findAll();
    }

    @Post()
    async create(@Body() blueprint: Blueprint) {
        return await this.shopService.create(blueprint);
    }
}