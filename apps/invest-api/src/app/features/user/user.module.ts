import { Module } from "@nestjs/common";
import { PrismaService } from "../../prisma.service";
import { UserResolver } from "./user.resolver";


@Module({
  imports: [],
  providers: [UserResolver, PrismaService],
})
export class UserModule { }