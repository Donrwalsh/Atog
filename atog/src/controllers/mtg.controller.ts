import { Controller, Get, Header, HttpCode, Post, Req } from '@nestjs/common';
import { Request } from 'express';

@Controller('mtg')
export class MtgController {

    @Get()
    findAll(@Req() request: Request): string {
        return 'This action returns all cards';
    }

    @Post()
    create(): string {
        return 'This action adds a card';
    }

    @Get('statusCode')
    @HttpCode(204)
    statusCode() {
        return 'Designate a status code';
    }

    @Get('header')
    @Header('Cache-Control', 'none')
    header() {
        return 'Specify a custom header';
    }
}