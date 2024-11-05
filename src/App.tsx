import { useState } from 'react';
import './app.css';
import Greeting from './Greeting';

function App() {
  const [name, setName] = useState('');

  const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setName(evt.target.value);
  };

  return (
    <div className="container">
      <input
        className="nameInput"
        type="text"
        value={name}
        onChange={handleChange}
        placeholder="Start typing..."
      />
      <Greeting name={name} />
    </div>
  );
}

export default App;
