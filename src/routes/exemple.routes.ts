// global
import Router, { Request, Response } from 'express';
import _ from 'lodash';
// local
import knex from '../common/knex';
import { Handler } from '../common/lib/handle';
import { ExempleController } from '../api/Exemple';

const router = Router();
const path = '/exemple';

router.get('/', (request: Request, response: Response) => {
  console.log('route - exemple - list');
  const promise = new ExempleController(knex).list();
  new Handler().json(response, promise);
});

router.get('/:id', (request: Request, response: Response) => {
  console.log('route - exemple - list');

  const id: number = parseInt(_.get(request, 'params.id', null)!);

  const promise = new ExempleController(knex).getByID(id);
  new Handler().json(response, promise);
});

export { router, path };
