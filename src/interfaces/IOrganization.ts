import { CreateOrganizationDto } from "src/organization/dto/create-organization.dto";
import { UpdateOrganizationDto } from "src/organization/dto/update-organization.dto";

export interface IOrganization {
    create(createOrganizationDto: CreateOrganizationDto)
    findAll()
    findOne(id: string) 
    update(id: string, updateOrganizationDto: UpdateOrganizationDto)
    remove(id: string)
}