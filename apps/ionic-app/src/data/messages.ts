export interface Message {
  id: string;
  task: string;
}

export const getMessages = () => fetch('http://localhost:3333/api/todos').then((_) => _.json());

export const getMessage = (id: number) => fetch(`http://localhost:3333/api/todos/${id}`).then((_) => _.json());

export const submitMessage = (task: string | undefined) => fetch('http://localhost:3333/api/todos', {
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  },
  method: "POST",
  body: JSON.stringify({task})
})
