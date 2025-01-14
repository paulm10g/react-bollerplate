import { MOCK_TODOS_DATA } from '../../mocks/todos.ts';
import { ITaskDto } from '../../dtos/task.interface.ts';

export function todoService(): Promise<Array<ITaskDto>> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([...MOCK_TODOS_DATA]);
    }, 1);
  });
}
