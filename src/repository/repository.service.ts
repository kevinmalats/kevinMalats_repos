import { Injectable } from '@nestjs/common';
import { CreateRepositoryDto } from './dto/create-repository.dto';
import { UpdateRepositoryDto } from './dto/update-repository.dto';
import {StateRepositoryEnum} from "./../infrastructure/StateRepositoryEnum"
import { GetRepositoryDto } from './dto/get-repository.dto';
import { IRepository } from 'src/interfaces/IRepository';
import { Repository } from './entities/repository.entity';
import { Metric } from 'src/metric/entities/metric.entity';
import { Tribe } from 'src/tribe/entities/tribe.entity';
import { get, set } from "lodash";
import { GetRepositoryMetricsDto } from './dto/get-repositories-metrics';
import { Organization } from 'src/organization/entities/organization.entity';
import { StatesRepositoryEnum } from 'src/infrastructure/StatesRepositoryEnum';
import { stateReposDict } from 'src/infrastructure/stateReposDict';
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
    const repository = await Organization.findAll({
      include:[{
        model:Tribe,
        required:true,
        attributes:["name","status"],
        include: [{
          model: Repository,
          required:true,
          attributes: ["state","status","id"],
          include : [
            {
                model: Metric,
                required: true,
                attributes: ["coverage","bugs","vulnerabilities",
              "hotspot","code_smells"
              ],
               
          }
        ],
        where: {
          id_tribe
       }
        }]
      }]
      
    });

  if(repository.length < 1)
      return "'La Tribu no se encuentra registrada'"
    return this. _buildResponse(repository);
  }

 async update(id: string, updateRepositoryDto: UpdateRepositoryDto) {
    await Repository.update({...updateRepositoryDto}, {
      where: {
        id: id
      }
    });
    return `This action updates a #${id} repository`;
  }

  remove(id: number) {
    return `This action removes a #${id} repository`;
  }
 
  private _buildResponse(organización:any[]){
    console.log(process.env.DATABASE_URL)
    let responseArray: GetRepositoryMetricsDto[] = new Array<GetRepositoryMetricsDto>();
    organización.map((res)=>{
      let response: GetRepositoryMetricsDto = new GetRepositoryMetricsDto();
       set(response,"organization",get(res,"dataValues.name",""));
       const tribe: any= get(res,"dataValues.Tribe.dataValues",[]);

        set(response, "tribe",get(tribe,"name",""));
        const repos: any[]= get(tribe,"Repositories",[]);
        
        repos.map((repo)=>{
          response.id = get(repo,"id","");
          response.verificationState = get(repo,"state","");
          response.state = get(repo,"status","");
          response.bugs = get(repo,"Metric.bugs",0);
          response.codeSmells = get(repo,"Metric.code_smells",0);
          response.coverage = get(repo,"Metric.coverage",0);
          response.hotspots = get(repo,"Metric.hotspot",0);
          response.vulnerabilities = get(repo,"Metric.vulnerabilities",0);
        })
     
      responseArray.push(response);
    });
    return {repositories:responseArray};
  }
}
