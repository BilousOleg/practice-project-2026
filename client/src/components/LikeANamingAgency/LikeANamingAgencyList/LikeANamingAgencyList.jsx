import likeANamingAgencyCards from './likeANamingAgencyCards.json';
import LikeANamingAgencyListItem from './LikeANamingAgencyListItem/LikeANamingAgencyListItem';
import styles from './LikeANamingAgencyList.module.sass';
import CONSTANTS from '../../../constants';

const { STATIC_IMAGES_PATH } = CONSTANTS;

function LikeANamingAgencyList () {
  return (
    <ul className={styles.likeANamingAgencyList}>
      {likeANamingAgencyCards.map((c, index) => (
        <LikeANamingAgencyListItem
          key={index}
          src={`${STATIC_IMAGES_PATH}like_a_naming_agency/${c.iconSrc}`}
          title={c.title}
          body={c.body}
        />
      ))}
    </ul>
  );
}

export default LikeANamingAgencyList;
