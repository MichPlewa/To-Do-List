import styles from './card.module.scss';

const Card = props => {
    return (
        <li className={styles.card}>{props.title}</li>
    );
};

export default Card;