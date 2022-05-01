import styles from './list.module.scss';
import Column from '../Column/Column.js';

const List = () => {
  return (
  <div className={styles.list}>
    <header className={styles.header}>
      <h1 className={styles.title}>THINGS TO DO <span>SOON</span></h1>
    </header>
    <p className={styles.description}>Intresting things I want to check out!</p>
    <section className={styles.columns}>
      <Column title='Books' icon='book'/>
      <Column title='Movies' icon='film'/>
      <Column title='Games' icon='gamepad'/>
    </section>
  </div>
  )
}

export default List