import styles from "../styles/AdsBanner.module.css";

function AdsBanner() {
  return (
    <div className={styles.container}>
      <div className={styles.bannerContent}>
        <div className={styles.bannerEmojis}>🚀 🧠 🧑‍💻</div>
        <h3 className={styles.bannerTitle}>Clever Programmer</h3>
        <p className={styles.bannerDescription}>
          Biggest Companies Are Powered by aspiring DEVELOPERS just like you 💪
        </p>

        <div className={styles.bannerCta}>
          <button className={styles.ctaButton} type="button">
            <img
              className={styles.ctaButtonImage}
              src="/src/assets/app-store-download.png"
              alt="Download on the App Store"
            />
          </button>

          <button className={styles.ctaButton} type="button">
            <img
              className={styles.ctaButtonImage}
              src="/src/assets/google-play-download.png"
              alt="Get it on Google Play"
            />
          </button>
        </div>
      </div>

      <div className={styles.bannerImageContainer}>
        <img
          className={styles.bannerImage}
          src="/src/assets/ads-banner.jpeg"
          alt=""
        />
      </div>
    </div>
  );
}

export default AdsBanner;
