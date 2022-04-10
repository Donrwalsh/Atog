import { Controller, Get, Inject } from "@nestjs/common";
import { ShopService } from "./shop.service";

@Controller('shop')
export class ShopController {
    @Inject() private readonly shopService: ShopService;

    @Get()
    get() {
        return this.shopService.findAll();
    }
}