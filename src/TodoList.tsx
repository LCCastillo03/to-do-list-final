import React, { useState } from 'react';
import TodoItem from './TodoItem';

interface Task {
  id: number;
  text: string;
  completed: boolean;
  timestamp: string; // Nueva propiedad para la fecha y hora
}

const TodoList: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [text, setText] = useState<string>('');

  const addTask = (text: string) => {
    const newTask: Task = {
      id: Date.now(),
      text,
      completed: false,
      timestamp: new Date().toLocaleString() // Añade la fecha y hora actuales
    };
    setTasks([...tasks, newTask]);
    setText('');
  };

  const deleteTask = (id: number) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const toggleCompleted = (id: number) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  return (
    <div className="todo-list">
      <h1>TODO LIST</h1>
      <div className="add-task">
        <input
          value={text}
          onChange={e => setText(e.target.value)}
          placeholder="Add a new task..."
        />
        <button onClick={() => addTask(text)}>Add Task</button>
      </div>
      {tasks.map(task => (
        <TodoItem
          key={task.id}
          task={task}
          deleteTask={deleteTask}
          toggleCompleted={toggleCompleted}
        />
      ))}
    </div>
  );
};

export default TodoList;
