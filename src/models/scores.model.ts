import {Entity, model, property} from '@loopback/repository';

@model()
export class Scores extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: false,
    required: true,
  })
  scoreId: string;

  @property({
    type: 'string',
    required: true,
  })
  uidStudent: string;

  @property({
    type: 'string',
    required: true,
  })
  groupId: string;

  @property({
    type: 'number',
    required: true,
  })
  score: number;


  constructor(data?: Partial<Scores>) {
    super(data);
  }
}

export interface ScoreRelations {
  // describe navigational properties here
}

export type ScoreWithRelations = Scores & ScoreRelations;
