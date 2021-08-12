import { Resolver, Query, Args } from '@nestjs/graphql'
import { PrismaService } from '../../prisma.service';
import { UserType } from './types/UserType';

@Resolver()
export class UserResolver {
  constructor(private readonly prismaService: PrismaService) { }

  @Query(() => UserType)
  async UserInstance(@Args('id') id: string) {
    return this.prismaService.users.findUnique({ where: { id } });
  }

}