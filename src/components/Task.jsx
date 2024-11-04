import React from 'react';

const Task = ({ id, text, completed, deleteTask, toggleCompleted }) => {
  return (
    <div 
      style={{ textDecoration: completed ? 'line-through' : 'none', cursor: 'pointer' }}
      onClick={() => toggleCompleted(id)}
    >
      {text}
      <button 
        onClick={(e) => {
          e.stopPropagation(); 
          deleteTask(id);
        }}
      >
        Eliminar
      </button>
    </div>
  );
};

export default Task;