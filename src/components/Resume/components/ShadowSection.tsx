
import { ShadowCard } from "../../shared-components/ShadowCard/ShadowCard";
import styles from "../styles.module.scss";

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
                    <ShadowCard key={index}>
                        <ItemComponent item={item}/>
                    </ShadowCard>
                )}
            </ul>
        </section>
    );
}