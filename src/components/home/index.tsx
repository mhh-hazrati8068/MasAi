"use client";
import Split from "@uiw/react-split";
import styles from "./home.module.scss";

import Popups from "./popups";

const Home: React.FC = () => {
  console.log("Home");
  // const dispatch = useAppDispatch();
  return (
    <main className={styles.home}>
      <Popups />
    </main>
  );
};
export default Home;
