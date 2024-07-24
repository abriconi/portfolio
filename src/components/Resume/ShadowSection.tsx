import styles from "./styles.module.scss";

interface Props<T> {
    title: string;
    array: T[];
    ItemComponent: React.FC<{ item: T }>;
}

export const ShadowSection = <T,>({ title, array, ItemComponent }: Props<T>) => {
    return (        
        <section className={styles.shadowSection}>
            <h3 className={styles.heading}>{title}</h3>
            <ul className={styles.scrollWrapper}>
                {array.map((item, index) => 
                    <ItemComponent key={index} item={item}/>
                )}
            </ul>
        </section>
    );
}