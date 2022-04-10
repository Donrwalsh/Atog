import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Connection, Repository } from "typeorm";
import { Blueprint } from "./blueprint.entity";

@Injectable()
export class ShopService {
    constructor(
        @InjectRepository(Blueprint) private blueprintRepository: Repository<Blueprint>,
        private connection: Connection
    ) { }

    findAll(): Promise<Blueprint[]> {
        return this.blueprintRepository.find();
    }

    async create(blueprint: Blueprint) {
        return await this.blueprintRepository.save(blueprint);
    }

}