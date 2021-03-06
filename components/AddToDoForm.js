import React from 'react';
import styles from './AddToDoForm.module.scss';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/router';
function AddToDoForm() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async data => {
    const data2 = {
      title: data.title,
      importance: data.importance,
      importanceValue: +data.importanceValue,
      description: data.description,
    };

    try {
      await fetch('api/addTask', {
        method: 'POST',
        body: JSON.stringify({ data2 }),
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
    reset();
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
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </div>
          <div className={styles.container__description}>
            <input
              placeholder="description"
              {...register('description')}
            ></input>
          </div>
          <button>Add to do</button>
        </div>
      </form>
    </>
  );
}

export default AddToDoForm;
