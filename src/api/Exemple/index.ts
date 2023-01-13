// global
import { Knex } from 'knex';
// local
// entity
import { list } from './list';
import { getByID } from './getByID';

export class ExempleController {
  protected knex: Knex;
  public list: Function;
  public getByID: Function;

  constructor(knex: Knex) {
    this.knex = knex;
    this.list = list.bind(this);
    this.getByID = getByID.bind(this);
  }
}
