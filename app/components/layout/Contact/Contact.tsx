import { Image } from "@/components/ui/Image/Image"

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
    className: "mx-auto w-[27.5px]! h-[27.5px]! border-[1.2px] border-black rounded-full shadow-[0_0_0_2px_#F2F2F2,2px_2px_0_#9B9FA3,0_3px_1px_#9B9FA3,2px_2px_1px_#9B9FA3] translate-y-[3px]"
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
    <ul className={`flex gap-2.5 p-2.5 ${className ?? ""}`}>
      {contacts.map((contact, index) => (
        <li key={index} className="">
          <a
            href={contact.link}
            className="
            transition-transform duration-300 [cubic-bezier(0.54,3,0.57,0.96)]
            hover:-translate-y-2.5
            hover:scale-[1.3]"
          >
            <Image src={contact.icon} alt={contact.alt} className={contact.className} width={35} height={35} />
          </a>
        </li>
      ))}
    </ul>
  );
};
