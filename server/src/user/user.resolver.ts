import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';
import { UserType } from './user.type';
import { randomInt } from 'crypto';

let listOfUser: UserType[] = [];
listOfUser = [
  { id: 1, name: 'John', email: 'John@gmail.com', password: '123456' },
  { id: 2, name: 'DUc', email: 'duc@gmail.com', password: '123456' },
];
@Resolver((of) => UserType)
export class UserResolver {
  @Query((returns) => [UserType])
  allUser() {
    return listOfUser;
  }
  @Mutation((returns) => UserType)
  insertUser(@Args('name') name: string) {
    let id = randomInt(1000000000);
    const user: UserType = {
      id: id,
      name,
      email: name + '@gmail.com',
      password: '123456',
    };
    listOfUser.push(user);
    return user;
  }

  @Query((returns) => UserType)
  getUserById(@Args('id') id: number) {
    return listOfUser.find((user) => user.id === id);
  }
  @Query((returns) => UserType)
  getUserByEmail(@Args('email') email: string) {
    return listOfUser.find((user) => user.email === email);
  }
  @Mutation((returns) => [UserType])
  deleteUser(@Args('id') id: number) {
    const user = listOfUser.find((user) => user.id === id);
    listOfUser = listOfUser.filter((user) => user.id !== id);
    return listOfUser;
  }
  @Mutation((returns) => UserType)
  updateUser(@Args('id') id: number, @Args('name') name: string) {
    const user = listOfUser.find((user) => user.id === id);
    user.name = name;
    return user;
  }
}
