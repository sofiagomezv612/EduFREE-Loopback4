import {Entity, model, property} from '@loopback/repository';

@model()
export class InstitutionalPrograms extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: false,
    required: true,
  })
  programId: string;

  @property({
    type: 'string',
    required: true,
  })
  programDescription: string;

  @property({
    type: 'string',
    required: true,
  })
  programName: string;

  @property({
    type: 'number',
    required: true,
  })
  creditsTotal: number;


  constructor(data?: Partial<InstitutionalPrograms>) {
    super(data);
  }
}

export interface InstitutionalProgramsRelations {
  // describe navigational properties here
}

export type InstitutionalProgramsWithRelations = InstitutionalPrograms & InstitutionalProgramsRelations;
