import styles from "./styles.module.scss";
import { VerticalDivider } from "../shared-components/VerticalDivider/VerticalDivider";
import { Icon } from "../shared-components/Icon/Icon";
import { IconDefinition } from "@fortawesome/free-brands-svg-icons";

interface Props<T> {
    icon: IconDefinition;
    title: string;
    array: T[];
    ItemComponent: React.FC<{ item: T }>;
}

export const Section = <T,>({ icon, title, array, ItemComponent }: Props<T>) => {
    return (
        <div className={styles.section}>
            <div className={styles.headingWrapper}>
                <Icon icon={icon} />
                <h4 className={styles.heading}>{title}</h4>
            </div>
            <ul className={styles.listWrapper}>
                {array.map((item, index) =>
                    <VerticalDivider key={index}>
                        <ItemComponent item={item} />
                    </VerticalDivider>
                )}
            </ul>
        </div>
    )
}