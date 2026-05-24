import styles from "./Contact.module.css"

import { Image } from "@/components/ui/Image"

const contacts: ContactItem[] = [
  // email
  {
    link: "mailto:paulofernando78@gmail.com",
    icon: "/assets/img/icons/contacts/email.png",
    alt: "Email"
  },
  // youtube
  {
    link: "https://www.youtube.com/@dbec11",
    icon: "/assets/img/icons/contacts/youtube.png",
    alt: "Youtube"
  },
  // linkedin
  {
    link: "https://www.linkedin.com/in/paulo-fernando-70930725/",
    icon: "/assets/img/icons/contacts/linkedin.png",
    alt: "LinkedIn"
  },
  // buy me a coffee
  {
    link: "https://www.buymeacoffee.com/paulofernando78",
    icon: "/assets/img/icons/contacts/coffee.gif",
    alt: "By me a coffee",
    className: styles.coffeeIcon
  },
  // whatsapp
  {
    link: "https:/wa.me/5511981672145",
    icon: "/assets/img/icons/contacts/whatsapp.png",
    alt: "Whatsapp"
  },
];

type ContactProps = {
  className?: string
}

type ContactItem = {
  link: string
  icon: string
  alt: string
  className?: string
}

export const Contact = ({className}: ContactProps) => {
  return (
    <ul className={`${styles.contactContainer} ${className}`}>
      {contacts.map((contact, index) => (
        <li key={index} className={styles.scaleAnimation}>
          <a href={contact.link}>
            <Image src={contact.icon} alt={contact.alt} className={contact.className} width={35} height={35} />
          </a>
        </li>
      ))}
    </ul>
  );
};
