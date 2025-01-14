import './todo-page.css';
import TodoList from '../shared/todo-list/components/todo-list.tsx';
import { todoService } from '../api/services/todo/todo-service.ts';
import { useEffect, useState } from 'react';
import { ITodoListData } from '../shared/todo-list/todo-list-data.interface.ts';
import { v4 as uuidv4 } from 'uuid';

function TodoPage() {
  const [data, setData] = useState<Array<ITodoListData>>([]);

  useEffect(() => {
    // todo errors and loading
    todoService().then((r) => setData(r));
  }, []);

  function handleDeleteTask(id) {
    setData(data.filter((task) => task.id !== id));
  }
  function handleToggleCompleted(id) {
    setData(
      data.map((_task) => {
        if (_task.id === id) {
          return { ..._task, isCompleted: !_task.isCompleted };
        } else {
          return _task;
        }
      }),
    );
  }

  function handleAddTask({ title, description }) {
    const newTask: ITodoListData = {
      id: uuidv4(),
      title,
      description,
      isCompleted: false,
    };
    setData([...data, newTask]);
  }

  return (
    <>
      <TodoList
        data={data}
        deleteTask={handleDeleteTask}
        toggleCompleted={handleToggleCompleted}
        addTask={handleAddTask}
      ></TodoList>
    </>
  );
}

export default TodoPage;
