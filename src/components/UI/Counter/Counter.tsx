import React, { useState } from 'react';
import cl from './Counter.module.css'

function Counter({stock}:{stock: number}) {
  const [value, setValue] = useState(1)

  function decrease(){
    if(value > 1) setValue(value - 1);
  }

  function increase(){
    if (value < stock) setValue(value + 1);
  }

  return (
    <div className={cl.counter}>
      <button className={cl.button} onClick={decrease}>-</button>
      <div className={cl.value}>{value}</div>
      <button className={cl.button} onClick={increase}>+</button>
    </div>
   );
}

export default Counter;