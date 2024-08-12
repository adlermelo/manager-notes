import React from 'react';
import NoteCard from './NoteCard';

function NotesList({ notes, onEditColor, onEdit, onDelete }) {
  return (
    <div>
      <h2>Favorites</h2>
      {notes.filter(note => note.isFavorite).map(note => (
        <NoteCard
          key={note.id}
          {...note}
          onEditColor={(color) => onEditColor(note.id, color)}
          onEdit={() => onEdit(note.id)}
          onDelete={() => onDelete(note.id)}
        />
      ))}
      <h2>Others</h2>
      {notes.filter(note => !note.isFavorite).map(note => (
        <NoteCard
          key={note.id}
          {...note}
          onEditColor={(color) => onEditColor(note.id, color)}
          onEdit={() => onEdit(note.id)}
          onDelete={() => onDelete(note.id)}
        />
      ))}
    </div>
  );
}

export default NotesList;
