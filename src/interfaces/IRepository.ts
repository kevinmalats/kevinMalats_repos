import { CreateRepositoryDto } from "src/repository/dto/create-repository.dto";
import { UpdateRepositoryDto } from "src/repository/dto/update-repository.dto";


export interface IRepository {
    create(createRepositoryDto: CreateRepositoryDto);
    findAll();
    getReposMock();
    findOne(id: number);
    findReposByTribe(id_tribe: string);
    update(id: string, updateRepositoryDto: UpdateRepositoryDto);
    remove(id: number);
}