export type SignInRequest = {
  userId: string;
  password: string;
}

export type UserDuplicateCheckRequest = {
  userId: string;
}