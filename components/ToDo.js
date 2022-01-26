import styles from './ToDo.module.scss';
function ToDo() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.container__title}>buy bread</div>
        <div className={styles.container__box}></div>
        <div className={styles.container__description}>
          make sure to get fresh one
        </div>
      </div>
    </>
  );
}

export default ToDo;
