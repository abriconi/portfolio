import { DividerAnimated } from "../DividerAnimated/DividerAnimated";
import styles from "./styles.module.scss";

interface Props {
    text: string;
}

export const HeadingDetailed: React.FC<Props> = ({text}) => {
    return (
        <div className={styles.wrapper}>
            <h1 className={styles.heading}>{text}</h1>
            <DividerAnimated />
        </div>
        
    );
}