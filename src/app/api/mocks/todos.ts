import { ITaskDto } from '../dtos/task.interface.ts';

export const MOCK_TODOS_DATA: Array<ITaskDto> = [
  {
    id: '0',
    title: 'Task 1',
    description: 'Do laundry 1',
    isCompleted: false,
  },
  {
    id: '1',
    title: 'Task 2',
    description: 'Do laundry 2',
    isCompleted: false,
  },
  {
    id: '2',
    title: 'Task 3',
    description: 'Do laundry 3',
    isCompleted: false,
  },
];
