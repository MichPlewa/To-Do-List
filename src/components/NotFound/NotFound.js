import PageTitle from '../PageTitle/PageTitle';
import styles from './NotFound.module.scss';

const NotFound = () => {
  return (
    <div className={styles.notfound}>
      <PageTitle>404 NotFound</PageTitle>
    </div>
  );
};

export default NotFound;
