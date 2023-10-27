import React, { useState } from 'react';
import { getFlowersByIds } from '../../../utils/localStorage';
import { IFlower } from '../../../API/IFlowers';
import BasketItem from './BasketItem/BasketItem';

function BasketItems({ids, flowers, setFavorites}:{ids: number[], flowers: IFlower[], setFavorites: (favorites: number)=>void}) {
  const [storagedFlowers, setStoragedFlowers] = useState(getFlowersByIds(ids, flowers))

  return (
    <div className="items">
      {storagedFlowers.map(flower => <BasketItem key={flower.id} flower={flower} storagedFlowers={storagedFlowers} setFavorites={setFavorites} setStoragedFlowers={setStoragedFlowers}/>)}
    </div>
   );
}

export default BasketItems;