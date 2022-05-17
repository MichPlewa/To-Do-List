import styles from './card.module.scss';
import clsx from 'clsx';
import { toggleFavorite } from '../../redux/store';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

const Card = (props) => {
  const dispatch = useDispatch();
  const [favorite, setFavorite] = useState(props.isFavorite);
  const clickHandler = (e) => {
    e.preventDefault();
    setFavorite(!favorite);
    dispatch(toggleFavorite(props.cardId));
  };
  return (
    <li className={styles.card}>
      <div>{props.title}</div>
      <button
        onClick={clickHandler}
        className={clsx(styles.button, favorite && styles.buttonActive)}
      >
        <i className="fa fa-star-o" aria-hidden="true" />
      </button>
    </li>
  );
};

export default Card;
