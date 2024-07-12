// Frontend (React.js)
import React, { useState, useEffect } from 'react';

function App() {
  const [rings, setRings] = useState([]);

  useEffect(() => {
    fetch('/api/rings')
      .then(res => res.json())
      .then(data => setRings(data))
      .catch(error => console.error('Error fetching rings:', error));
  }, []);

  const handleRegister = async (newRing) => {
    try {
      const response = await fetch('/api/rings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newRing)
      });
      if (response.ok) {
        const data = await response.json();
        setRings([...rings, data]);
      } else {
        console.error('Error registering ring:', response.status);
      }
    } catch (error) {
      console.error('Error registering ring:', error);
    }
  };

  return (
    <div>
      <h1>Him & Her Love Collection</h1>
      <ul>
        {rings.map(ring => (
          <li key={ring.id}>
            <h3>{ring.name}</h3>
            <p>Description: {ring.description}</p>
            <img src={ring.imageUrl} alt={ring.name} />
          </li>
        ))}
      </ul>

      {/* Form for registering a new ring */}
      <h2>Register a New Ring</h2>
      <form onSubmit={(event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const description = event.target.description.value;
        const imageUrl = event.target.imageUrl.value;
        handleRegister({ name, description, imageUrl });
        event.target.reset();
      }}>
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />
        </div>
        <div>
          <label htmlFor="description">Description:</label>
          <textarea id="description" name="description" required />
        </div>
        <div>
          <label htmlFor="imageUrl">Image URL:</label>
          <input type="url" id="imageUrl" name="imageUrl" required />
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default App;