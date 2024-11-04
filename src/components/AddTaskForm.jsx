import React, { useState } from 'react';

const AddTaskForm = ({ addTask }) => {
  const [text, setText] = useState('');

  const handleAddTask = () => {
    if (text.trim()) {
      addTask(text);
      setText(''); // para limpiar el input después de agregar la tarea
    }
  };

  return (
    <div>
      <input 
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Nueva tarea"
      />
      <button onClick={handleAddTask}>Añadir Tarea</button>
    </div>
  );
};

export default AddTaskForm;