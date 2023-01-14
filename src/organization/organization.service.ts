import { Injectable } from '@nestjs/common';
import { IServices } from 'src/interfaces/IServices';
import { CreateOrganizationDto } from './dto/create-organization.dto';
import { UpdateOrganizationDto } from './dto/update-organization.dto';
import { Organization } from './entities/organization.entity';

@Injectable()
export class OrganizationService implements IServices {
 async create(createOrganizationDto: CreateOrganizationDto) {
     const organization = await Organization.create({...createOrganizationDto});
    return {...organization};
  }

  findAll() {
   const organization = Organization.findAll();
    return organization;
  }

  async findOne(id: string) {
    const organization = await Organization.findByPk(id);
    console.log(organization)
    return organization;
  }

 async update(id: string, updateOrganizationDto: UpdateOrganizationDto) {

    await Organization.update({...updateOrganizationDto}, {
      where: {
        id: id
      }
    });
    return `This action updates a #${id} organization`;
    
  }

 async remove(id: string) {
    await Organization.destroy({
      where: {
        id
      }
    });
    return `This action removes a #${id} organization`;
  }
}
