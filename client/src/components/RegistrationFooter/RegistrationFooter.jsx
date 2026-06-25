import RegistrationFooterColumn from './RegistrationFooterColumn/RegistrationFooterColumn';
import registrationFooterData from './registrationFooterData.json';
import styles from './RegistrationFooter.module.sass';

function RegistrationFooter () {
  return (
    <footer className={styles.footer}>
      <div className={styles.articlesMainContainer}>
        {registrationFooterData.map((c, index, array) => (
          <RegistrationFooterColumn
            key={index}
            columnData={c}
            isLast={index === array.length - 1}
          />
        ))}
      </div>
    </footer>
  );
}

export default RegistrationFooter;
