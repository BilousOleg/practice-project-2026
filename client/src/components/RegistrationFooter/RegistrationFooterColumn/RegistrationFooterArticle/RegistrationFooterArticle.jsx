import styles from './RegistrationFooterArticle.module.sass';

function RegistrationFooterArticle ({ question, answer }) {
  return (
    <article className={styles.article}>
      <h3 className={styles.articleHeading}>{question}</h3>
      <p className={styles.articleText}>{answer}</p>
    </article>
  );
}

export default RegistrationFooterArticle;
