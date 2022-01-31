import React from 'react';
import ToDo from '../../components/ToDo';
import AddToDoForm from '../../components/AddToDoForm';
import styles from './ToDos.module.scss';
import clientPromise from '../../utils/mongodb';
function ToDos({ tasks, isConnected }) {
  console.log(tasks);
  const tasksArray = tasks.map(task => (
    <ToDo
      key={task._id}
      title={task.title}
      description={task.description}
      importance={task.importance}
      importanceValue={task.importanceValue}
    />
  ));

  return (
    <>
      <div className={styles.container}>
        <div className={styles.container_main}>
          <AddToDoForm />
          {tasksArray}
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
