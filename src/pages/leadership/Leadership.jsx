import Director from "../../components/director/Director";
import styles from "./Leadership.module.css";
import { director } from "../../data";

const Leadership = () => {
  return (
    <div className={styles.leadershipContainer}>
      <h3 className={styles.leadershipHeader}>Meet the Team</h3>
      <div className={styles.contactContainer}>
        {director.map((d, index) => (
          <Director key={index} data={d} />
        ))}
      </div>
    </div>
  );
};

export default Leadership;
