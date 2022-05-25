export type TCreateUser = {
  email: string;
  password: string;
  name: string;
}

export type TCreatedUser = TCreateUser & {
  id: number;
}