import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';

import { TypeOrmModule } from '@nestjs/typeorm';
import { Todo } from './models/todos/entities/todo.entity';
import { TodosModule } from './models/todos/todos.module';


@Module({
  imports: [
    TodosModule,
    TypeOrmModule.forRoot({
    type: 'better-sqlite3',
    database: ':memory:',
    dropSchema: true,
    entities: [Todo],
    synchronize: true,
    logging: false,
  })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
