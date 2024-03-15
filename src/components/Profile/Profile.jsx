import css from "./Profile.module.css";

const Profile = ({ name, tag, location, image, stats }) => {
  return (
    <div className={css.profileBox}>
      <div className={css.profileDsc}>
        <img className={css.avatar} src={image} alt="User avatar" />
        <p className={css.userName}>{name}</p>
        <p className={css.userTag}>@{tag}</p>
        <p className={css.userLocation}>{location}</p>
      </div>

      <ul className={css.statistUser}>
        <li className={css.statistData}>
          <span className={css.dataName}>Followers</span>
          <span className={css.dataValue}>{stats.followers}</span>
        </li>
        <li className={css.statistData}>
          <span className={css.dataName}>Views</span>
          <span className={css.dataValue}>{stats.views}</span>
        </li>
        <li className={css.statistData}>
          <span className={css.dataName}>Likes</span>
          <span className={css.dataValue}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
