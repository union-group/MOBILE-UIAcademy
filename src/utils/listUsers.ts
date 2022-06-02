export interface User {
  id: string
  email: string
  password: string
}

export const listUsers = [
  {
    id: '1',
    email: 'rafael@gmail.com',
    password: '123',
  },
  {
    id: '2',
    email: 'leandro@gmail.com',
    password: '123',
  },
  {
    id: '3',
    email: 'admin@gmail.com',
    password: 'admin',
  },
] as User[]
