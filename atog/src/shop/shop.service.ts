import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Blueprint } from "./blueprint.entity";

@Injectable()
export class ShopService {
    constructor(
        @InjectRepository(Blueprint) private blueprintRepository: Repository<Blueprint>
    ) { }

    findAll(): Promise<Blueprint[]> {
        return this.blueprintRepository.find();
    }
}