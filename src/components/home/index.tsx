"use client";
import Split from "@uiw/react-split";
import styles from "./home.module.scss";

import Popups from "./popups";
import ChatBot from "./chatBot";

const Home: React.FC = () => {
  console.log("Home");
  // const dispatch = useAppDispatch();
  return (
    <main className={styles.home}>
      <Popups />
      <div className="ml-[100px]">
        <ChatBot />
      </div>
    </main>
  );
};
export default Home;
