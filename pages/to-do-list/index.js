import React from 'react';
import ToDo from '../../components/ToDo';
import AddToDoForm from '../../components/AddToDoForm';
import styles from './ToDos.module.scss';
function ToDos() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.container_main}>
          <AddToDoForm />
          <ToDo />
        </div>
      </div>
    </>
  );
}

export default ToDos;
