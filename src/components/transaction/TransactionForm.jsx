import { CurrencyDollarIcon } from "@heroicons/react/outline";
import { SwitchVerticalIcon } from "@heroicons/react/solid";
import styles from "../../styles/Transaction.module.css";
import { useContext } from "react";
import { TransactionContext } from "../../context/TransactionContext";

function TransactionForm() {
  const {
    sendTransaction,
    setAddressTo,
    addressTo,
    setAmount,
    amount,
    message,
    setMessage,
  } = useContext(TransactionContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!addressTo || !amount || !message) {
      console.log("Please fill all the fields");
      return;
    }
    sendTransaction();
  };

  return (
    <div className={styles.container}>
      <h3 className={styles.formTitle}>Send Payment / Request</h3>

      <form onSubmit={handleSubmit}>
        <div className={styles.formContainer}>
          <div className={styles.swapContainer}>
            <SwitchVerticalIcon className={styles.swapIcon} />
            <p className={styles.swapTitle}>Swap to/from</p>
          </div>

          <div className={styles.formBody}>
            <div className={styles.formInputContainer}>
              <h4 className={styles.formInputTitle}>To</h4>
              <input
                className={styles.formInput}
                type="text"
                name="addressTo"
                value={addressTo}
                onChange={(e) => setAddressTo(e.target.value)}
              />
            </div>
            <div className={styles.formInputContainer}>
              <h4 className={styles.formInputTitle}>Message</h4>
              <input
                className={styles.formInput}
                type="text"
                name="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>
          </div>

          <div className={styles.formFooter}>
            <h4 className={styles.footerTitle}>Amount</h4>

            <div className={styles.footerContainer}>
              <div className={styles.amountContainer}>
                <div className={styles.inputContainer}>
                  <CurrencyDollarIcon className={styles.dollarIcon} />
                  <input
                    className={styles.amountInput}
                    type="number"
                    name="amount"
                    value={amount}
                    step="0.001"
                    onChange={(e) => setAmount(e.target.value)}
                  />
                </div>
              </div>

              <button className={styles.sendButton} type="submit">
                Send
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default TransactionForm;
