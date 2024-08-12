import React, { useState } from 'react';
import './NoteCard.css'; // Crie esse arquivo para estilos das notas

function NoteCard({ title, description, isFavorite, color, onEditColor, onEdit, onDelete }) {
  const [showColorPicker, setShowColorPicker] = useState(false);

  const handleColorChange = (color) => {
    onEditColor(color);
    setShowColorPicker(false);
  };

  return (
    <div className="NoteCard" style={{ backgroundColor: color }}>
      <div className="NoteCard-header">
        <h2>{title}</h2>
        <button onClick={onEdit}>⭐</button>
      </div>
      <p>{description}</p>
      <div className="NoteCard-actions">
        <button onClick={() => setShowColorPicker(!showColorPicker)}>🖍️</button>
        <button onClick={onDelete}>❌</button>
        {showColorPicker && (
          <div className="ColorPicker">
            <button onClick={() => handleColorChange('red')}>Red</button>
            <button onClick={() => handleColorChange('blue')}>Blue</button>
            <button onClick={() => handleColorChange('green')}>Green</button>
          </div>
        )}
      </div>
    </div>
  );
}

export default NoteCard;
