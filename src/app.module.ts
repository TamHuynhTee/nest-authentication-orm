import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { UserController } from './user/user.controller';
import { UserService } from './user/user.service';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { PrismaService } from './prisma.service';
import { AuthService } from './auth/auth.service';
import { JwtService } from '@nestjs/jwt';
import { AuthController } from './auth/auth.controller';
@Module({
  imports: [
    ConfigModule.forRoot(),
    UserModule,
    AuthModule,
    // ConfigModule.forRoot({
    //   envFilePath: ['.env.development'],
    // }),
    // TypeOrmModule.forRootAsync({
    //   imports: [ConfigModule],
    //   useFactory: (service: ConfigService) => {
    //     return {
    //       type: 'mysql',
    //       host: service.get('DATABASE_HOST'),
    //       port: service.get('DATABASE_PORT'),
    //       database: service.get('DATABASE_NAME'),
    //       username: service.get('DATABASE_ROOT_USERNAME'),
    //       password: service.get('DATABASE_ROOT_PASSWORD'),
    //       entities: [],
    //       synchronize: true,
    //     };
    //   },
    //   inject: [ConfigService],
    // }),
  ],
  controllers: [UserController, AuthController],
  providers: [UserService, AuthService, PrismaService, JwtService],
})
export class AppModule {}
