import styles from './Hero.module.scss';

export default function Hero() {
    return (<>
        <section className={styles.top}>
            <div className={styles.top__overlay}>
                <div className={styles.top__content}>
                    <h1 className={styles["top__text--large"]}>Joost Zöllner</h1>
                    <h2 className={styles["top__text--small"]}>Software Engineer</h2>
                </div>
            </div>
        </section>

        <section className={styles.hero}>
            <div className={styles.hero__image}>
                <div className={styles.hero__overlay}></div>
            </div>
        </section>
    </>)
}