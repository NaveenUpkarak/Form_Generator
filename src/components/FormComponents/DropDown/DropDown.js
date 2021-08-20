import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import styles from "./styles.module.css"

export default function App() {
  return (
    <div className={styles.dropdown}>
      <input value="Country"></input>
      <FontAwesomeIcon style={{ marginLeft: "-15px" }} icon={faCaretDown} />
      <div className={styles.dropContent}>
        <a href="#">Link 1</a>
        <a href="#">Link 1</a>
        <a href="#">Link 1</a>
      </div>
    </div>
  );
}