import styles from './cardForm.module.scss';
import Button from './../Button/Button';
import TextInput from './../TextInput/TextInput';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addCard } from '../../redux/cardRedux';

const CardForm = (props) => {
  const dispatch = useDispatch();
  const columnId = props.columnId;
  const [title, setTitle] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addCard({ title, columnId }));
    setTitle('');
  };

  return (
    <form className={styles.cardForm} onSubmit={handleSubmit}>
      <TextInput value={title} onChange={(e) => setTitle(e.target.value)} />
      <Button>Add card</Button>
    </form>
  );
};

export default CardForm;
