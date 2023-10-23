import * as React from 'react';
import cl from './BasketCheck.module.css'

function BasketCheck({ id}:{ id:number}) {
  return (
    <div className={cl.block}>
    <input
      type='checkbox'
      id={'t' + id}
      name=''
      className={cl.checkbox__input}
    />
    <label htmlFor={'t'+id}></label>
  </div> );
}

export default BasketCheck;