import { Controller } from '@nestjs/common';
import { TodosService } from './todos.service';
import { Todo } from './entities/todo.entity';
import { Crud, CrudController } from '@nestjsx/crud';


@Crud({
  model: {
    type: Todo,
  },
})
@Controller("todos")
export class TodosController implements CrudController<Todo> {
  constructor(public service: TodosService) {}
}
