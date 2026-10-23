import styles from "./BuyMeACoffee.module.css";

type BuyMeACoffeeProps = {
  className: string;
};

export const BuyMeACoffee = ({ className }: BuyMeACoffeeProps) => {
  return (
    <a
      href="https://buymeacoffee.com/paulofernando78"
      target="_blank"
      rel="noopener noreferrer"
      className={`${styles.coffee} coffee`}
    >
      <img
        src="/media/images/icons/contacts/coffee.png"
        className={styles.img}
      />
    </a>
  );
};
