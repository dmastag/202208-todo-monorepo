import { ApiProperty } from "@nestjs/swagger";

export class CreateTodoDto {
  id: string;

  @ApiProperty()
  task: string;
}
