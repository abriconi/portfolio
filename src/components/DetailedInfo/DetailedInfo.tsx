import { AboutMe } from "../AboutMe/AboutMe";
import { Navigation } from "../Navigation/Navigation"
import styles from "./DetailedInfo.module.scss";

export const DetailedInfo = () => {
    return (
        <div className={styles.wrapper}>
            <Navigation />
            <AboutMe />
        </div>
    )
}