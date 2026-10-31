export type ListeningParagraph = {
  id: string;
  title: string;
  timestamp?: string;
  text: string;
  localMedia: string;
  r2: string;
  imageAlt: string;
  mediaPosition?: "left" | "right";
};

const imageBase = "/media/images/skills/listening/a-new-zealand-adventure";

export const newZealandAdventure = {
  slug: "a-new-zealand-adventure",
  title: "A New Zealand Adventure",
  audio: "",
  paragraphs: [
    {
      id: "summary",
      title: "Summary",
      text: "Sarah and Jessica arrive in New Zealand for a holiday. They find a mobile phone in the taxi from the airport. It is Michael's mobile, but can they find him? He has messages from home — are they important? Go with the girls on a New Zealand adventure.",
      localMedia: `local-media/images/skills/listening/a-new-zealand-adventure/cover.avif`,
      r2: `${imageBase}/cover.avif`,
      imageAlt: "Cover of A New Zealand Adventure.",
      mediaPosition: "left",
    },
    {
      id: "paragraph-1",
      title: "Paragraph 1",
      text: `Sarah and Jessica are going to New Zealand for a holiday. They are very excited. Jessica is near the window. “Look!” she says, “There's Auckland! We're here!” “But we're late,” Sarah answers. “When's our bus?” “At one o'clock,” Jessica says. “We can get a taxi from the airport to the bus station.”`,
      localMedia: `local-media/images/skills/listening/a-new-zealand-adventure/paragraph-1.avif`, r2: `${imageBase}/paragraph-1.avif`, imageAlt: "Sarah and Jessica arriving in New Zealand by plane.", mediaPosition: "right",
    },
    {
      id: "paragraph-2", title: "Paragraph 2", timestamp: "0:31",
      text: `At the airport, the girls look for a taxi. “Look!” Jessica says. “That boy's waving to us!” “Excuse me! Are you late?” the boy calls to them. “Do you want this taxi? I can wait.” “Thank you very much!” the girls answer. “To the bus station, please,” Sarah says to the driver. She smiles at the boy and they drive away.`,
      localMedia: `local-media/images/skills/listening/a-new-zealand-adventure/paragraph-2.avif`, r2: `${imageBase}/paragraph-2.avif`, imageAlt: "The girls finding a taxi outside the airport.", mediaPosition: "right",
    },
    {
      id: "paragraph-3", title: "Paragraph 3", timestamp: "1:08",
      text: `The taxi stops at the bus station. Suddenly, Jessica sees a mobile phone on the taxi floor. “Is that your mobile phone?” she asks the driver. He looks at it. “No,” he answers. “It's the boy's mobile.” Sarah takes it. “Perhaps I can find his address,” she says. “Yes! His name's Michael. Tomorrow he's at Ninety Mile Beach. We can give it to him there.”`,
      localMedia: `local-media/images/skills/listening/a-new-zealand-adventure/paragraph-3.avif`, r2: `${imageBase}/paragraph-3.avif`, imageAlt: "Sarah and Jessica discovering a mobile phone in the taxi.", mediaPosition: "right",
    },
    {
      id: "paragraph-4", title: "Paragraph 4", timestamp: "1:47",
      text: `The girls wait at Ninety Mile Beach. They eat and watch the buses. The buses aren't driving on a road — they are driving on the long beach. “Look for Michael!” Jessica says. But Sarah is looking at the sea. Suddenly, Jessica sees him. “He's on that bus!” she says. She waves. Michael waves to her, but the bus doesn't stop.`,
      localMedia: `local-media/images/skills/listening/a-new-zealand-adventure/paragraph-4.avif`, r2: `${imageBase}/paragraph-4.avif`, imageAlt: "The girls watching buses drive along Ninety Mile Beach.", mediaPosition: "right",
    },
    {
      id: "paragraph-5", title: "Paragraph 5", timestamp: "2:22",
      text: `The girls get on a bus. “Can we catch him?” Jessica asks. “I don't know,” Sarah answers. “I can't see his bus now.” Suddenly, they hear a beep. Sarah looks at the mobile. “There's a message for Michael,” she says. She reads the message. “It's important,” she says. “Perhaps we can find him tomorrow at the Sky Tower in Auckland.”`,
      localMedia: `local-media/images/skills/listening/a-new-zealand-adventure/paragraph-5.avif`, r2: `${imageBase}/paragraph-5.avif`, imageAlt: "Sarah reading Michael's message on a bus.", mediaPosition: "right",
    },
    {
      id: "paragraph-6", title: "Paragraph 6", timestamp: "2:59",
      text: `At the Sky Tower, the girls can't see Michael. “He isn't here,” Sarah says. A woman bungy jumps from the tower. “I can do that,” she says. “Are you coming, Jessica?” “No,” Jessica answers. “But I can watch you from here.” “Please watch my bag too,” Sarah says. She gives her bag to Jessica and she goes up the tower.`,
      localMedia: `local-media/images/skills/listening/a-new-zealand-adventure/paragraph-6.avif`, r2: `${imageBase}/paragraph-6.avif`, imageAlt: "Sarah and Jessica at Auckland's Sky Tower.", mediaPosition: "right",
    },
    {
      id: "paragraph-7", title: "Paragraph 7", timestamp: "3:34",
      text: `Sarah jumps. It is a very long jump. She comes down near the street and she sees Michael. Jessica sees him too. “Michael! Come back! We've got your mobile!” she calls to him. But Michael is walking away. She runs after him. She doesn't take Sarah's bag. “Jessica! My bag!” Sarah calls.`,
      localMedia: `local-media/images/skills/listening/a-new-zealand-adventure/paragraph-7.avif`, r2: `${imageBase}/paragraph-7.avif`, imageAlt: "Sarah bungy jumping from the Sky Tower.", mediaPosition: "right",
    },
    {
      id: "paragraph-8", title: "Paragraph 8", timestamp: "4:10",
      text: `Jessica and Sarah are very unhappy. They can't find Michael and they can't find Sarah's bag. Sarah has no money now. “Sorry,” Jessica says. “But I've got some money — and we've got tickets for the glow-worm caves.” “OK. Let's go there tomorrow,” Sarah says. “Michael is going too. We can look for him there.”`,
      localMedia: `local-media/images/skills/listening/a-new-zealand-adventure/paragraph-8.avif`, r2: `${imageBase}/paragraph-8.avif`, imageAlt: "Sarah and Jessica in their room planning the next day.", mediaPosition: "right",
    },
    {
      id: "paragraph-9", title: "Paragraph 9", timestamp: "4:42",
      text: `The girls go on a boat into the dark cave. The lights from the glow-worms are very beautiful and it is very quiet. Suddenly, there is a beep from Michael's mobile. The lights go dark. The people in the boat are angry. “No mobiles!” they say. “We're very sorry,” Sarah says. She sees a new message for Michael. “Perhaps we can find him in Rotorua.”`,
      localMedia: `local-media/images/skills/listening/a-new-zealand-adventure/paragraph-9.avif`, r2: `${imageBase}/paragraph-9.avif`, imageAlt: "Visitors riding a boat through the glow-worm caves.", mediaPosition: "right",
    },
    {
      id: "paragraph-10", title: "Paragraph 10", timestamp: "5:19",
      text: `“Rotorua is very interesting,” Jessica says. “I like the hot water.” “Yes,” Sarah answers, “but I can't see Michael.” “Where is he tomorrow?” Jessica asks. Sarah looks at the mobile. “He's in the South Island,” she says. “The boat's very expensive. Can we go?” “Yes,” Jessica says. “I've got money for the tickets.”`,
      localMedia: `local-media/images/skills/listening/a-new-zealand-adventure/paragraph-10.avif`, r2: `${imageBase}/paragraph-10.avif`, imageAlt: "Sarah and Jessica visiting Rotorua.", mediaPosition: "right",
    },
    {
      id: "paragraph-11", title: "Paragraph 11", timestamp: "5:55",
      text: `Sarah and Jessica take a boat to the South Island. It is very cold, but the café is expensive. Suddenly, there is a beep from Michael's mobile phone. “Oh, no! Not again!” Sarah says. She reads the message. “Michael's mother and father are worrying about him, and we can't find him. Let's take his mobile phone to the police station in Kaikoura.”`,
      localMedia: `local-media/images/skills/listening/a-new-zealand-adventure/paragraph-11.avif`, r2: `${imageBase}/paragraph-11.avif`, imageAlt: "Sarah and Jessica travelling by boat to the South Island.", mediaPosition: "right",
    },
    {
      id: "paragraph-12", title: "Paragraph 12", timestamp: "6:29",
      text: `The girls take the phone to the police station. Then they go down to the sea. “Let's go and see the whales,” Jessica says. “We can't,” Sarah answers. “The tickets are expensive.” Suddenly, Jessica sees Michael. She runs to him. “Your mobile's at the police station,” she says, “and you've got messages from home.”`,
      localMedia: `local-media/images/skills/listening/a-new-zealand-adventure/paragraph-12.avif`, r2: `${imageBase}/paragraph-12.avif`, imageAlt: "The girls near a whale-watching ticket office.", mediaPosition: "right",
    },
    {
      id: "paragraph-13", title: "Paragraph 13", timestamp: "7:03",
      text: `Michael quickly calls home. He smiles. “My mother and father are well,” he says, “and they've got £100,000 from the lottery! They're sending some money to me for my holiday. Now I can give you a surprise.” “What surprise?” Jessica asks. “Wait and see,” Michael says. He walks to the Whale Watch ticket office.`,
      localMedia: `local-media/images/skills/listening/a-new-zealand-adventure/paragraph-13.avif`, r2: `${imageBase}/paragraph-13.avif`, imageAlt: "Michael meeting Sarah and Jessica outside the police station.", mediaPosition: "right",
    },
    {
      id: "paragraph-14", title: "Paragraph 14", timestamp: "7:35",
      text: `“Thank you for my mobile,” Michael says to the girls. “Thank you for the surprise,” Jessica says. She is very excited. “Do you like the whales?” Michael asks. “I love them,” Jessica answers. “They're beautiful.” “Yes, and New Zealand is beautiful too,” Sarah says. “This is an adventure!”`,
      localMedia: `local-media/images/skills/listening/a-new-zealand-adventure/paragraph-14.avif`, r2: `${imageBase}/paragraph-14.avif`, imageAlt: "The friends enjoying a whale-watching trip.", mediaPosition: "right",
    },
  ] satisfies ListeningParagraph[],
};
