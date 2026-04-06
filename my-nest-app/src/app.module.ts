import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsModule } from './cats/cats.module';
import { UsersModule } from './users/users.module';
import { ItemsModule } from './items/items.module';

@Module({
  imports: [CatsModule, UsersModule, ItemsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
