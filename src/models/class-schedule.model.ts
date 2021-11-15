import {Entity, model, property} from '@loopback/repository';

@model()
export class ClassSchedule extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: false,
    required: true,
  })
  classScheduleId: string;

  @property({
    type: 'string',
    required: true,
  })
  classScheduleName: string;

  @property({
    type: 'date',
    required: true,
  })
  classScheduleStartTime: string;

  @property({
    type: 'date',
    required: true,
  })
  classScheduleEndTime: string;

  @property({
    type: 'string',
    required: true,
  })
  classScheduleDays: string;


  constructor(data?: Partial<ClassSchedule>) {
    super(data);
  }
}

export interface ClassScheduleRelations {
  // describe navigational properties here
}

export type ClassScheduleWithRelations = ClassSchedule & ClassScheduleRelations;
