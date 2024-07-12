import styles from "./styles.module.scss";

interface Props {
    text: string;
}

export const HeadingDetailed: React.FC<Props> = ({text}) => {
    return (
        <div className={styles.wrapper}>
            <p className={styles.heading}>{text}</p>
            <div className={styles.line}></div>
        </div>
        
    );
}