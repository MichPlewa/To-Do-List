import styles from './searchForm.module.scss';
import TextInput from '../TextInput/TextInput.js';
import Button from '../Button/Button.js';
import { useDispatch, useSelector } from 'react-redux';
import { selectInputValue, upDateSearch } from '../../redux/store';

const SearchForm = () => {
  const dispatch = useDispatch();
  const oldValue = useSelector(selectInputValue);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.elements);
    dispatch(upDateSearch(e.target.elements.search.value));
  };
  return (
    <form className={styles.searchForm} onSubmit={handleSubmit}>
      <TextInput
        placeholder="Search..."
        defaultValue={oldValue}
        id={'search'}
      />
      <Button>
        <span className="fa fa-search" />
      </Button>
    </form>
  );
};

export default SearchForm;
