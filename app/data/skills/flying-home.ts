import type { AudiobookSection } from "./a-new-zealand-adventure";

const imageBase = "/media/images/audiobooks/starter-beginner/flying-home";
const localBase = "local-media/images/audiobooks/starter-beginner/flying-home";

export const flyingHome = {
  slug: "flying-home",
  title: "Flying Home",
  audio: "",
  sections: [
    {
      id: "summary",
      title: "Summary",
      text: "Felix is not a happy bird. He comes from Brazil but he doesn't live there. He lives in New York in a cage. Then one day his cage opens and Felix says goodbye to New York. Can he find his family in Brazil again? Let's find out.",
      localMedia: `${localBase}/cover.avif`,
      r2: `${imageBase}/cover.avif`,
      imageAlt: "Cover of Flying Home.",
      mediaPosition: "left",
    },
    {
      id: "paragraph-1", title: "Paragraph 1",
      text: `Felix is a blue and yellow bird from Brazil. He lives with the Baxter family in New York. His home is a big cage. It is on the fortieth floor of a tall building. Felix likes the Baxters, and the Baxters like him, they give him food. They talk to him and show him to all their friends. But Felix isn't happy. He wants to go home to Brazil.`,
      localMedia: `${localBase}/paragraph-1.avif`, r2: `${imageBase}/paragraph-1.avif`, imageAlt: "Felix in his cage high above New York City.", mediaPosition: "right",
    },
    {
      id: "paragraph-2", title: "Paragraph 2", timestamp: "0:36",
      text: `Every night Felix looks up at the sky. He can see the whole city. It is big and exciting. It is home for the Baxters, but not for Felix. He remembers the big, yellow moon in Brazil. Then he remembers his last day in the jungle. The two men with white hats. The big box. The long plane journey. The shop — “Beautiful Birds” — in New York.`,
      localMedia: `${localBase}/paragraph-2.avif`, r2: `${imageBase}/paragraph-2.avif`, imageAlt: "Felix looking at the moon from his cage at night.", mediaPosition: "right",
    },
    {
      id: "paragraph-3", title: "Paragraph 3", timestamp: "1:10",
      text: `Felix closes his eyes. Now he can't see the city and the snow. He can see other things. He can see the life he loves. “I want to be with my family again,” he thinks. “I want to fly home to the jungle. It's warm there and the trees are always green.” He puts his head under one wing. “One day,” he says. “One day.”`,
      localMedia: `${localBase}/paragraph-3.avif`, r2: `${imageBase}/paragraph-3.avif`, imageAlt: "Felix remembering his family in the Brazilian jungle.", mediaPosition: "right",
    },
    {
      id: "paragraph-4", title: "Paragraph 4", timestamp: "1:54",
      text: `“One day” comes two weeks later. Mr Baxter opens Felix's cage to give him some food. Then he hears the telephone. “Can you answer that, George?” asks Mrs Baxter, “I'm in the bath.” “OK,” says Mr Baxter. He goes to the phone, but forgets to shut Felix's cage. Felix can see an open window. “This is it!” he thinks.`,
      localMedia: `${localBase}/paragraph-4.avif`, r2: `${imageBase}/paragraph-4.avif`, imageAlt: "Mr Baxter leaving Felix's cage open.", mediaPosition: "right",
    },
    {
      id: "paragraph-5", title: "Paragraph 5", timestamp: "2:30",
      text: `He flies out of his cage and out of the window. The air under his wings is very cold. Behind him, he hears, “Hey! Felix!” But he doesn't go back. He looks down at the streets and buildings and flies through the city. A girl in a café with her mother sees him. “Look!” she says. Her mother does not hear. She is reading her newspaper.`,
      localMedia: `${localBase}/paragraph-5.avif`, r2: `${imageBase}/paragraph-5.avif`, imageAlt: "Felix flying through New York above a café.", mediaPosition: "right",
    },
    {
      id: "paragraph-6", title: "Paragraph 6", timestamp: "3:08",
      text: `After an hour Felix stops. He stands on the head of the Statue of Liberty. “Where are you from?” asks a small, grey and white bird beside him. “I'm from Brazil,” answers Felix. “And where are you going?” asks the bird. Felix flies up into the cold, blue sky again. “I'm going home,” he says. “Goodbye.”`,
      localMedia: `${localBase}/paragraph-6.avif`, r2: `${imageBase}/paragraph-6.avif`, imageAlt: "Felix resting on the Statue of Liberty.", mediaPosition: "right",
    },
    {
      id: "paragraph-7", title: "Paragraph 7", timestamp: "3:50",
      text: `Felix flies south. Soon he can't see New York. All he can see is the Atlantic Ocean. In the evening the sun starts to go down. Then the sky is red, yellow and blue. It is very beautiful. Felix is hungry, but he is happy, too. For the first time in two years, he is free. He wants to fly all night.`,
      localMedia: `${localBase}/paragraph-7.avif`, r2: `${imageBase}/paragraph-7.avif`, imageAlt: "Felix flying south over the Atlantic at sunset.", mediaPosition: "right",
    },
    {
      id: "paragraph-8", title: "Paragraph 8", timestamp: "4:26",
      text: `Two hours later it starts to rain. Now the sky is black. Soon, Felix can't see the moon or the stars. “Where am I?” he thinks. He remembers his warm cage. “Am I doing the right thing?” He looks down at the cold sea. Then he sees something. Is it a star in the black water? No, it can't be a star. He looks again. It is a ship!`,
      localMedia: `${localBase}/paragraph-8.avif`, r2: `${imageBase}/paragraph-8.avif`, imageAlt: "Felix spotting a ship during a storm.", mediaPosition: "right",
    },
    {
      id: "paragraph-9", title: "Paragraph 9", timestamp: "5:16",
      text: `Felix flies down to the ship. There are hundreds of fish on it. He eats twenty in five minutes, then he sleeps. In the morning a man on the ship sees him. “Oh no!” thinks Felix, but it is all right. The man only wants to take a photograph of him. Felix flies into the sky again. “Good,” he thinks. “It's not raining now, and I'm not hungry.”`,
      localMedia: `${localBase}/paragraph-9.avif`, r2: `${imageBase}/paragraph-9.avif`, imageAlt: "Felix leaving a fishing boat after resting.", mediaPosition: "right",
    },
    {
      id: "paragraph-10", title: "Paragraph 10", timestamp: "5:56",
      text: `Two days later Felix flies across Peru. He looks down and sees the Inca city of Machu Picchu. “Those old stone buildings look interesting,” he thinks. “I know — I can stop there tonight.” Felix starts to fly down to the buildings. Then he sees a big bird with beautiful black and white feathers. It is sitting on a stone.`,
      localMedia: `${localBase}/paragraph-10.avif`, r2: `${imageBase}/paragraph-10.avif`, imageAlt: "Felix meeting a large bird above Machu Picchu.", mediaPosition: "right",
    },
    {
      id: "paragraph-11", title: "Paragraph 11", timestamp: "6:30",
      text: `“Hello, you're not from Peru, are you?” says the bird. Felix tells his story. “Two years in a cage in New York?!” says the bird. “Yes,” answers Felix, “but now I'm going home. Can you tell me how to get there?” “I have a friend — Aca — in Rio,” says the bird. “He knows the jungle. Go there and ask him.”`,
      localMedia: `${localBase}/paragraph-11.avif`, r2: `${imageBase}/paragraph-11.avif`, imageAlt: "Felix talking to a large Andean bird.", mediaPosition: "right",
    },
    {
      id: "paragraph-12", title: "Paragraph 12", timestamp: "7:08",
      text: `Felix flies from Peru to Rio. There he sees a lot of people in the street. He can hear music and see some birds in a tree. Is one of them Aca? “Aca! Aca!” he says. “Yes, that's me,” answers one of the birds. Felix can't see him. Then a boy sees Felix. “Look at the bird,” he says to his father. “Can I have him? Can I? Please?”`,
      localMedia: `${localBase}/paragraph-12.avif`, r2: `${imageBase}/paragraph-12.avif`, imageAlt: "Felix flying over a colorful celebration in Rio.", mediaPosition: "right",
    },
    {
      id: "paragraph-13", title: "Paragraph 13", timestamp: "7:50",
      text: `At first, Felix doesn't see the boy or his father. He is looking at all the birds in the trees. “Aca! Aca!” says Felix. Then there is a warm hand on his neck. He fights with his wings and his feet. “Help! Help!” Aca helps him. “Aiiieee!!!” says the man. The two birds fly into the sky. “Thank you,” says Felix. Then he tells Aca his story.`,
      localMedia: `${localBase}/paragraph-13.avif`, r2: `${imageBase}/paragraph-13.avif`, imageAlt: "Aca rescuing Felix from a man in Rio.", mediaPosition: "right",
    },
    {
      id: "paragraph-14", title: "Paragraph 14", timestamp: "8:34",
      text: `Felix and Aca fly from Rio to the jungle. In the evening Felix says, “Yes, I remember that village. My home's very near here. It's only...” Then he stops. In front of them, there are a lot of men and machines. “Oh no, they're making a new road!” says Aca. “But... where's my home?” asks Felix. “And where's my family?”`,
      localMedia: `${localBase}/paragraph-14.avif`, r2: `${imageBase}/paragraph-14.avif`, imageAlt: "Felix and Aca discovering road construction in the jungle.", mediaPosition: "right",
    },
    {
      id: "paragraph-15", title: "Paragraph 15", timestamp: "9:10",
      text: `The two birds fly over the new road, then they stop in a tree near the village. Felix is tired and sad. “I'm sorry,” says Aca. Then Felix sees a small blue and yellow feather in the air. He looks up. There, above the trees, are four birds. “It's them, Aca!” he says. “It's my family!” Then he flies into the sky. The birds see him. “Felix, is it you?” they ask. “Yes,” answers Felix. “I'm home!!!”`,
      localMedia: `${localBase}/paragraph-15.avif`, r2: `${imageBase}/paragraph-15.avif`, imageAlt: "Felix reuniting with his family in the jungle.", mediaPosition: "right",
    },
  ] satisfies AudiobookSection[],
};
