// global
// local
// entity
import { ExempleController } from '.';
import { Exemple } from './interface';

export async function list(this: ExempleController) {
  console.log('api - exemple - list');
  const rows = await this.knex<Exemple>('exemple').select(['exemple.*']);
  return rows;
}
