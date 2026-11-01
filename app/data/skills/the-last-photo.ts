import type { AudiobookSection } from "./a-new-zealand-adventure";

const imageBase = "/media/images/audiobooks/starter-beginner/the-last-photo";
const localBase = "local-media/images/audiobooks/starter-beginner/the-last-photo";

export const theLastPhoto = {
  slug: "the-last-photo",
  title: "The Last Photo",
  audio: "/media/audio/audiobooks/the-last-photo.mp3",
  sections: [
    {
      id: "summary", title: "Summary",
      text: "Pam and Martin visit Cambridge. Pam takes a photo, but a man walks in front of her. Later Martin sees a picture of a man in a newspaper. The police want this man. Is he the same man? And where is he now? Does Pam's photo have the answers?",
      localMedia: `${localBase}/cover.avif`, r2: `${imageBase}/cover.avif`, imageAlt: "Cover of The Last Photo.", mediaPosition: "left",
    },
    {
      id: "paragraph-1", title: "Paragraph 1",
      text: `It is Saturday afternoon. Martin and his sister Pam are in Cambridge for the day. They are looking at the beautiful old buildings of this university city. Pam has a camera with her. She likes taking photos and sometimes they are very good. But sometimes they are not very good and Martin laughs at them.`,
      localMedia: `${localBase}/paragraph-1.avif`, r2: `${imageBase}/paragraph-1.avif`, imageAlt: "Pam and Martin visiting Cambridge.", mediaPosition: "left",
    },
    {
      id: "paragraph-2", title: "Paragraph 2", timestamp: "0:37",
      text: `It is five o'clock. Pam and Martin are going home now. They are tired after their long day. They are in the garden near the bus station. “Let's have a last photo of you,” says Pam. “Oh no, not again,” says Martin. “Come on,” says Pam. “It's the last one. I want to finish the film in my camera.”`,
      localMedia: `${localBase}/paragraph-2.avif`, r2: `${imageBase}/paragraph-2.avif`, imageAlt: "Pam preparing to take one last photo of Martin.", mediaPosition: "left",
    },
    {
      id: "paragraph-3", title: "Paragraph 3", timestamp: "1:15",
      text: `“Oh, all right,” says Martin. He stands in front of the flowers. “Look at me,” says Pam and takes a photo. A man with a big rucksack on his back walks between Pam and Martin. “Oh no,” says Pam. “Now I've got a picture of that man, not of you, Martin.”`,
      localMedia: `${localBase}/paragraph-3.avif`, r2: `${imageBase}/paragraph-3.avif`, imageAlt: "A man with a rucksack walking in front of Pam's camera.", mediaPosition: "left",
    },
    {
      id: "paragraph-4", title: "Paragraph 4", timestamp: "1:53",
      text: `The man looks at Pam. He is angry. He goes across the road without a word. “That man isn't very nice, is he?” says Martin. “No,” says Pam. “And that was the last picture on the film, too.” The man with the rucksack on his back goes into the bus station. He's got sunglasses and a blue hat.`,
      localMedia: `${localBase}/paragraph-4.avif`, r2: `${imageBase}/paragraph-4.avif`, imageAlt: "The angry man walking toward the bus station.", mediaPosition: "left",
    },
    {
      id: "paragraph-5", title: "Paragraph 5", timestamp: "2:30",
      text: `“Come on,” says Martin. “Let's find our bus.” They go into the bus station. “Look,” says Martin. “There's that man again. He's getting into that bus. He's going to Aberdeen. That's in Scotland.” “Good,” says Pam. “Far from here and far from me!” She is angry with the man.`,
      localMedia: `${localBase}/paragraph-5.avif`, r2: `${imageBase}/paragraph-5.avif`, imageAlt: "The man getting onto a bus to Aberdeen.", mediaPosition: "left",
    },
    {
      id: "paragraph-6", title: "Paragraph 6", timestamp: "3:12",
      text: `Three days later, on Tuesday, Pam has got her photos from the shop. “Look at these,” she says to Martin. “They're the photos of us in Cambridge.” “Oh, these are all very good,” says Martin. “But not this last one,” says Pam. “Look, it's that man with the rucksack.”`,
      localMedia: `${localBase}/paragraph-6.avif`, r2: `${imageBase}/paragraph-6.avif`, imageAlt: "Pam and Martin looking at the developed photos.", mediaPosition: "left",
    },
    {
      id: "paragraph-7", title: "Paragraph 7", timestamp: "3:43",
      text: `In the photo, the man is in front of Martin. You can't see Martin behind the man's rucksack. “Wait a minute,” says Martin. “I know that face. It's in the newspaper. Have you got it?” “Today's newspaper?” says Pam. “Yes, it's here. Why?” “Yes, here he is. Look at this picture,” says Martin. Pam looks at the photo in the newspaper.`,
      localMedia: `${localBase}/paragraph-7.avif`, r2: `${imageBase}/paragraph-7.avif`, imageAlt: "Martin recognizing the man in a newspaper photograph.", mediaPosition: "left",
    },
    {
      id: "paragraph-8", title: "Paragraph 8", timestamp: "4:27",
      text: `“Who's that?” she asks. “It says in the paper his name's Alan Rook,” says Martin. “And he works in a bank in London. But on Monday morning—yesterday morning—no Alan Rook! The people at the bank don't know where he is. And they say he's got a hundred thousand pounds with him. The police are looking for him, too.”`,
      localMedia: `${localBase}/paragraph-8.avif`, r2: `${imageBase}/paragraph-8.avif`, imageAlt: "Pam and Martin reading about Alan Rook in the newspaper.", mediaPosition: "left",
    },
    {
      id: "paragraph-9", title: "Paragraph 9", timestamp: "5:05",
      text: `“But is that the man in my photo?” asks Pam. “He hasn't got a beard and he hasn't any hair.” “Look at his ears. Look at his nose,” says Martin. “It's him. I know it is.” Martin has an idea. He takes a pencil and starts to draw on the newspaper. “What are you doing?” asks Pam.`,
      localMedia: `${localBase}/paragraph-9.avif`, r2: `${imageBase}/paragraph-9.avif`, imageAlt: "Martin comparing the man's face in the two pictures.", mediaPosition: "left",
    },
    {
      id: "paragraph-10", title: "Paragraph 10", timestamp: "5:43",
      text: `“Look,” says Martin. “I'm putting dark glasses and a two-day beard on the man in this photo. Now I'm drawing a hat on his head. See? Now, look at the two pictures.” “You're right,” says Pam. “It's him. It's Alan Rook.” “Come on,” says Martin. “Let's take these pictures to the police.”`,
      localMedia: `${localBase}/paragraph-10.avif`, r2: `${imageBase}/paragraph-10.avif`, imageAlt: "Martin drawing Alan Rook's disguise on the newspaper photo.", mediaPosition: "left",
    },
    {
      id: "paragraph-11", title: "Paragraph 11", timestamp: "6:19",
      text: `At the police station, Pam and Martin speak to a policeman. They put Pam's photo and the newspaper on the table and they tell their story. “That's Alan Rook,” says the policeman. “In Cambridge at 5 o'clock on Saturday. The big question is—where is he now?”`,
      localMedia: `${localBase}/paragraph-11.avif`, r2: `${imageBase}/paragraph-11.avif`, imageAlt: "Pam and Martin showing the photographs to a policeman.", mediaPosition: "left",
    },
    {
      id: "paragraph-12", title: "Paragraph 12", timestamp: "6:47",
      text: `“We think we know. He's in Scotland, in Aberdeen,” says Pam. “Or he's near there.” They tell the policeman about the man and the bus to Aberdeen. “He's got a rucksack and a tent on his back in the photo,” says the policeman. “He isn't living in a hotel. He's camping. If we're lucky, he's still in Scotland. I must make a telephone call.”`,
      localMedia: `${localBase}/paragraph-12.avif`, r2: `${imageBase}/paragraph-12.avif`, imageAlt: "The policeman learning that Alan Rook travelled to Aberdeen.", mediaPosition: "left",
    },
    {
      id: "paragraph-13", title: "Paragraph 13", timestamp: "7:27",
      text: `The policeman telephones the police station in Aberdeen. “Alan Rook's in Scotland,” he says. “We think he's camping near Aberdeen. He's got a short beard now.” The next day the police in Aberdeen find Alan Rook in a tent in the mountains near Aberdeen. The money from the bank is in his rucksack.`,
      localMedia: `${localBase}/paragraph-13.avif`, r2: `${imageBase}/paragraph-13.avif`, imageAlt: "Police finding Alan Rook in his tent near Aberdeen.", mediaPosition: "left",
    },
    {
      id: "paragraph-14", title: "Paragraph 14", timestamp: "8:00",
      text: `The next morning Pam and Martin's story is in all the newspapers. There is Pam's photo of Alan Rook at the bus station. There is a picture of Martin and Pam, too. In the newspaper, it says: “Camera girl gets photo of Rook. Police in Aberdeen find bank money.”`,
      localMedia: `${localBase}/paragraph-14.avif`, r2: `${imageBase}/paragraph-14.avif`, imageAlt: "Pam and Martin reading their story in the newspaper.", mediaPosition: "left",
    },
    {
      id: "paragraph-15", title: "Paragraph 15", timestamp: "8:28",
      text: `The people at the bank are very happy. They give Pam and Martin a thousand pounds. “My last photo's a good one after all,” laughs Pam. “Now I can buy a very good new camera.”`,
      localMedia: `${localBase}/paragraph-15.avif`, r2: `${imageBase}/paragraph-15.avif`, imageAlt: "Pam and Martin receiving a reward from the bank.", mediaPosition: "left",
    },
  ] satisfies AudiobookSection[],
};
