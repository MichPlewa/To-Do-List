import styles from './searchForm.module.scss';

const SearchForm = () => {
  return (
    <form className={styles.searchForm}>
      <input type='text' className={styles.input}/>
      <button className={styles.button}>Seatch</button>
    </form>
  );
};

export default SearchForm;