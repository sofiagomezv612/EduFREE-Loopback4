import {Entity, model, property} from '@loopback/repository';

@model()
export class Subjects extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: false,
    required: true,
  })
  subjectId: string;

  @property({
    type: 'string',
    required: true,
  })
  programId: string;

  @property({
    type: 'string',
    required: true,
  })
  subjectName: string;

  @property({
    type: 'string',
    required: true,
  })
  subjectDescription: string;

  @property({
    type: 'number',
    required: true,
  })
  subjectCredits: number;


  constructor(data?: Partial<Subjects>) {
    super(data);
  }
}

export interface SubjectRelations {
  // describe navigational properties here
}

export type SubjectWithRelations = Subjects & SubjectRelations;