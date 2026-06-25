import CONSTANTS from '../../../constants';
import styles from './PopularDomainsListItem.module.sass';

const { STATIC_IMAGES_PATH } = CONSTANTS;

function PopularDomainsListItem ({ src, name, price }) {
  return (
    <li className={styles.popularDomainsListItem}>
      <a href='https://www.google.com' className={styles.popularDomainCard}>
        <div className={styles.imageWrapper}>
          <img src={`${STATIC_IMAGES_PATH}popular_domains/${src}`} alt={name} />
        </div>
        <div className={styles.cardInfo}>
          <h3>{name}</h3>
          <p>{price}</p>
        </div>
      </a>
    </li>
  );
}

export default PopularDomainsListItem;
