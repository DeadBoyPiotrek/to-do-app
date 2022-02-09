import Head from 'next/head';
// import { getTasks } from '../../../utils/mongodb';
import { getTask } from '../../../utils/mongodb';
import styles from './taskId.module.scss';
import DetailsForm from '../../../components/DetailsForm';
function Task({ task, taskId }) {
  const { title, description, importance, importanceValue } = task[0];

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description || title} />
      </Head>

      <DetailsForm
        id={taskId}
        title={title}
        description={description}
        importance={importance}
        importanceValue={importanceValue}
      />
    </>
  );
}

// export const getStaticPaths = async () => {
//   try {
//     const tasks = await getTasks();

//     const paths = tasks.map(task => ({
//       params: { taskId: task._id },
//     }));

//     return { paths, fallback: false };
//   } catch (e) {
//     console.error(e);

//     const arr = [{ params: { taskId: 'task1' } }];
//     return {
//       arr,
//       fallback: false,
//     };
//   }
// };

export const getServerSideProps = async ({ params }) => {
  const taskId = params.taskId;
  try {
    const task = await getTask(taskId);

    return {
      props: { isConnected: true, task, taskId },
    };
  } catch (e) {
    console.error(e);
    return {
      props: { isConnected: false },
    };
  }
};
export default Task;
