import styles from './list.module.scss'

const List = () => {
  return (
  <div className={styles.list}>
    <header className={styles.header}>
      <h1 className={styles.title}>THINGS TO DO <span>SOON</span></h1>
    </header>
    <p className={styles.description}>Intresting things I want to check out!</p>
    <section className={styles.columns}>
      <article>
        <h2 className={styles.title}>Books</h2>
        </article>
      <article>
        <h2 className={styles.title}>Movies</h2>
        </article>
      <article>
        <h2 className={styles.title}>Games</h2>
      </article>
    </section>
  </div>
  )
}

export default List