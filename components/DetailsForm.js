import React from 'react';
import styles from './DetailsForm.module.scss';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/router';
function ReplaceToDoForm({
  title,
  description,
  importance,
  importanceValue,
  id,
}) {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      title,
      description,
      importance,
      importanceValue,
    },
  });

  const onSubmit = async data => {
    const data2 = {
      title: data.title,
      importance: data.importance,
      importanceValue: data.importanceValue,
      description: data.description,
      id,
    };

    try {
      await fetch('../api/replaceTask', {
        method: 'POST',
        body: JSON.stringify({ data2 }),
        headers: { 'Content-Type': 'application/json' },
      })
        .then(response => response.json())
        .then(resData => {
          console.log('resData:', resData);
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

  return (
    <>
      <form onBlur={handleSubmit(onSubmit)}>
        <div className={styles.container}>
          <input
            className={styles.container__title}
            placeholder="title"
            {...register('title', { required: true })}
          ></input>

          <div className={styles.container__values}>
            <select
              {...register('importance')}
              className={styles.container__box}
            >
              <option value="A">A</option>
              <option value="B">B</option>
              <option value="C">C</option>
              <option value="D">D</option>
            </select>

            <select
              {...register('importanceValue')}
              className={styles.container__box}
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </div>

          <textarea
            className={styles.container__description}
            placeholder="add description"
            {...register('description')}
          ></textarea>
        </div>
      </form>
    </>
  );
}

export default ReplaceToDoForm;
