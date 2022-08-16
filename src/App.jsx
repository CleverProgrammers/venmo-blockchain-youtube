import styles from "./styles/App.module.css";
import Navbar from "./components/Navbar";
import ActivityCard from "./components/activity/ActivityCard";
import TransactionForm from "./components/transaction/TransactionForm";
import AdsBanner from "./components/AdsBanner";

const App = () => (
  <div className={styles.wrapper}>
    <header>
      <Navbar />
    </header>

    <main className={styles.mainContainer}>
      <div className={styles.activityContainer}>
        <ActivityCard />
      </div>

      <div className={styles.sideContainer}>
        <TransactionForm />

        <AdsBanner />
      </div>
    </main>
  </div>
);

export default App;
