import { useState } from 'react';
import TodoListItem from './todo-list-item/todo-list-item.tsx';
import { ITodoListData } from '../todo-list-data.interface.ts';

function TodoList({
  data,
  deleteTask,
  toggleCompleted,
  addTask,
}: {
  data: Array<ITodoListData>;
  deleteTask: Function;
  toggleCompleted: Function;
  addTask: Function;
}) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  function handleAddTask({ title, description }) {
    addTask({ title, description });
    setDescription('');
    setTitle('');
  }

  function handleToggleCompleted(id) {
    toggleCompleted(id);
  }

  function handleDeleteTask(id: string) {
    deleteTask(id);
  }

  return (
    <div className='todo-list'>
      {data.map((task) => (
        <TodoListItem
          key={task.id}
          task={task}
          deleteTask={handleDeleteTask}
          toggleCompleted={handleToggleCompleted}
        />
      ))}
      <input className='w-6/12' value={title} onChange={(e) => setTitle(e.target.value)} />
      <input
        className='w-6/12'
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button className='mt-5' onClick={() => handleAddTask({ title, description })}>
        Add
      </button>
    </div>
  );
}

export default TodoList;
