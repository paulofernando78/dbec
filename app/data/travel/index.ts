import type { Level } from "@/data/course";

const unit = (
  number: number,
  title: string,
  description: string,
  firstLesson: [string, string],
  secondLesson: [string, string],
) => ({
  number,
  title,
  description,
  lessons: [
    { title: firstLesson[0], description: firstLesson[1] },
    { title: secondLesson[0], description: secondLesson[1] },
    {
      title: `Checkpoint ${number}`,
      description: "Use the unit language in a realistic travel task.",
    },
  ],
});

export const travel: Level = {
  slug: "travel",
  code: "Travel",
  name: "English",
  subtitle: "English for the complete journey",
  description:
    "Plan, travel, solve problems, and return home with confidence.",
  theme: "blue",
  units: [
    unit(1, "Planning a Trip", "Choose a destination and organize the main details.", ["Choosing a Destination", "Compare destinations and agree on where to go."], ["Booking the Trip", "Ask about options and confirm a reservation."]),
    unit(2, "Packing and Preparation", "Prepare luggage, documents, and essential items.", ["What Should I Pack?", "Discuss weather, activities, and what to take."], ["Documents and Travel Essentials", "Check documents and prepare for departure."]),
    unit(3, "At the Airport", "Check in, pass through security, and board a flight.", ["Checking In and Dropping Off Bags", "Check in and deal with baggage at the counter."], ["Security and Boarding", "Follow airport instructions and find the correct gate."]),
    unit(4, "During the Journey", "Communicate confidently on a plane and a train.", ["On the Plane", "Find your seat and make requests during a flight."], ["On the Train", "Find the platform, confirm stops, and manage connections."]),
    unit(5, "Arrival", "Complete border formalities and collect luggage.", ["Immigration and Passport Control", "Answer routine questions at the border."], ["Baggage Claim and Customs", "Collect luggage and report or declare items."]),
    unit(6, "Accommodation", "Check in, use hotel services, and resolve problems.", ["Checking into a Hotel", "Confirm a reservation and ask about hotel facilities."], ["Problems at the Hotel", "Describe a problem and request an appropriate solution."]),
    unit(7, "Getting Around", "Ask for directions and use local transportation.", ["Asking for Directions", "Understand and give directions using landmarks."], ["Public Transport and Taxis", "Buy tickets, confirm routes, and take a taxi."]),
    unit(8, "Enjoying the Destination", "Eat, shop, explore, and join local activities.", ["Restaurants and Shopping", "Order food, ask about products, and make purchases."], ["Tours and Local Activities", "Book an activity and ask for practical information."]),
    unit(9, "Problems and Returning Home", "Handle unexpected situations and complete the return journey.", ["Emergencies and Unexpected Problems", "Ask for urgent help and explain what happened."], ["Checking Out and Going Home", "Settle the bill, arrange transport, and reflect on the trip."]),
  ],
};
