import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { UserModule } from './features/user/user.module';
import { PrismaService } from './prisma.service';

@Module({
  imports: [
    UserModule,
    GraphQLModule.forRoot({
      debug: true,
      autoSchemaFile: 'schema.gql',
    }),
  ],
  providers: [PrismaService],
})
export class AppModule { }
