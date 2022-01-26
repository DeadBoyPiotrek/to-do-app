import React from 'react';
import styles from './ToDo.module.scss';
function ToDo() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.container_title}>buy bread</div>
        <div className={styles.container_box}></div>
        <div className={styles.container_description}>
          make sure to get fresh one
        </div>
      </div>
    </>
  );
}

export default ToDo;
