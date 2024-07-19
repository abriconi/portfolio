import { HeadingDetailed } from "../shared-components/HeadingDetailed/HeadingDetailed";
import { Education } from "./Education";
import styles from "./styles.module.scss";

export const Resume = () => {
    return ( 
        <div className={styles.wrapper}>
            <HeadingDetailed text="Resume"/>
            <Education />
        </div> )
    ;
}
    