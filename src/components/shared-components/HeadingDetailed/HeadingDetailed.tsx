import { DividerAnimated } from "../DividerAnimated/DividerAnimated";
import styles from "./styles.module.scss";

interface Props {
    text: string;
}

export const HeadingDetailed: React.FC<Props> = ({text}) => {
    return (
        <div className={styles.wrapper}>
            <h3 className={styles.heading}>{text}</h3>
            <DividerAnimated />
        </div>
        
    );
}