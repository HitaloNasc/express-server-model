// global
// local
// entity
import { ExempleController } from '.';
import { Exemple } from './interface';

export async function getByID(this: ExempleController, id: number) {
  console.log('api - exemple - getByID');
  const row = await this.knex<Exemple>('exemple').select(['exemple.*']).where('exemple.id', id).first();
  return row;
}
