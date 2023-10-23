import React from 'react';
import BasketItems from '../../components/BasketPage/BasketItems/BasketItems';
import { getStoragedFlowers } from '../../utils/localStorage';
import { IFlower } from '../../API/IFlowers';
import Check from '../../components/BasketPage/Check/Check';
import './BasketPage.css';

function BasketPage({ flowers, setFavorites }: { flowers: IFlower[]; setFavorites: (favorites: number) => void }) {
  return (
    <div className='container basket'>
      <BasketItems ids={getStoragedFlowers()} flowers={flowers} setFavorites={setFavorites} />
      <Check price={0} />
    </div>
  );
}

export default BasketPage;
