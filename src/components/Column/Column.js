import styles from './column.module.scss';
import Card from '../Card/Card.js';
import CardForm from '../CardForm/CardForm.js';
import { useSelector } from 'react-redux';

const Column = (props) => {
  const cards = useSelector((state) =>
    state.cards.filter((card) => card.columnId === props.id)
  );

  return (
    <article className={styles.column}>
      <h2 className={styles.title}>
        <span className={styles.icon + ' fa fa-' + props.icon}></span>
        {props.title}
      </h2>
      <ul className={styles.cards}>
        {cards.map((cards) => (
          <Card key={cards.id} title={cards.title} />
        ))}
      </ul>
      <CardForm columnId={props.id} />
    </article>
  );
};

export default Column;
