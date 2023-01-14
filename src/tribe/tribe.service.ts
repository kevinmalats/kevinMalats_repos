import { Injectable } from '@nestjs/common';
import { ITribe } from 'src/interfaces/ITribe';
import { CreateTribeDto } from './dto/create-tribe.dto';
import { UpdateTribeDto } from './dto/update-tribe.dto';
import { Tribe } from './entities/tribe.entity';


@Injectable()
export class TribeService implements ITribe{
  async create(createTribeDto: CreateTribeDto) {
    const tribe = await Tribe.create({...createTribeDto});
    return {...tribe};
  }

  findAll() {
    const tribe = Tribe.findAll();
    return tribe;
  }

  findOne(id: number) {
    return `This action returns a #${id} tribe`;
  }

  update(id: number, updateTribeDto: UpdateTribeDto) {
    return `This action updates a #${id} tribe`;
  }

  remove(id: number) {
    return `This action removes a #${id} tribe`;
  }
}
