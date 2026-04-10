import { Module } from '@nestjs/common';
import { JwtStrategy } from './strategies/jwt.strategy';
import { JwtModule } from '@nestjs/jwt';
@Module({
  providers: [JwtStrategy],
  imports: [
    JwtModule.register({
      secret: 'your-secret-key', // Use environment variable in production
      signOptions: { expiresIn: '1h' },
    }),
  ],
  exports: [JwtModule],  // export JwtModule for use in AdminModule
})
export class AuthModule { }