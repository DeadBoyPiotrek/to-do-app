import styles from './ToDo.module.scss';
import { MdDeleteForever } from 'react-icons/md';
import { AiFillEdit } from 'react-icons/ai';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';
function ToDo({ id, title, description, importance, importanceValue }) {
  const router = useRouter();
  //!  delete task
  const deleteTaskHandler = async task => {
    try {
      await fetch('api/deleteTask', {
        method: 'POST',
        body: JSON.stringify({ id }),
        headers: { 'Content-Type': 'application/json' },
      })
        .then(response => response.json())
        .then(resData => {
          //? refreshData
          const refreshData = () => {
            router.replace(router.asPath);
          };
          refreshData();
          //? refreshData
        });
    } catch (err) {
      err => console.log('err:', err);
    }
  };

  //!  delete task

  //!  edit task

  const editTaskHandler = task => {
    router.push(`to-do-list/${id}`);
  };
  //!  edit task
  return (
    <motion.li
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
      exit={{
        opacity: 0,
        transition: {
          duration: 0.5,
        },
      }}
    >
      <div className={styles.container}>
        <div className={styles.container__title}>{title}</div>
        {/* <div className={styles.container__box}>{}</div> */}
        {/* <div className={styles.container__box}>{importanceValue}</div> */}
        {description && (
          <div className={styles.container__description}>{description}</div>
        )}
        <button
          onClick={deleteTaskHandler}
          className={styles.container__delete}
        >
          <MdDeleteForever size={'1.3em'} />
        </button>
        <button onClick={editTaskHandler} className={styles.container__edit}>
          <AiFillEdit size={'1.3em'} />
        </button>
      </div>
    </motion.li>
  );
}

export default ToDo;
