import { Module } from '@nestjs/common';
import { UserResolver } from './user.resolver';
import { UserType } from './user.type';

@Module({
  providers: [UserResolver,UserType],
  imports: [],
})
export class UserModule {}
