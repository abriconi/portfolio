import styles from "../styles.module.scss";

interface Props<T> {
  title: string;
  array: T[];
  ItemComponent: React.FC<{ item: T }>;
}

export const BgSection = <T,>({ title, array, ItemComponent }: Props<T>) => {
  return (
    <section className={styles.bgSection}>
      <h3 className={styles.heading}>{title}</h3>
      <ul className={styles.listWrapper}>
        {array.map((item, index) => (
          <ItemComponent key={index} item={item} />
        ))}
      </ul>
    </section>
  );
};
