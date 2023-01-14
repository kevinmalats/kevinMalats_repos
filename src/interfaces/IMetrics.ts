import { CreateMetricDto } from "src/metric/dto/create-metric.dto";
import { UpdateMetricDto } from "src/metric/dto/update-metric.dto";

export interface IMetrics {
      create(createMetricDto: CreateMetricDto);
      findAll();
      findOne(id: number) ;
      update(id: number, updateMetricDto: UpdateMetricDto);
      remove(id: number);
}