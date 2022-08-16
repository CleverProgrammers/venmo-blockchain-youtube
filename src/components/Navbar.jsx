import { ChevronDownIcon } from "@heroicons/react/outline";
import styles from "../styles/Navbar.module.css";
import { TransactionContext } from "../context/TransactionContext";
import { useContext } from "react";
import { shortenAddress } from "../utils/shortenAddress";

const Navbar = () => {
  const { connectWallet, currentAccount } = useContext(TransactionContext);

  return (
    <nav className={styles.navigationContainer}>
      <div className={styles.container}>
        <div className={styles.logoContainer}>
          <img
            className={styles.logoImage}
            src="/src/assets/venmo-logo.svg"
            alt="Venmo Logo"
          />
        </div>

        {currentAccount ? (
          <div className={styles.actionsContainer}>
            <p>
              Hello,{" "}
              <span className={styles.accentColor}>
                {shortenAddress(currentAccount)}
              </span>
              ! 👋
            </p>

            <ChevronDownIcon className={styles.arrowDownIcon} />
            <div className={styles.avatarContainer}>
              <img
                className={styles.avatarImage}
                src="https://yeeqiang.me/avatar.jpeg"
                alt=""
              />
            </div>
          </div>
        ) : (
          <button className={styles.connectBtn} onClick={connectWallet}>
            Connect Wallet
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
