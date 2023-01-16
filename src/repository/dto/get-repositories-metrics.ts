import { StateRepositoryEnum } from "src/infrastructure/StateRepositoryEnum"
import { StatesRepositoryEnum } from "src/infrastructure/StatesRepositoryEnum"

export class GetRepositoryMetricsDto {
    id: number
    tribe:string
    name:string
    organization:string
    coverage:number
    codeSmells:number
    bugs:number
    vulnerabilities:number
    hotspots:number
    state:StatesRepositoryEnum
    verificationState:StateRepositoryEnum

}
