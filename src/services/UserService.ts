import { TCreateUser, TCreatedUser } from '../types/UserTypes';

export default class UserService {
  public async createUser(userData: TCreateUser): Promise<TCreatedUser> {
    return userData as TCreatedUser;
  }
  public async listUsers(): Promise<TCreatedUser[]> {
    return [] as TCreatedUser[];
  }
}