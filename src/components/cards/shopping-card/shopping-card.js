import styles from '../card.module.scss';

export const ShoppingCard = ({ item, addToCart }) => {
  return (
    <div className={`${styles.card} card`}>
      <li key={item.id}>
        <h2>{item.name}</h2>
        <p>{item.description}</p>
        <p>${item.price.toFixed(2)}</p>
        <button onClick={() => addToCart(item)} className='btn btn-primary'>
          Add to Cart
        </button>
      </li>
    </div>
  );
};
