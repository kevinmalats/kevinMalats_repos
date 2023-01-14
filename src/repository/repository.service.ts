import { Injectable } from '@nestjs/common';
import { CreateRepositoryDto } from './dto/create-repository.dto';
import { UpdateRepositoryDto } from './dto/update-repository.dto';
import {StateRepositoryEnum} from "./../infrastructure/StateRepositoryEnum"
import { GetRepositoryDto } from './dto/get-repository.dto';
import { IRepository } from 'src/interfaces/IRepository';
import { Repository } from './entities/repository.entity';


const repos: GetRepositoryDto[] = [
  {
      id:1,
      state:StateRepositoryEnum.Verificado
  },
  {
      id:2,
      state:StateRepositoryEnum.En_Espera
  },
  {
      id:3,
      state:StateRepositoryEnum.Aprobado
  }
];

@Injectable()
export class RepositoryService implements IRepository {
  async create(createRepositoryDto: CreateRepositoryDto) {
    const repository = await Repository.create({...createRepositoryDto});
    return {...repository};
  }

  findAll() {
    return {repositorios:[repos]};
  }
  getReposMock() {
    return {repositorios:[repos]};
  }

  async findOne(id: number) {
    const repository = await Repository.findByPk(id);
    return repository;
  }

  async findReposByTribe(id_tribe: string) {
    const repository = await Repository.findAll({
      where: {
        id_tribe 
      }
    });
    return repository;
  }

  update(id: number, updateRepositoryDto: UpdateRepositoryDto) {
    return `This action updates a #${id} repository`;
  }

  remove(id: number) {
    return `This action removes a #${id} repository`;
  }
}
