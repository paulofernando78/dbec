const contacts: ContactItem[] = [
  // email
  {
    link: "mailto:paulofernando78@gmail.com",
    icon: "/assets/img/icons/contacts/email.png",
    alt: "Email",
  },
  // youtube
  {
    link: "https://www.youtube.com/@dbec11",
    icon: "/assets/img/icons/contacts/youtube.png",
    alt: "Youtube",
  },
  // linkedin
  {
    link: "https://www.linkedin.com/in/paulo-fernando-70930725/",
    icon: "/assets/img/icons/contacts/linkedin.png",
    alt: "LinkedIn",
  },
  // whatsapp
  {
    link: "https://wa.me/5511981672145",
    icon: "/assets/img/icons/contacts/whatsapp.png",
    alt: "Whatsapp",
  },
];

const patron: ContactItem[] = [
  // Vakinha
  {
    link: "https://www.vakinha.com.br/vaquinha/site-para-dar-aula-de-ingles?utm_internal_source=search_results",
    icon: "/assets/img/icons/contacts/vakinha.jpg",
    alt: "Vakinha",
    tooltip: "Support us on Vakinha",
    width: 28,
    height: 28,
    className:
      "mx-auto !w-[26px] !h-[26px] ml-[0.3rem] mr-[0.4rem] rounded-sm border-[1.5px] shadow-[0_0_0_2px_#F2F2F2,2px_2px_0_#9B9FA3,0_3px_1px_#9B9FA3,2px_2px_1px_#9B9FA3] translate-y-[3.5px]",
  },
  // buy me a coffee
  {
    link: "https://www.buymeacoffee.com/paulofernando78",
    icon: "/assets/img/icons/contacts/coffee.gif",
    alt: "By me a coffee",
    tooltip: "Buy me a coffee",
    className:
      "mx-auto !w-[27.5px] !h-[27.5px] ml-[0.1rem] mr-[0.27rem] rounded-full border-[1.5px] shadow-[0_0_0_2px_#F2F2F2,2px_2px_0_#9B9FA3,0_3px_1px_#9B9FA3,2px_2px_1px_#9B9FA3] translate-y-[3.5px]",
  },
];

type ContactProps = {
  className?: string;
};

type ContactItem = {
  link: string;
  icon: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  tooltip?: string;
};

export const Contact = ({ className }: ContactProps) => {
  return (
    <div className="flex gap-4">
      <ul className={`flex gap-2 p-2.5 ${className ?? ""}`}>
        {contacts.map((contact, index) => (
          <li key={index}>
            <a
              href={contact.link}
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-block
                transition-transform
                duration-300
                ease-[cubic-bezier(0.54,3,0.57,0.96)]
                hover:-translate-y-2.5
                hover:scale-[1.3]
              "
            >
              <img
                src={contact.icon}
                alt={contact.alt}
                className={contact.className}
                width={35}
                height={35}
              />
            </a>
          </li>
        ))}
      </ul>
      <ul className={`flex gap-2 p-2.5 ${className ?? ""}`}>
        {patron.map((contact, index) => (
          <li key={contact.link} className="group relative">
            <a
              href={contact.link}
              target="_blank"
              rel="noopener noreferrer"
              aria-describedby={`patron-tooltip-${index}`}
              className="
                inline-block
                transition-transform
                duration-300
                ease-[cubic-bezier(0.54,3,0.57,0.96)]
                hover:-translate-y-2.5
                hover:scale-[1.3]
              "
            >
              <img
                src={contact.icon}
                alt={contact.alt}
                className={contact.className}
                width={35}
                height={35}
              />
            </a>
            <span
              id={`patron-tooltip-${index}`}
              role="tooltip"
              className="
                absolute
                mb-4
                px-2
                py-1
                text-xs
                font-medium
                bottom-full
                left-1/2
                -translate-x-1/2
                whitespace-nowrap
                bg-gray-800
                text-white
                rounded
                opacity-0
                shadow-sm
                transition-opacity
                group-hover:opacity-100 group-focus-within:opacity-100
                z-10
                pointer-events-none"
                >
              {contact.tooltip}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};
