import PageTitle from '../PageTitle/PageTitle';
import Card from '../Card/Card';
import styles from './Favorite.module.scss';
import { useSelector } from 'react-redux';
import { getFavoritesCards } from '../../redux/store';

const Favorite = () => {
  const cards = useSelector((state) => getFavoritesCards(state));
  console.log(cards);
  return (
    <div className={styles.favorite}>
      <PageTitle>Favorite</PageTitle>
      <p>Lorem ipsum</p>
      <div className={styles.wrapper}>
        <article className={styles.column}>
          <ul className={styles.cards}>
            {cards.map((card) => (
              <Card
                key={card.id}
                isFavorite={card.isFavorite}
                title={card.title}
                columnId={card.id}
              ></Card>
            ))}
          </ul>
        </article>
      </div>
    </div>
  );
};

export default Favorite;
