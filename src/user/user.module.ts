import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { JwtModule } from '@nestjs/jwt';
import * as dotenv from 'dotenv';
import { PassportModule } from '@nestjs/passport';
import { JwtStrategy } from 'src/jwtstrategy/jwt.strategy';
dotenv.config()

@Module({
  imports:[UserModule,TypeOrmModule.forFeature([User]),JwtModule.register({
    global:true,
    secret:process.env.SECRET,
    signOptions:{expiresIn:'1h'},

  }),
  PassportModule.register({
    defaultStrategy:'jwt',
    session:true
  }) ],
  controllers: [UserController],
  providers: [UserService,JwtStrategy,PassportModule],
  exports:[JwtStrategy,PassportModule,UserService]
})
export class UserModule {}