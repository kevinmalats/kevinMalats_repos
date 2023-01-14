import { Injectable } from '@nestjs/common';
import { IMetrics } from 'src/interfaces/IMetrics';
import { CreateMetricDto } from './dto/create-metric.dto';
import { UpdateMetricDto } from './dto/update-metric.dto';
import { Metric } from './entities/metric.entity';

@Injectable()
export class MetricService implements IMetrics {
  async create(createMetricDto: CreateMetricDto) {
    const metric = await Metric.create({...createMetricDto});
    return {...metric};
  }

  findAll() {
    const metric = Metric.findAll();
    return metric;
  }

  findOne(id: number) {
    return `This action returns a #${id} metric`;
  }

  update(id: number, updateMetricDto: UpdateMetricDto) {
    return `This action updates a #${id} metric`;
  }

  remove(id: number) {
    return `This action removes a #${id} metric`;
  }
}
