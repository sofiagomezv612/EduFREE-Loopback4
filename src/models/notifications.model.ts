import {Entity, model, property} from '@loopback/repository';

@model()
export class Notifications extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: false,
    required: true,
  })
  uid: string;

  @property({
    type: 'array',
    itemType: 'string',
    required: true,
  })
  to: string[];

  @property({
    type: 'object',
    required: true,
  })
  message: object;


  constructor(data?: Partial<Notifications>) {
    super(data);
  }
}

export interface NotificationsRelations {
  // describe navigational properties here
}

export type NotificationsWithRelations = Notifications & NotificationsRelations;
