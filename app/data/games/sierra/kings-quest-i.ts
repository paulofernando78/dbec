export const kingsQuestI = {
  whiteboard: {
    title: "Advanced",
    descriptions: [
      "Guide Sir Graham through Daventry in search of the kingdom's three stolen treasures: a magic mirror, a magic shield, and a magic chest. Complete the major encounters and return the treasures to the castle.",
    ],
    date: "1984",
  },
  sections: [
    {
      id: "part-one-the-royal-mission",
      title: "Part One • The Royal Mission",
      instruction: "Begin Graham's quest:",
      items: [
        { content: ["Open the castle doors, bow before King Edward, and talk to him to receive the quest."] },
        { content: ["Stand behind the large rock west of the castle, MOVE ROCK, LOOK IN HOLE, and GET DAGGER; standing in front of the rock is fatal."] },
        { content: ["Climb the nearby oak tree and take the golden egg from the nest."] },
        { content: ["Take a carrot from the garden, find the walnut tree and OPEN WALNUT to reveal its gold interior, and collect pebbles beside the lake."] },
        { content: ["Save frequently: the original parser game contains random enemies, narrow paths, and unwinnable states."] },
      ],
    },
    {
      id: "part-two-the-magic-mirror",
      title: "Part Two • The Magic Mirror",
      instruction: "Enter the dragon's lair through the well:",
      items: [
        { content: ["At the old well, cut the rope with the dagger to take the bucket, or lower the bucket and climb down its rope."] },
        { content: ["Fill the bucket with water, dive into the well, and swim through the underwater opening into the cave."] },
        { content: ["Approach the dragon carefully and throw the bucket of water over it; this earns more points than killing it."] },
        { content: ["Take the magic mirror after the dragon retreats, then leave the cave through the passage."] },
      ],
    },
    {
      id: "part-three-the-magic-shield",
      title: "Part Three • The Magic Shield",
      instruction: "Reach and escape the leprechaun kingdom:",
      items: [
        { content: ["Give the carrot to the goat so it follows Graham, then lead it to the troll bridge; the goat drives the troll away."] },
        { content: ["Answer the gnome's riddle with his backwards name to receive the beans, then plant them in the fertile field."] },
        { content: ["Alternatively, use the cave route; carry the four-leaf clover so the leprechauns cannot harm Graham."] },
        { content: ["Play the fiddle to make the leprechauns dance away, then take the magic shield and sceptre from the throne room."] },
        { content: ["Eat the mushroom near the tiny exit to shrink Graham, walk through the opening, and wait outside until he returns to normal."] },
      ],
    },
    {
      id: "part-four-the-magic-chest",
      title: "Part Four • The Magic Chest",
      instruction: "Reach the giant in the Land of the Clouds:",
      items: [
        { content: ["Plant the beans obtained from the gnome and climb the beanstalk extremely carefully, saving before each narrow section."] },
        { content: ["In Cloud Land, take the sling from the tree hole before approaching the giant."] },
        { content: ["For the nonviolent maximum-point solution, keep moving until the giant tires and falls asleep instead of killing him with the sling."] },
        { content: ["Take the magic chest from the sleeping giant."] },
        { content: ["Return by the safest available route without falling from Cloud Land."] },
      ],
    },
    {
      id: "part-five-the-return",
      title: "Part Five • The Return",
      instruction: "Complete the quest:",
      items: [
        { content: ["Confirm that Graham has collected all three treasures."] },
        { content: ["Return to Castle Daventry."] },
        { content: ["Present the mirror, shield, and chest to King Edward."] },
        { content: ["Watch Graham receive his reward and new responsibility."] },
      ],
    },
  ],
};
