import React, { CSSProperties } from 'react';
import cl from './PriceOption.module.css';

function PriceOption({ option, price, style }: { option: string; price: number; style?: CSSProperties }) {
  return (
    <div className={cl.price__option} style={style}>
      <span className={cl.option}>{option}</span>
      <span className={cl.price} style={{ textDecoration: 'none' }}>{`$${price}`}</span>
    </div>
  );
}

export default PriceOption;
