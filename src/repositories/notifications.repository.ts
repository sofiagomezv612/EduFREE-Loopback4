import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {FirestoreDataSource} from '../datasources';
import {Notifications, NotificationsRelations} from '../models';

export class NotificationsRepository extends DefaultCrudRepository<
  Notifications,
  typeof Notifications.prototype.uid,
  NotificationsRelations
> {
  constructor(
    @inject('datasources.Firestore') dataSource: FirestoreDataSource,
  ) {
    super(Notifications, dataSource);
  }
}
