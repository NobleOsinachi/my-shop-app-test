import { useState } from 'react';
import style from './filter.module.scss';

export const Filter = ({ setFilteredItems, items }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOption, setSortOption] = useState('');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');

  const handleSearch = (e) => {
    const value = e.target.value.toLowerCase();
    setSearchTerm(value);
    filterAndSortItems(value, sortOption, minPrice, maxPrice);
  };

  const handleSort = (e) => {
    const value = e.target.value;
    setSortOption(value);
    filterAndSortItems(searchTerm, value, minPrice, maxPrice);
  };

  const handlePriceRange = () => {
    filterAndSortItems(searchTerm, sortOption, minPrice, maxPrice);
  };

  const filterAndSortItems = (searchTerm, sortOption, minPrice, maxPrice) => {
    let newItems = items.filter(
      (item) =>
        item.name.toLowerCase().includes(searchTerm) &&
        item.price >= (minPrice || 0) &&
        item.price <= (maxPrice || Infinity)
    );

    if (sortOption === 'name') {
      newItems.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortOption === 'price') {
      newItems.sort((a, b) => a.price - b.price);
    }

    setFilteredItems(newItems);
  };
  return (
    <div>
      <div className='row mb-3'>
        <div className='col-lg-6'>
          <input
            type='text'
            placeholder='Search items...'
            value={searchTerm}
            onChange={handleSearch}
            className='form-control'
          />
        </div>
        <div className=' col-lg-2'>
          <input
            type='number'
            placeholder='Min price'
            value={minPrice}
            onChange={(e) => setMinPrice(e.target.value)}
            onBlur={handlePriceRange}
            className='form-control'
          />
        </div>
        <div className=' col-lg-2'>
          <input
            type='number'
            placeholder='Max price'
            value={maxPrice}
            onChange={(e) => setMaxPrice(e.target.value)}
            onBlur={handlePriceRange}
            className='form-control'
          />
        </div>
        <div className={`col-lg-2 ${style.Filter}`}>
          <div className='form-group position-relative'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='16'
              height='16'
              fill='currentColor'
              className='bi bi-funnel'
              viewBox='0 0 16 16'
            >
              <path d='M1.5 1.5A.5.5 0 0 1 2 1h12a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.128.334L10 8.692V13.5a.5.5 0 0 1-.342.474l-3 1A.5.5 0 0 1 6 14.5V8.692L1.628 3.834A.5.5 0 0 1 1.5 3.5zm1 .5v1.308l4.372 4.858A.5.5 0 0 1 7 8.5v5.306l2-.666V8.5a.5.5 0 0 1 .128-.334L13.5 3.308V2z' />
            </svg>
            <select
              className='form-control'
              id='exampleFormControlSelect1'
              value={sortOption}
              onChange={handleSort}
            >
              <option value=''>Sort by</option>
              <option value='name'>Name</option>
              <option value='price'>Price</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};
