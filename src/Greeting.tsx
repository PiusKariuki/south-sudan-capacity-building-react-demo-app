import { useState } from 'react';
import './greeting.css';

interface Props {
  name: string;
}

function Greeting({ name }: Props) {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount((prev) => ++prev);
  };

  return (
    <div className="container">
      <h1>Hello, {name}</h1>
      <p>You have clicked this button {count} times.</p>
      <button onClick={handleClick}>Click Me!</button>
    </div>
  );
}

export default Greeting;
