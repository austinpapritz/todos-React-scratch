import { checkError, client } from './client';

export async function getListOfTodos() {
  const response = await client.from('todos').select();

  return checkError(response);
}
