import styles from './card.module.scss';
import clsx from 'clsx';
import { toggleFavorite, removeCard } from '../../redux/cardRedux';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

const Card = (props) => {
  const dispatch = useDispatch();
  const [favorite, setFavorite] = useState(props.isFavorite);
  const clickHandlerFavorite = (e) => {
    e.preventDefault();
    setFavorite(!favorite);
    dispatch(toggleFavorite(props.cardId));
  };
  const clickHandlerRemove = (e) => {
    e.preventDefault();
    dispatch((removeCard(props.cardId)))
  };

  return (
    <li className={styles.card}>
      <div>{props.title}</div>
      <div>
        <button
          onClick={clickHandlerFavorite}
          className={clsx(styles.button, favorite && styles.buttonActive)}
        >
          <i className="fa fa-star-o" aria-hidden="true" />
        </button>
        <button onClick={clickHandlerRemove} className={styles.button}>
          <i className="fa fa-trash"></i>
        </button>
      </div>
    </li>
  );
};

export default Card;
