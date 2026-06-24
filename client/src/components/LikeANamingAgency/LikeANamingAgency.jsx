import LikeANamingAgencyList from './LikeANamingAgencyList/LikeANamingAgencyList';
import styles from './LikeANamingAgency.module.sass';

function LikeANamingAgency () {
  return (
    <>
      <h3 className={styles.heading}>Like A Naming Agency, But Better</h3>
      <p className={styles.description}>
        With Atom's managed contests, leverage our team's naming expertise and
        our pool of 300K+ naming experts. Our hybrid-solution partners you with
        a trained Atom branding consultant who will guide your crowdsourcing
        process step-by-step to get the best results possible.
      </p>
      <LikeANamingAgencyList />
      <a href='https://www.google.com/' className={styles.learnMoreBtn}>
        Learn More
      </a>
    </>
  );
}

export default LikeANamingAgency;
