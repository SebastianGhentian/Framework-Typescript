import { Model } from './Model';
import { Attributes } from './Attributes';
import { Sync } from './Sync';
import { Eventing } from './Eventing';

export interface UserProps {
  id?: number;
  name?: string;
  age?: number
}

const rootUrl = 'http://localhost:3000/users';

export class User extends Model<UserProps> {
  static buildUser(attrs: UserProps): User {
    return new User(
      new Attributes<UserProps>(attrs),
      new Eventing(),
      new Sync<UserProps>(rootUrl)
    );
  }

  isAdminUser(): boolean {
    return this.get('id') === 1
  }

  setRandomAge(): void {
    const age = Math.round(Math.random() * 100);
    this.set({ age })
  }
}