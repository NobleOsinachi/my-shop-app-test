import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Dropdown, InputGroup, DropdownButton } from 'react-bootstrap';

export const Header = ({ cart }) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('cart')) || '';
    setItems(storedCart);
  }, [cart]);

  return (
    <>
      <nav className='navbar navbar-expand-lg navbar-light bg-light mb-4'>
        <div className='container d-flex justify-content-between'>
          <Link className='navbar-brand d-flex' href='/'>
            App Logo
          </Link>

          <InputGroup className='mb-3 d-flex w-auto'>
            <DropdownButton
              variant='outline-secondary'
              title={
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='16'
                  height='16'
                  fill='currentColor'
                  class='bi bi-cart3'
                  viewBox='0 0 16 16'
                >
                  <path d='M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l.84 4.479 9.144-.459L13.89 4zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2' />
                </svg>
              }
              id='input-group-dropdown-2'
              align='end'
            >
              <Dropdown.Item href='/cart'>
                View Cart ({items?.length} items)
              </Dropdown.Item>
            </DropdownButton>
          </InputGroup>
        </div>
      </nav>
    </>
  );
};
