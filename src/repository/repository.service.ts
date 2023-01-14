import { Injectable } from '@nestjs/common';
import { CreateRepositoryDto } from './dto/create-repository.dto';
import { UpdateRepositoryDto } from './dto/update-repository.dto';
import {StateRepositoryEnum} from "./../infrastructure/StateRepositoryEnum"
import { GetRepositoryDto } from './dto/get-repository.dto';
import { IServices } from 'src/interfaces/IServices';

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
export class RepositoryService implements IServices {
  create(createRepositoryDto: CreateRepositoryDto) {
    return 'This action adds a new repository';
  }

  findAll() {
    return {repositorios:{...repos}};
  }

  findOne(id: number) {
    return `This action returns a #${id} repository`;
  }

  update(id: number, updateRepositoryDto: UpdateRepositoryDto) {
    return `This action updates a #${id} repository`;
  }

  remove(id: number) {
    return `This action removes a #${id} repository`;
  }
}
