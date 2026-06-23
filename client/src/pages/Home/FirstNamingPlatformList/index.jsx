import firstNamingPlatformCards from './firstNamingPlatform';
import styles from './FirstNamingPlatformList.module.sass';

function FirstNamingPlatformList () {
  return (
    <ul className={styles.firstNamingPlatformList}>
      {firstNamingPlatformCards.map((c, i) => (
        <li key={i}>
          <img src={c.iconSrc} alt={c.title} />
          <h3>
            {c.title.map(t => (
              <div>{t}</div>
            ))}
          </h3>
          <p>{c.body}</p>
        </li>
      ))}
    </ul>
  );
}

export default FirstNamingPlatformList;
