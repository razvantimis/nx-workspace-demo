import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@timisdev/prisma-models';

@Injectable()
export class AppService {
  getData(): { message: string } {
    const prisma = new PrismaClient();
    prisma.users.findMany().then(data => {
      console.log(data)
    })
    return { message: 'Welcome to invest-api!' };
  }
}
