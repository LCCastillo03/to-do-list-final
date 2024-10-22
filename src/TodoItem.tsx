import React from 'react';

interface Task {
  id: number;
  text: string;
  completed: boolean;
  timestamp: string; // Nueva propiedad para la fecha y hora
}

interface TodoItemProps {
  task: Task;
  deleteTask: (id: number) => void;
  toggleCompleted: (id: number) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ task, deleteTask, toggleCompleted }) => {
  const handleChange = () => {
    toggleCompleted(task.id);
  };

  return (
    <div className={`todo-item ${task.completed ? 'completed' : ''}`}>
      <input 
        type="checkbox"
        checked={task.completed}
        onChange={handleChange}
      />
      <div className="task-details">
        <p>{task.text}</p>
        <span className="timestamp">{task.timestamp}</span>
      </div>
      <div className="actions">
        <button className="delete-button" onClick={() => deleteTask(task.id)}>🗑️</button>
      </div>
    </div>
  );
}

export default TodoItem;
