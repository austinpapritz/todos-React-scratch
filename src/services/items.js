import { checkError, client } from './client';

export async function getListOfTodos() {
  const response = await client.from('todos').select().order('id', { ascending: false });

  return checkError(response);
}

export async function createTodo(description) {
  const response = await client.from('todos').insert([{ description }]).single();

  return checkError(response);
}

export async function completeTodo({ id, complete }) {
  const response = await client
    .from('todos')
    .update({ complete: !complete })
    .match({ id })
    .single();

  return checkError(response);
}

export async function deleteItem(id) {
  const response = await client.from('todos').delete().eq('id', 1);

  return checkError(response);
}
