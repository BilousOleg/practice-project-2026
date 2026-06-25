import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import styles from './MoreOptionsListItem.module.sass';
import CONSTANTS from '../../../constants';

const { STATIC_IMAGES_PATH } = CONSTANTS;

function MoreOptionsListItem ({ src, title, body, buttonText, path }) {
  console.log(`${STATIC_IMAGES_PATH}more_options/${src}`);
  return (
    <li className={styles.moreOptionsListItem}>
      <div className={styles.imageWrapper}>
        <img src={`${STATIC_IMAGES_PATH}more_options/${src}`} alt={title} />
      </div>
      <h3>{title}</h3>
      <p>{body}</p>
      <Link className={styles.moreOptionsLink} to={path}>
        {buttonText}
      </Link>
    </li>
  );
}

export default MoreOptionsListItem;
