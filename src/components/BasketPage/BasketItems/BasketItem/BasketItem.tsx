import React from 'react';
import { IFlower } from '../../../../API/IFlowers';
import cl from './BasketItem.module.css'
import BasketCheck from '../../../UI/BasketCheck/BasketCheck';
import ColorChooser from '../../../UI/ColorChooser/ColorChooser';
import Counter from '../../../UI/Counter/Counter';
import { getStoragedFlowers, removeFlower } from '../../../../utils/localStorage';

function BasketItem({flower, storagedFlowers, setStoragedFlowers, setFavorites}:{flower: IFlower,storagedFlowers:IFlower[], setStoragedFlowers: (flowers: IFlower[])=>void, setFavorites:(favorites: number)=>void}) {

  return (
    <div className={cl.item}>
      <BasketCheck  id={flower.id}/>
      <img src={flower.thumbnail} alt="" className={cl.img}/>
      <div className={cl.name__block}>
        <span className={cl.name}>{flower.title}</span>
        <span className={cl.amount}>{`Доступно: ${flower.stock}шт`}</span>
      </div>
      <ColorChooser colors={flower.color}/>
      <Counter stock={flower.stock}/>
      <div className={cl.price}>{`$${flower.price.toFixed(2)}`}</div>
      <div className={cl.cross} onClick={()=>{
        removeFlower(flower);
        setStoragedFlowers(storagedFlowers.filter(e=>e.id !== flower.id))
        setFavorites(getStoragedFlowers().length)
        }}>
        <span className={cl.cross_line}></span>
      </div>
    </div>
   );
}

export default BasketItem;