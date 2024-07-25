import { CV_DATA } from "../../helpers/cv-data";
import { HeadingDetailed } from "../shared-components/HeadingDetailed/HeadingDetailed";
import styles from "./styles.module.scss";
import { AppItem } from "./AppItem";

export const Portfolio = () => {
    return (
        <div className={styles.wrapper}>
            <HeadingDetailed text="Portfolio"/>
            <ul className={styles.portfolio}>
               {CV_DATA.apps.map((app, index) => <AppItem app={app} key={index}/>)} 
            </ul>
        </div>
    )
}
