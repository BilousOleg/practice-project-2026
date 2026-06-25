import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import RefinaryForm from '../../components/RefinaryForm/RefinaryForm';
import PopularDomainsListItem from './PopularDomainsListItem/PopularDomainsListItem';
import popularDomainsCards from './popularDomainsCards.json';
import moreOptions from './moreOptions.json';
import styles from './RecommendedForYou.module.sass';
import MoreOptionsListItem from './MoreOptionsListItem/MoreOptionsListItem';

function RecommendedForYou () {
  return (
    <div>
      <Header />
      <main className={styles.recommendedForYouPage}>
        <section className={styles.refineSection}>
          <div className={styles.textSection}>
            <h1>✨Recommended For You</h1>
            <p>Personalized picks based on your browsing & favorites</p>
            <div></div>
          </div>
          <div className={styles.inputPart}>
            <RefinaryForm />
          </div>
        </section>
        <section className={styles.popularDomainsSection}>
          <h2 className={styles.popularDomainsHeading}>🔥 Popular Domains</h2>
          <p className={styles.popularDomainsText}>
            Browse and interact to get personalized picks
          </p>
          <ul className={styles.popularDomainsList}>
            {popularDomainsCards.map((c, index) => (
              <PopularDomainsListItem
                key={index}
                src={c.imageSrc}
                name={c.name}
                price={c.price}
              />
            ))}
          </ul>
        </section>
        <section className={styles.moreOptionsSection}>
          <article className={styles.container}>
            <div className={styles.moreOptionsInfo}>
              <h2>Need More Options?</h2>
              <p>Two ways to find your perfect brand name</p>
            </div>
            <ul className={styles.moreOptionsList}>
              {moreOptions.map(o => (
                <MoreOptionsListItem
                  src={o.imageSrc}
                  title={o.title}
                  body={o.body}
                  buttonText={o.buttonText}
                  path={o.path}
                />
              ))}
            </ul>
          </article>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default RecommendedForYou;
