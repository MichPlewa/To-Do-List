import { useDispatch, useSelector } from 'react-redux';
import { getAllLists, addList } from '../../redux/store';
import styles from './Lists.module.scss';
import { Link } from 'react-router-dom';
import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button';
import { useState } from 'react';

const Lists = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const dispatch = useDispatch();
  const lists = useSelector((state) => getAllLists(state));
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addList({ title, description }));
    setTitle('');
    setDescription('');
  };
  return (
    <section className={styles.lists}>
      <h2 className={styles.heading}>Browse lists</h2>
      {lists.map((list) => (
        <Link key={list.id} to={'/list/' + list.id} className={styles.listLink}>
          <h3>{list.title}</h3>
          <p>{list.description}</p>
        </Link>
      ))}
      <form onSubmit={handleSubmit}>
        <span>Title: </span>
        <TextInput
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <span>Description: </span>
        <TextInput
          value={description}
          onChange={(e) => {
            setDescription(e.target.value);
          }}
        />
        <Button>Add list</Button>
      </form>
    </section>
  );
};

export default Lists;
