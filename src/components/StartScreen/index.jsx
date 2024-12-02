import React, { useState } from 'react';
import './styles.css';

function StartScreen({ onStart }) {
  const [name, setName] = useState('');

  const handleSubmit = () => {
    if (name.trim()) {
      onStart(name);
    }
  };

  return (
    <div className="start-screen">
      <h1>¡El ciberespacio necesita un héroe, comienza ahora!</h1>
      <input
        type="text"
        placeholder="Ingresa tu nombre"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={handleSubmit}>Siguiente</button>
    </div>
  );
}

export default StartScreen;
