import { useState } from 'react';
import './App.scss';

export const App = () => {
  const [count, setCount] = useState(0);

  const handlerCount = () => setCount((prev) => prev + 1);

  return (
    <div>
      <div>{count}</div>
      <button onClick={handlerCount}>
        <span>button</span>
      </button>
    </div>
  );
};
