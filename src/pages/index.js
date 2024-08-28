import Head from 'next/head';
import Image from 'next/image';
import { Inter } from 'next/font/google';
import styles from '@/styles/Home.module.css';

import { useState } from 'react';

import { ShoppingCard } from '@/components/cards/shopping-card/shopping-card';
import { Filter } from '@/components/filter/filter';
import { Header } from '@/components/header/header';

export async function getServerSideProps() {
  const res = await fetch(`${process.env.BASE_URL}/items.json`);
  const items = await res.json();
  return {
    props: {
      items,
    },
  };
}

export default function Home({ items }) {
  const [filteredItems, setFilteredItems] = useState(items);

  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart([...(JSON.parse(localStorage.getItem('cart')) || ''), item]);
    localStorage.setItem(
      'cart',
      JSON.stringify([
        ...(JSON.parse(localStorage.getItem('cart')) || ''),
        item,
      ])
    );
  };

  return (
    <div>
      <Header cart={cart} setCart={setCart} />

      <div className='container'>
        <Filter setFilteredItems={setFilteredItems} items={items} />
        <h1>Item List</h1>
        <div className='row'>
          {filteredItems?.length > 0 ? (
            filteredItems.map((item) => (
              <div className='col-lg-4' key={item}>
                <ShoppingCard item={item} addToCart={addToCart} />
              </div>
            ))
          ) : (
            <div className='col-lg-12'>There is no item match filter</div>
          )}
        </div>
      </div>
    </div>
  );
}
