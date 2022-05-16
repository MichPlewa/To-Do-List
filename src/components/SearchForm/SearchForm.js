import styles from './searchForm.module.scss';
import TextInput from '../TextInput/TextInput.js';
import Button from '../Button/Button.js';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { inputValue, upDateSearch } from '../../redux/store';

const SearchForm = () => {
  const dispatch = useDispatch();
  const oldValue = useSelector((state) => inputValue(state));
  const [search, setSearch] = useState(oldValue);
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(upDateSearch(search));
  };
  return (
    <form className={styles.searchForm} onSubmit={handleSubmit}>
      <TextInput
        placeholder="Search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <Button>
        <span className="fa fa-search" />
      </Button>
    </form>
  );
};

export default SearchForm;
