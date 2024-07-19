import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./styles.module.scss";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { VerticalDivider } from "../shared-components/VerticalDivider/VerticalDivider";

interface Props<T> {
    icon: IconProp;
    title: string;
    array: T[];
    ItemComponent: React.FC<{ item: T }>;
}

export const Section = <T,>({ icon, title, array, ItemComponent }: Props<T>) => {
    const iconColor = getComputedStyle(document.documentElement).getPropertyValue('--icon-color').trim();
    return (
        <div className={styles.educationWrapper}>
            <div className={styles.headingWrapper}>
                <FontAwesomeIcon icon={icon} size="2x" style={{color: iconColor}}/>
                <h4 className={styles.heading}>{title}</h4>
            </div>
            <ul className={styles.listWrapper}>
                {array.map((item, index) =>
                <VerticalDivider>
                    <ItemComponent item={item} key={index} />
                    </VerticalDivider>
                )}
            </ul>
        </div>
    )
}