import {Entity, model, property} from '@loopback/repository';

@model()
export class Groups extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: false,
    required: true,
  })
  groupId: string;

  @property({
    type: 'string',
    required: true,
  })
  uidStudent: string;

  @property({
    type: 'string',
    required: true,
  })
  uidProfessor: string;

  @property({
    type: 'string',
    required: true,
  })
  subjectId: string;

  @property({
    type: 'string',
    required: true,
  })
  classScheduleId: string;


  constructor(data?: Partial<Groups>) {
    super(data);
  }
}

export interface GroupsRelations {
  // describe navigational properties here
}

export type GroupsWithRelations = Groups & GroupsRelations;
