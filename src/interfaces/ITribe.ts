import { CreateTribeDto } from "src/tribe/dto/create-tribe.dto";
import { UpdateTribeDto } from "src/tribe/dto/update-tribe.dto";

export interface ITribe {
    create(createTribeDto: CreateTribeDto);
    findAll();
    findOne(id: number) ;
    update(id: number, updateTribeDto: UpdateTribeDto);
    remove(id: number);
}