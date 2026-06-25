import { Field, Form, Formik } from 'formik';
import styles from './RefinaryForm.module.sass';

const initialValues = {
  refinary: '',
};

function RefinaryForm () {
  const handleSubmit = ({ target: value }) => {
    console.log(value);
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      <Form className={styles.refinaryForm}>
        <Field
          type='text'
          name='refinary'
          className={styles.refinaryInput}
          placeholder='Refine by keyword (e.g., tech, health, food...)'
        />
        <button className={styles.submitBtn} type='submit'>
          Refine
        </button>
        {/* <button></button> */}
      </Form>
    </Formik>
  );
}

export default RefinaryForm;
