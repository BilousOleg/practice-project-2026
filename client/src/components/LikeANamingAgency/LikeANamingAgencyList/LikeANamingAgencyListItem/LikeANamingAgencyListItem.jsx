import styles from './LikeANamingAgencyListItem.module.sass';

function LikeANamingAgencyListItem ({ src, title, body }) {
  return (
    <li className={styles.listCard}>
      <div className={styles.imageWrapper}>
        <img src={src} alt={title} />
      </div>
      <h4 className={styles.cardHeading}>{title}</h4>
      <p className={styles.cardBody}>{body}</p>
    </li>
  );
}

export default LikeANamingAgencyListItem;
