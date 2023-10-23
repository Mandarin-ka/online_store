import React from 'react';
import { Filter } from './FilterInterface';
import ColorFilter from './ColorFilter/ColorFilter';
import cl from './Filtration.module.css';
import PriceFilter from './PriceFilter/PriceFilter';
import SizeFilter from './SizeFilter/SizeFilter';
import Button from '../../UI/Button/Button';
import {
  getFlowers,
  getMaxPrice,
  getMaxSize,
  getMinPrice,
  getMinSize,
  getOccasions,
  getTypes,
} from '../../../utils/FlowersUtils';
import CheckFilter from './CheckFilter/CheckFilter';

function Filtration({
  filter,
  setFilter,
}: {
  filter: Filter;
  setFilter: (elem: Filter) => void;
}) {
  return (
    <div className={cl.filtration}>
      <CheckFilter name='тип' filter={filter} setFilter={setFilter} options={getTypes()}/>
      <CheckFilter name='повод' filter={filter} setFilter={setFilter} options={getOccasions()}/>
      <ColorFilter name='цвет' filter={filter} setFilter={setFilter} />
      <CheckFilter
        name='основной цветок'
        filter={filter}
        setFilter={setFilter}
        options={getFlowers()}
      />
      <PriceFilter name='цена' filter={filter} setFilter={setFilter} />
      <SizeFilter name='Высота' filter={filter} setFilter={setFilter} />
      <Button
        className={cl.remove__button}
        onClick={() =>
          setFilter({
            query: '',
            type: [],
            reason: [],
            color: '',
            flower: [],
            priceMin: getMinPrice(),
            priceMax: getMaxPrice(),
            sizeMin: getMinSize(),
            sizeMax: getMaxSize(),
          })
        }
      >
        сбросить фильтры
      </Button>
    </div>
  );
}

export default Filtration;
