import { useState } from 'react';
import classes from './App.module.scss';
import { Link, Outlet } from 'react-router-dom';

export const App = () => {
  const [count, setCount] = useState(0);

  const handlerCount = () => setCount((prev) => prev + 1);

  return (
    <div>
      <Link to={'/about'}>about</Link>
      <br />
      <Link to={'/shop'}>Shop</Link>
      <div className={classes.value}>{count}</div>
      <button className={classes.button} onClick={handlerCount}>
        <span>button</span>
      </button>
      <Outlet />
    </div>
  );
};
