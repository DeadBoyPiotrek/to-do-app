import styles from './ToDo.module.scss';
function ToDo({ title, description, importance, importanceValue }) {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.container__title}>{title}</div>
        <div className={styles.container__box}>{importance}</div>
        <div className={styles.container__box}>{importanceValue}</div>
        <div className={styles.container__description}>{description}</div>
      </div>
    </>
  );
}

export default ToDo;
