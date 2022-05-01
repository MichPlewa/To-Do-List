import styles from './searchForm.module.scss';
import TextInput from '../TextInput/TextInput.js';
import Button from '../Button/Button.js';

const SearchForm = () => {
  return (
    <form className={styles.searchForm}>
      <TextInput placeholder="Search..."/>
      <TextInput placeholder="Add new column"/>
      <Button text='Search'/>
    </form>
  );
};

export default SearchForm;