import firstNamingPlatformCards from './firstNamingPlatform';
import styles from './FirstNamingPlatformList.module.sass';

function FirstNamingPlatformList () {
  return (
    <ul className={styles.firstNamingPlatformList}>
      {firstNamingPlatformCards.map((c, index) => (
        <li key={index}>
          <img src={c.iconSrc} alt={c.title} />
          <h3>
            {c.title.map((t, index) => (
              <div key={index}>{t}</div>
            ))}
          </h3>
          <p>{c.body}</p>
        </li>
      ))}
    </ul>
  );
}

export default FirstNamingPlatformList;
