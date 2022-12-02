export interface Letter {
  id: number;
  description: string;
  author: User;
}

export interface User {
  name: string;
  email: string;
  image: string;
}
