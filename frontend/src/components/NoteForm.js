import React, { useState } from 'react';
import './NoteForm.css'; // Crie esse arquivo para estilos do formulário

function NoteForm({ onAdd }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd({ title, description, isFavorite: false, color: 'white' });
    setTitle('');
    setDescription('');
  };

  return (
    <form className="NoteForm" onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
        required
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
        required
      />
      <button type="submit">Create Note</button>
    </form>
  );
}

export default NoteForm;
