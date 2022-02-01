import styles from './ToDo.module.scss';
import { MdDeleteForever } from 'react-icons/md';
import { AiFillEdit } from 'react-icons/ai';
function ToDo({ title, description, importance, importanceValue }) {
  const deleteTaskHandler = task => {
    console.log(task);
  };
  const editTaskHandler = task => {
    console.log(task);
  };
  return (
    <li>
      <div className={styles.container}>
        <div className={styles.container__title}>{title}</div>
        {/* <div className={styles.container__box}>{importance}</div>
        <div className={styles.container__box}>{importanceValue}</div> */}
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
    </li>
  );
}

export default ToDo;
