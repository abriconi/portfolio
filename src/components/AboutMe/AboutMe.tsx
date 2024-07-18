import { Description } from "./Description";
import { HeadingDetailed } from "../shared-components/HeadingDetailed/HeadingDetailed";
import styles from "./styles.module.scss";
import { Toolkit } from "./Toolkit";
import { Activities } from "./Activities";

export const AboutMe = () => {
    return (   
        <div className={styles.wrapper}>
            <HeadingDetailed text="About Me"/>
            <Description />
            <Activities />
            <Toolkit />
        </div>
    )
}