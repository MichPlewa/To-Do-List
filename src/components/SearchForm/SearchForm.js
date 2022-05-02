import styles from './searchForm.module.scss';
import TextInput from '../TextInput/TextInput.js';
import Button from '../Button/Button.js';

const SearchForm = () => {
  return (
    <form className={styles.searchForm}>
      <TextInput placeholder="Search..." />
      <Button>
          <span className="fa fa-search" />
      </Button>
    </form>
  );
};

export default SearchForm;