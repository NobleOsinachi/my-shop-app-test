import styles from '../card.module.scss';

export const CheckOutCard = ({ item, removeCard }) => {
  return (
    <div className={`${styles.card} card`}>
      <li key={item.id}>
        <h2>{item.name}</h2>
        <p>{item.description}</p>
        <p>${item.price.toFixed(2)}</p>
        <button onClick={() => removeCard(item)} className='btn btn-primary'>
          Remove
        </button>
      </li>
    </div>
  );
};
