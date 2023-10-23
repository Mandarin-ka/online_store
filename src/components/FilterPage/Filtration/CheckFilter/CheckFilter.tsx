import React from 'react';
import Checkbox from '../../../UI/Checkbox/Checkbox';
import { Filter } from '../FilterInterface';
import Accordeon from '../../../UI/Accordeon/Accordeon';

function CheckFilter({
  name,
  filter,
  setFilter,
  options
}: {
  name: string;
  filter: Filter;
  setFilter: (elem: Filter) => void;
  options: string[]
}) {
  return (
    <Accordeon name={name}>
      <Checkbox
        name={name}
        options={options}
        setFilter={setFilter}
        filter={filter}
      />
    </Accordeon>
  );
}

export default CheckFilter;
