import styles from './column.module.scss';
import Card from '../Card/Card.js';
import CardForm from '../CardForm/CardForm.js';
import { useSelector } from 'react-redux';
import { getFilteredCards } from '../../redux/store';

const Column = (props) => {
  const cards = useSelector((state) => getFilteredCards(state, props.id));
  return (
    <article className={styles.column}>
      <h2 className={styles.title}>
        <span className={styles.icon + ' fa fa-' + props.icon}></span>
        {props.title}
      </h2>
      <ul className={styles.cards}>
        {cards.map((cards) => (
          <Card
            key={cards.id}
            title={cards.title}
            isFavorite={cards.isFavorite}
            cardId={cards.id}
          />
        ))}
      </ul>
      <CardForm columnId={props.id} />
    </article>
  );
};

export default Column;
