import React from 'react';
import './Header.css'; // Crie esse arquivo para estilos do cabeçalho

function Header() {
  return (
    <header className="Header">
      <div className="Header-icon">📌</div>
      <h1>CoreNotes</h1>
      <input type="text" placeholder="Search notes..." className="Header-search" />
    </header>
  );
}

export default Header;
