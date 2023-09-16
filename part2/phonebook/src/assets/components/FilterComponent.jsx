import React from 'react';

const FilterComponent = ({filter, setFilter}) => {
  return (
    <div>
      filter:
      <input 
        onChange={(event) => setFilter(event.target.value)}
        value={filter}
        placeholder='add name filter here'
      />
    </div>
  );
};

export default FilterComponent;