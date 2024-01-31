import styles from "./Director.module.css";

const Director = ({ data }) => {
  return (
    <div className={styles.directorContainer}>
      <div className={styles.directorDetails}>
        <div className={styles.directorImgContainer}>
          <img src={data.imgUrl} alt="director" />
        </div>
        <span>{data.name}</span>
        <span>{data.title}</span>
      </div>
    </div>
  );
};

export default Director;
