import { useState } from 'react';
import classes from './App.module.scss';
import { Link, Outlet } from 'react-router-dom';
import About from '@/pages/About/About';

import imagePng from '@/assets/images.png';
import imageJpeg from '@/assets/Без названия.jpeg';
import ImageCvg from '@/assets/svg-icon.svg';

function TODO(a: number) {
  console.log('todo function');
}

export const App = () => {
  const [count, setCount] = useState(0);

  TODO(12345);

  const handlerCount = () => setCount((prev) => prev + 1);

  if (__PLATFORM__ === 'desktop') {
    <h1>isDesktop platform</h1>;
  }

  if (__PLATFORM__ === 'mobile') {
    <h1>isMobile platform</h1>;
  }

  if (__ENV__ === 'development') {
    // addDevtools()
  }

  return (
    <div>
      <h1>Платформа {__PLATFORM__}</h1>
      <Link to={'/about'}>about</Link>
      <br />
      <Link to={'/shop'}>Shop</Link>

      <div>
        <h2>фотографии</h2>
        <img src={imagePng} alt="" />
        <br />
        <img src={imageJpeg} alt="" />
        <br />
        <div>
          <ImageCvg style={{ fill: 'green' }} width="100" height="100" />
        </div>
      </div>
      <div className={classes.value}>{count}</div>
      <button className={classes.button} onClick={handlerCount}>
        <span>button</span>
      </button>
      <About />
    </div>
  );
};
