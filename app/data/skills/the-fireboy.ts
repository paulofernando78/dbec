import type { AudiobookSection } from "./a-new-zealand-adventure";

const imageBase = "/media/images/audiobooks/starter-beginner/the-fireboy";
const localBase = "local-media/images/audiobooks/starter-beginner/the-fireboy";

export const theFireboy = {
  slug: "the-fireboy",
  title: "The Fireboy",
  audio: "",
  sections: [
    {
      id: "summary", title: "Summary",
      text: "This is the story of Hapu, who lives in Ancient Egypt. Hapu works with his father, a goldsmith. They work long, hard hours making gold tables and chairs, but they are poor. Then one day Hapu has an idea that will change their lives: he decides to make a beautiful gold necklace for Queen Cleopatra.",
      localMedia: `${localBase}/cover.avif`, r2: `${imageBase}/cover.avif`, imageAlt: "Cover of The Fireboy.", mediaPosition: "left",
    },
    {
      id: "paragraph-1", title: "Paragraph 1",
      text: `This is the story of Hapu. He lives in Ancient Egypt at the time of Queen Cleopatra. His father, Bak, has a small factory. He makes gold tables and chairs. Hapu helps him. He is a “fireboy”. Every day he pushes a long handle up and down. The work is hot and very hard. But what can he and his father do? They are poor people. They need to make money.`,
      localMedia: `${localBase}/paragraph-1.avif`, r2: `${imageBase}/paragraph-1.avif`, imageAlt: "Hapu working as a fireboy in his father's factory.", mediaPosition: "left",
    },
    {
      id: "paragraph-2", title: "Paragraph 2", timestamp: "0:52",
      text: `Every evening they sit beside the Nile. Bak talks to his son about the factory, tomorrow's work—everything. “One day we're going to be very rich,” he tells Hapu. “Are we?” The fireboy looks into his father's tired eyes. “Yes,” Bak smiles. “I don't know how and I don't know when, but we are.” Then he stands up. “Come on,” he says. “It's late. Let's go home.”`,
      localMedia: `${localBase}/paragraph-2.avif`, r2: `${imageBase}/paragraph-2.avif`, imageAlt: "Hapu and Bak talking beside the Nile.", mediaPosition: "left",
    },
    {
      id: "paragraph-3", title: "Paragraph 3", timestamp: "1:44",
      text: `Three days later Hapu and Bak are making a table. It is very hot in the room. Suddenly, Bak stops work. “What is it, Father?” Hapu asks. “Is something wrong?” “I don't know,” Bak answers. He closes his eyes. “It's my head. I can't...” And then he falls on the ground. “Father!” Hapu runs to Bak and puts one hand under his head. “Father—are you all right?”`,
      localMedia: `${localBase}/paragraph-3.avif`, r2: `${imageBase}/paragraph-3.avif`, imageAlt: "Hapu helping Bak after he falls in the factory.", mediaPosition: "left",
    },
    {
      id: "paragraph-4", title: "Paragraph 4", timestamp: "2:40",
      text: `The next day Bak stays in bed. “I'm sorry, Hapu,” he says. “I want to work but I can't. I'm ill.” Hapu is very sad. “Father works too hard,” he thinks. “That's why he's ill. We need more money—but what can I do?” Then he has an idea. “Of course!” he thinks. “I must make something for somebody very rich. Somebody like... the Queen!”`,
      localMedia: `${localBase}/paragraph-4.avif`, r2: `${imageBase}/paragraph-4.avif`, imageAlt: "Hapu speaking to his ill father in bed.", mediaPosition: "left",
    },
    {
      id: "paragraph-5", title: "Paragraph 5", timestamp: "3:30",
      text: `Bak is ill for two weeks. In that time, Hapu makes a lot of tables and chairs. But not only tables and chairs. He makes a gold necklace, too. “There!” he thinks late one night. “It's ready.” He smiles. The necklace is very beautiful. “Queen Cleopatra is going to like this,” Hapu thinks. “She's going to pay a lot of money for it, too. I know she is.”`,
      localMedia: `${localBase}/paragraph-5.avif`, r2: `${imageBase}/paragraph-5.avif`, imageAlt: "Hapu holding the gold necklace he made.", mediaPosition: "left",
    },
    {
      id: "paragraph-6", title: "Paragraph 6", timestamp: "4:15",
      text: `The next morning he goes to Cleopatra's palace. The necklace is in a bag under his shirt. “What do you want?” asks a palace guard. There are two guards. Each one has a sword. “I want to see the Queen,” Hapu answers. Both guards laugh. “Go home, boy,” says one of them. “Queen Cleopatra doesn't see people like you.”`,
      localMedia: `${localBase}/paragraph-6.avif`, r2: `${imageBase}/paragraph-6.avif`, imageAlt: "The palace guards refusing to let Hapu see Cleopatra.", mediaPosition: "left",
    },
    {
      id: "paragraph-7", title: "Paragraph 7", timestamp: "4:56",
      text: `Hapu is very unhappy. “What do I do now?” he thinks. He leaves the palace and begins to walk home. But ten minutes later he passes two men in the market. “Cleopatra's women are coming here tomorrow morning,” says one. “They're arriving very early. They want to buy lots of new clothes for her.” “That's very good news,” Hapu thinks.`,
      localMedia: `${localBase}/paragraph-7.avif`, r2: `${imageBase}/paragraph-7.avif`, imageAlt: "Hapu hearing two men talk in the market.", mediaPosition: "left",
    },
    {
      id: "paragraph-8", title: "Paragraph 8", timestamp: "5:39",
      text: `The next day the fireboy gets up very early. He makes a cup of sweet tea for Bak. Then he goes to the market. “I can give the necklace to Cleopatra's women,” he thinks. “They can give it to the Queen for me.” He waits and waits. For a long time, nothing happens. Then the music starts to play. A moment later Hapu sees a long line of people. They are coming from the palace.`,
    },
    {
      id: "paragraph-9", title: "Paragraph 9", timestamp: "6:36",
      text: `Four men are carrying a very beautiful chair. A woman is sitting in it. Hapu puts one hand across his eyes. “It's the Queen!” he thinks. “She's coming, too!” A minute later Cleopatra arrives. Suddenly, everyone is very quiet. Then Hapu thinks, “This is the moment.” He runs in front of Cleopatra's chair. “Stop!” he says. “Please, stop!”`,
      localMedia: `${localBase}/paragraph-8-9.avif`, r2: `${imageBase}/paragraph-8-9.avif`, imageAlt: "Hapu stepping in front of Queen Cleopatra's procession in the market.", mediaPosition: "bottom",
    },
    {
      id: "paragraph-10", title: "Paragraph 10", timestamp: "7:30",
      text: `The Queen looks at him. “What do you want?” she asks. Hapu gives her the necklace. “Is this really your work?” asks Cleopatra. “Yes, it is,” Hapu answers. “Guards!” says Cleopatra. “Give this boy some money.” She holds the necklace in her hands. “This is beautiful,” she says. Then she leaves.`,
      localMedia: `${localBase}/paragraph-10.avif`, r2: `${imageBase}/paragraph-10.avif`, imageAlt: "Hapu giving his necklace to Queen Cleopatra.", mediaPosition: "left",
    },
    {
      id: "paragraph-11", title: "Paragraph 11", timestamp: "8:18",
      text: `Hapu runs home. He is very, very happy. Bak is in bed. “Look!” Hapu says. He shows the money from Cleopatra's necklace to his father. “But how...?” Bak closes his eyes, then opens them again. “I don't understand,” he says. Hapu smiles. He sits down and tells his father everything. At the end of the story, Bak says, “You're a good son, Hapu. Thank you.”`,
      localMedia: `${localBase}/paragraph-11.avif`, r2: `${imageBase}/paragraph-11.avif`, imageAlt: "Hapu showing Cleopatra's money to his father.", mediaPosition: "left",
    },
    {
      id: "paragraph-12", title: "Paragraph 12", timestamp: "9:15",
      text: `That night Hapu looks up at the stars. “Now I can pay for a doctor to visit Father,” he thinks. “Then, after Father is strong again...” But at that moment he stops. One of Cleopatra's guards is standing in front of him. He has a big sword. “Are you Hapu, son of Bak?” he asks. Hapu looks at him. “Yes. Yes, I am,” he answers.`,
      localMedia: `${localBase}/paragraph-12.avif`, r2: `${imageBase}/paragraph-12.avif`, imageAlt: "A palace guard finding Hapu beneath the night sky.", mediaPosition: "left",
    },
    {
      id: "paragraph-13", title: "Paragraph 13", timestamp: "10:06",
      text: `“Come with me,” says the guard. “Queen Cleopatra likes your work. She wants to give you a job at the palace.” “But I have a job,” Hapu says. “I work with my father. I can't leave him. You don't underst...” “No, you don't understand,” the guard says. “When the Queen gives you a job, you take it.” He puts one hand on his sword. “Now go and say goodbye to your father.”`,
      localMedia: `${localBase}/paragraph-13.avif`, r2: `${imageBase}/paragraph-13.avif`, imageAlt: "The guard ordering Hapu to come to the palace.", mediaPosition: "left",
    },
    {
      id: "paragraph-14", title: "Paragraph 14", timestamp: "10:58",
      text: `At the palace, Cleopatra talks to Hapu. She is wearing his necklace. “I want you to live here and make lots of beautiful things for me,” she says. “Thank you, Queen of the Nile,” Hapu says. “But...” “But?” The Queen looks at Hapu. “But... I can't live here. You see, my father is very ill and...” Hapu tells the Queen everything.`,
      localMedia: `${localBase}/paragraph-14.avif`, r2: `${imageBase}/paragraph-14.avif`, imageAlt: "Hapu explaining his father's illness to Cleopatra.", mediaPosition: "left",
    },
    {
      id: "paragraph-15", title: "Paragraph 15", timestamp: "11:42",
      text: `At the end of Hapu's story, Cleopatra looks at him. “All right,” she says. “You can go home to your father. But...” “But?” asks Hapu. “But from today, the two of you work only for me. Do you understand?” “Oh, yes!” Hapu smiles. He is very happy. Now he and his father can make lots of beautiful things and be rich. “Yes, I understand.”`,
      localMedia: `${localBase}/paragraph-15.avif`, r2: `${imageBase}/paragraph-15.avif`, imageAlt: "Hapu smiling after Cleopatra gives him and his father work.", mediaPosition: "left",
    },
  ] satisfies AudiobookSection[],
};
