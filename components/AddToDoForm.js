import React from 'react';
import styles from './AddToDoForm.module.scss';
import { useForm } from 'react-hook-form';
function AddToDoForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = data => {
    console.log(data);
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.container}>
          <div className={styles.container__title}>
            <input
              placeholder="title"
              {...register('title', { required: true })}
            ></input>
          </div>
          <div className={styles.container__importance}>
            <select {...register('importance')}>
              <option value="A">A</option>
              <option value="B">B</option>
              <option value="C">C</option>
              <option value="D">D</option>
            </select>
          </div>
          <div className={styles.container__importanceValue}>
            <select {...register('importanceValue')}>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="5">5</option>
            </select>
          </div>
          <div className={styles.container__description}>
            <input
              placeholder="description"
              {...register('description', { required: true })}
            ></input>
          </div>
          <button>Add to do</button>
        </div>
      </form>
    </>
  );
}

export default AddToDoForm;
