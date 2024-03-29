import React, { useState } from 'react';
import { getStoragedFlowers } from '../../utils/localStorage';
import { useMaxPrice, useMaxSize, useMinPrice, useMinSize } from '../../hooks/usePriceSize';
import Cards from '../../components/FilterPage/Cards/Cards';
import { Filter } from '../../components/FilterPage/Filtration/FilterInterface';
import Filtration from '../../components/FilterPage/Filtration/Filtration';
import Arrange from '../../components/FilterPage/Sorting/Arrange/Arrange';
import Sorting from '../../components/FilterPage/Sorting/Sorting/Sorting';
import TextInput from '../../components/UI/TextInput/TextInput';
import { useCards } from '../../hooks/useCards';
import './FilterPage.css';
import { IFlower } from '../../API/IFlowers';

function FilterPage({ flowers, setFavorites }: { flowers: IFlower[]; setFavorites: (favorites: number) => void }) {
  const [sort, setSort] = useState('');
  const [mode, setMode] = useState('block');

  const [filter, setFilter] = useState<Filter>({
    query: '',
    type: [],
    reason: [],
    color: '',
    flower: [],
    priceMin: useMinPrice(flowers),
    priceMax: useMaxPrice(flowers),
    sizeMin: useMinSize(flowers),
    sizeMax: useMaxSize(flowers),
  });

  const cards = useCards(flowers, filter, sort);

  return (
    <div className='container filter'>
      <div className='top__wrapper'>
        <TextInput type={'search'} placeholder='Поиск...' value={filter} setValue={setFilter} />
        <div className='sorting__wrapper'>
          <Arrange mode={mode} setMode={setMode} />
          <Sorting sort={sort} setSort={setSort} />
        </div>
      </div>
      <Filtration setFilter={setFilter} filter={filter} />
      <Cards mode={mode} cards={cards} setCount={() => setFavorites(getStoragedFlowers().length)} />
    </div>
  );
}

export default FilterPage;
