import { Description } from "./Description";
import { HeadingDetailed } from "../shared-components/HeadingDetailed/HeadingDetailed";
import styles from "./styles.module.scss";
import { Toolkit } from "./Toolkit";

export const AboutMe = () => (
    <div className={styles.wrapper}>
        <HeadingDetailed text="About Me"/>
        <Description />
        <Toolkit />
    </div>
)