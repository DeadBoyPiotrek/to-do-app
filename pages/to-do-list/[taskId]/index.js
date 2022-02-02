// import clientPromise from '../../../utils/mongodb';
import Head from 'next/head';
import { getTasks } from '../../../utils/mongodb';
import { getTask } from '../../../utils/mongodb';
import { useRouter } from 'next/router';
import styles from './taskId.module.scss';
function Task({ task }) {
  const { title, description, importance, importanceValue } = task;
  console.log(title);
  console.log(task);
  return (
    <>
      <Head></Head>
      <div className={styles.container}>
        <div className={styles.container__title}>{title}</div>
        <div className={styles.container__box}>{}</div>
        <div className={styles.container__box}>{importanceValue}</div>
        {description && (
          <div className={styles.container__description}>{description}</div>
        )}
      </div>
    </>
  );
}

export const getStaticPaths = async () => {
  try {
    const tasks = await getTasks();

    const paths = tasks.map(task => ({
      params: { taskId: task._id },
    }));

    return { paths, fallback: false };
  } catch (e) {
    console.error(e);

    const arr = [{ params: { taskId: 'task1' } }];
    return {
      arr,
      fallback: false,
    };
  }
};

export const getStaticProps = async ({ params }) => {
  const taskId = params.taskId;
  try {
    const task = await getTask(taskId);

    return {
      props: { isConnected: true, task },
    };
  } catch (e) {
    console.error(e);
    return {
      props: { isConnected: false },
    };
  }
};
export default Task;
