export interface Letter {
  id: number;
  title: string;
  description: string;
  author: User;
}

export interface User {
  name: string;
  email: string;
  image: string;
}
