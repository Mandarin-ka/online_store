import React, { useState } from 'react';
import PriceOption from './PriceOption/PriceOption';
import cl from './Check.module.css';
import Button from '../../UI/Button/Button';

const styles: React.CSSProperties = {
  textTransform: 'uppercase',
  margin: '90px auto 0',
  backgroundColor: '#c73153',
  color: 'white',
  display: 'flex',
  justifyContent: ' center',
  alignItems: ' center',
  fontWeight: '600',
  fontSize: '16px',
  height: '38px',
  border: '0',
  padding: '5px 20px',
  borderRadius: '4px',
};

function Check({ price }: { price: number }) {
  return (
    <div className={cl.check}>
      <h2 className='name'>Итог</h2>
      <div className={cl.price__list}>
        <PriceOption option='товары' price={price} style={{ color: '#333333', fontSize: '14px', padding: '4px 0' }} />
        <PriceOption
          option='налог'
          price={price}
          style={{ color: 'red', fontSize: '14px', textDecoration: 'underline', padding: '4px 0' }}
        />
        <PriceOption
          option='доставка'
          price={price}
          style={{ color: 'red', fontSize: '14px', textDecoration: 'underline', padding: '4px 0' }}
        />
        <PriceOption
          option='скидка'
          price={price}
          style={{ color: '#333333', fontSize: '14px', padding: '6px 0', borderBottom: '1px solid #C4C4C4' }}
        />
      </div>

      <PriceOption
        option='итого'
        price={price}
        style={{ color: '#333333', fontWeight: '700', fontSize: '20px', marginTop: '12px' }}
      />

      <Button className='checkButton' onClick={() => console.log('clicked')} style={styles}>
        Оформить заказ
      </Button>
    </div>
  );
}

export default Check;
