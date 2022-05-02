import styles from './column.module.scss';
import Card from '../Card/Card.js';

const Column = props => {
    return (
        <article className={styles.column}>
            <h2 className={styles.title}>
                <span className={styles.icon + ' fa fa-' + props.icon}></span>
                {props.title}
            </h2>
            <ul className={styles.cards}>
                {props.cards.map(card => <Card key={card.id} title={card.title} />)}
            </ul>
        </article>
    );
};

export default Column;