import { Header } from '@/components/header/header';
import { CheckOutCard } from '@/components/cards/checkout-card/checkout-card';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Cart() {
  const [cart, setCart] = useState();

  const removeCard = (index) => {
    const newCart = cart.filter((_, i) => i !== index);
    setCart(newCart);
    localStorage.setItem('cart', JSON.stringify(newCart));
  };

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('cart')) || '';
    setCart(storedCart);
  }, []);

  return (
    <div>
      <Header cart={cart} setCart={setCart} />

      <div className='container'>
        <h1>Your Cart</h1>

        <div className='row'>
          <div className='col-lg-9'>
            <div className='row'>
              {cart?.length === 0 ? (
                <p>Your cart is empty</p>
              ) : (
                cart?.map((item, index) => (
                  <div className='col-lg-4' key={item}>
                    <CheckOutCard
                      item={item}
                      removeCard={() => removeCard(index)}
                    />
                  </div>
                ))
              )}
              <Link href='/'>Continue Shopping</Link>
            </div>
          </div>
          <div className='col-lg-3 card p-5'>
            {cart?.length > 0 && (
              <button className='btn btn-primary'>Proceed to Checkout</button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
