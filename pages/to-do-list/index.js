import React from 'react';
import ToDo from '../../components/ToDo';
import AddToDoForm from '../../components/AddToDoForm';
import styles from './ToDos.module.scss';
import clientPromise from '../../utils/mongodb';
function ToDos({ tasks, isConnected }) {
  const addTasksArray = array => {
    return array.map(task => (
      <ToDo
        key={task._id}
        title={task.title}
        description={task.description}
        // importance={task.importance}
        // importanceValue={task.importanceValue}
      />
    ));
  };
  const compare = (a, b) => {
    return a.importanceValue - b.importanceValue;
  };

  const tasksA = tasks.filter(task => task.importance === 'A').sort(compare);
  const tasksB = tasks.filter(task => task.importance === 'B').sort(compare);
  const tasksC = tasks.filter(task => task.importance === 'C').sort(compare);
  const tasksD = tasks.filter(task => task.importance === 'D').sort(compare);

  const tasksAOut = addTasksArray(tasksA);
  const tasksBOut = addTasksArray(tasksB);
  const tasksCOut = addTasksArray(tasksC);
  const tasksDOut = addTasksArray(tasksD);

  return (
    <>
      <div className={styles.container}>
        <AddToDoForm />
        <div className={styles.container__main}>
          <div className={styles.container__main_column}>
            <h1>A</h1>
            <ul className={styles.container__main_list}>{tasksAOut}</ul>
          </div>
          <div className={styles.container__main_column}>
            <h1>B</h1>
            <ul className={styles.container__main_list}>{tasksBOut}</ul>
          </div>
          <div className={styles.container__main_column}>
            <h1>C</h1>
            <ul className={styles.container__main_list}>{tasksCOut}</ul>
          </div>
          <div className={styles.container__main_column}>
            <h1>D</h1>
            <ul className={styles.container__main_list}>{tasksDOut}</ul>
          </div>
        </div>
      </div>
    </>
  );
}
export async function getStaticProps(context) {
  try {
    const client = await clientPromise;
    const db = await client.db();
    const data = await db.collection('tasks').find({}).toArray();
    const tasks = JSON.parse(JSON.stringify(data));
    return {
      props: { isConnected: true, tasks },
    };
  } catch (e) {
    console.error(e);
    return {
      props: { isConnected: false },
    };
  }
}

export default ToDos;
