import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { ItemsController } from './items/items.controller';

@Module({
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile: 'schema.gql',
      debug: true,
      playground: true,
    }),
    UsersModule,
  ],
  controllers: [AppController, ItemsController],
  providers: [AppService],
})
export class AppModule {}
