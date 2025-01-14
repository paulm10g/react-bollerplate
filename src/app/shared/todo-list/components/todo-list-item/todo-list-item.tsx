import React from 'react';
import './todo-list-item.css';
import { ITodoListData } from '../../todo-list-data.interface.ts';
function TodoListItem({
  task,
  deleteTask,
  toggleCompleted,
}: {
  task: ITodoListData;
  deleteTask: Function;
  toggleCompleted: Function;
}) {
  function handleChange() {
    toggleCompleted(task.id);
  }

  function handleDelete() {
    deleteTask(task.id);
  }

  return (
    <div className='todo-item'>
      <input type='checkbox' checked={task.isCompleted} onChange={handleChange} />
      <p>{task.isCompleted}</p>
      <p className={'my-auto ' + (task.isCompleted ? 'checked' : '')}>{task.title}</p>
      <p className={'my-auto ' + (task.isCompleted ? 'checked' : '')}>{task.description}</p>
      <button onClick={handleDelete}>X</button>
    </div>
  );
}
export default TodoListItem;
