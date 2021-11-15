import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getModelSchemaRef,
  patch,
  put,
  del,
  requestBody,
  response,
} from '@loopback/rest';
import {Notifications} from '../models';
import {NotificationsRepository} from '../repositories';

export class NotificationsController {
  constructor(
    @repository(NotificationsRepository)
    public notificationsRepository : NotificationsRepository,
  ) {}

  @post('/notifications')
  @response(200, {
    description: 'Notifications model instance',
    content: {'application/json': {schema: getModelSchemaRef(Notifications)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Notifications, {
            title: 'NewNotifications',
            
          }),
        },
      },
    })
    notifications: Notifications,
  ): Promise<Notifications> {
    return this.notificationsRepository.create(notifications);
  }

  @get('/notifications/count')
  @response(200, {
    description: 'Notifications model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Notifications) where?: Where<Notifications>,
  ): Promise<Count> {
    return this.notificationsRepository.count(where);
  }

  @get('/notifications')
  @response(200, {
    description: 'Array of Notifications model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Notifications, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Notifications) filter?: Filter<Notifications>,
  ): Promise<Notifications[]> {
    return this.notificationsRepository.find(filter);
  }

  @patch('/notifications')
  @response(200, {
    description: 'Notifications PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Notifications, {partial: true}),
        },
      },
    })
    notifications: Notifications,
    @param.where(Notifications) where?: Where<Notifications>,
  ): Promise<Count> {
    return this.notificationsRepository.updateAll(notifications, where);
  }

  @get('/notifications/{id}')
  @response(200, {
    description: 'Notifications model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Notifications, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(Notifications, {exclude: 'where'}) filter?: FilterExcludingWhere<Notifications>
  ): Promise<Notifications> {
    return this.notificationsRepository.findById(id, filter);
  }

  @patch('/notifications/{id}')
  @response(204, {
    description: 'Notifications PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Notifications, {partial: true}),
        },
      },
    })
    notifications: Notifications,
  ): Promise<void> {
    await this.notificationsRepository.updateById(id, notifications);
  }

  @put('/notifications/{id}')
  @response(204, {
    description: 'Notifications PUT success',
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() notifications: Notifications,
  ): Promise<void> {
    await this.notificationsRepository.replaceById(id, notifications);
  }

  @del('/notifications/{id}')
  @response(204, {
    description: 'Notifications DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.notificationsRepository.deleteById(id);
  }
}
