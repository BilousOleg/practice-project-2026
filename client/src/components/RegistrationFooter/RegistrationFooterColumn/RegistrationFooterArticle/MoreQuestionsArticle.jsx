import styles from './RegistrationFooterArticle.module.sass';
import CONSTANTS from '../../../../constants';

const {
  COMPANY_CONTACTS: { TEL_NUMBER },
} = CONSTANTS;

function MoreQuestionsArticle () {
  return (
    <article className={styles.article}>
      <h3 className={styles.articleHeading}>
        I have other questions! How can I get in touch with Squadhelp?
      </h3>
      <p className={styles.articleText}>
        Check out our <strong>FAQs</strong> or send us a{' '}
        <strong>message</strong>. For assistance with launching a contest, you
        can also call us at {`${TEL_NUMBER}`} or schedule a{' '}
        <strong>Branding Consultation</strong>
      </p>
    </article>
  );
}

export default MoreQuestionsArticle;
