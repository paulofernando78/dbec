import type { GetReadyQuestion } from "../lesson-step-types";

type LessonQuestions = readonly (readonly GetReadyQuestion[])[];

export const a1GetReadyQuestions: Record<string, LessonQuestions> = {
  "1/1": [
    [{ prompt: "Hello or goodbye?", support: ["Hello.", "Goodbye."] }],
    [{ prompt: "Laura or Eric?", support: ["Laura.", "Eric."] }],
    [{ prompt: "What’s your name?", support: ["My name’s …", "I’m …"] }],
  ],
  "1/2": [
    [{ prompt: "Phone number or email?", support: ["Phone number.", "Email."] }],
    [{ prompt: "Is this an email address?", support: ["Yes.", "No."] }],
    [{ prompt: "Hello or goodbye?", support: ["Hello.", "Goodbye."] }],
  ],
  "2/1": [
    [{ prompt: "What’s this?", support: ["It’s a laptop computer.", "It’s a phone."] }],
    [{ prompt: "What’s this?", support: ["It’s an adapter.", "It’s a charger."] }],
    [{ prompt: "What are these?", support: ["They’re notebooks.", "They’re folders."] }],
    [{ prompt: "What are these?", support: ["They’re keys.", "They’re notebooks."] }],
    [{ prompt: "What’s this?", support: ["It’s a headset.", "It’s a phone."] }],
  ],
  "2/2": [
    [{ prompt: "Where is the phone?", support: ["On the desk.", "Under the desk."] }],
    [{ prompt: "Is it under the chair?", support: ["Yes, it is.", "No, it isn’t."] }],
    [{ prompt: "Where are the folders?", support: ["Next to the printer.", "On the chair."] }],
  ],
  "3/1": [
    [{ prompt: "Brazil or Mexico?", support: ["Brazil.", "Mexico."] }],
    [{ prompt: "Where are you from?", support: ["I’m from …"] }],
    [{ prompt: "Are you Brazilian?", support: ["Yes, I am.", "No, I’m not."] }],
  ],
  "3/2": [
    [{ prompt: "Family or friends?", support: ["Family.", "Friends."] }],
    [{ prompt: "Who’s that?", support: ["He’s my …", "She’s my …"] }],
    [{ prompt: "Tall or short?", support: ["Tall.", "Short."] }],
  ],
  "4/1": [
    [{ prompt: "Whose jacket is this?", support: ["It’s Leo’s.", "It’s Mia’s."] }],
    [{ prompt: "Is this your jacket?", support: ["Yes, it’s mine.", "No, it isn’t."] }],
    [{ prompt: "Blue or black?", support: ["Blue.", "Black."] }],
  ],
  "4/2": [
    [{ prompt: "Is it raining?", support: ["Yes, it is.", "No, it isn’t."] }],
    [{ prompt: "A raincoat or a T-shirt?", support: ["A raincoat.", "A T-shirt."] }],
    [{ prompt: "What are you wearing?", support: ["I’m wearing …"] }],
  ],
  "5/1": [
    [{ prompt: "What time is it?", support: ["It’s … o’clock."] }],
    [{ prompt: "Morning or evening?", support: ["Morning.", "Evening."] }],
    [{ prompt: "What time is lunch?", support: ["At …"] }],
  ],
  "5/2": [
    [{ prompt: "What is she doing?", support: ["She’s studying.", "She’s sleeping."] }],
    [{ prompt: "Is he working?", support: ["Yes, he is.", "No, he isn’t."] }],
    [{ prompt: "What are you doing now?", support: ["I’m …"] }],
  ],
  "6/1": [
    [{ prompt: "Bus, train, or bike?", support: ["Bus.", "Train.", "Bike."] }],
    [{ prompt: "How does she go to work?", support: ["She goes by …"] }],
    [{ prompt: "How do you go to work or school?", support: ["I go by …", "I walk."] }],
  ],
  "6/2": [
    [{ prompt: "What time do you get up?", support: ["I get up at …"] }],
    [{ prompt: "Do you study every day?", support: ["Yes, I do.", "No, I don’t."] }],
    [{ prompt: "Morning or evening?", support: ["Morning.", "Evening."] }],
  ],
  "7/1": [
    [{ prompt: "House or apartment?", support: ["A house.", "An apartment."] }],
    [{ prompt: "Does it have a balcony?", support: ["Yes, it does.", "No, it doesn’t."] }],
    [{ prompt: "Do you live in a house or an apartment?", support: ["I live in …"] }],
  ],
  "7/2": [
    [{ prompt: "What is in the room?", support: ["There is a …", "There are …"] }],
    [{ prompt: "Is there a sofa?", support: ["Yes, there is.", "No, there isn’t."] }],
    [{ prompt: "How many lamps are there?", support: ["There are … lamps."] }],
  ],
  "8/1": [
    [{ prompt: "What’s his job?", support: ["He’s a …"] }],
    [{ prompt: "Where does she work?", support: ["She works in …"] }],
    [{ prompt: "What do you do?", support: ["I’m a …", "I’m a student."] }],
  ],
  "8/2": [
    [{ prompt: "Easy or difficult?", support: ["Easy.", "Difficult."] }],
    [{ prompt: "Is the job stressful?", support: ["Yes, it is.", "No, it isn’t."] }],
    [{ prompt: "Is this job interesting?", support: ["Yes, it is.", "No, it isn’t."] }],
  ],
  "9/1": [
    [{ prompt: "What food can you see?", support: ["I can see …"] }],
    [{ prompt: "Is there any milk?", support: ["Yes, there is.", "No, there isn’t."] }],
    [{ prompt: "What do we need?", support: ["We need …"] }],
  ],
  "9/2": [
    [{ prompt: "Do you eat breakfast every day?", support: ["Yes, I do.", "No, I don’t."] }],
    [{ prompt: "Do you cook at home?", support: ["I usually …", "I never …"] }],
    [{ prompt: "What do you drink in the morning?", support: ["I drink …"] }],
  ],
  "10/1": [
    [{ prompt: "What sport is this?", support: ["It’s …"] }],
    [{ prompt: "Do you play this sport?", support: ["Yes, I do.", "No, I don’t."] }],
    [{ prompt: "What sports do you watch?", support: ["I watch …"] }],
  ],
  "10/2": [
    [{ prompt: "Can she dance?", support: ["Yes, she can.", "No, she can’t."] }],
    [{ prompt: "What can he do?", support: ["He can …"] }],
    [{ prompt: "What can you do well?", support: ["I can …"] }],
  ],
  "11/1": [
    [{ prompt: "Home or movie theater?", support: ["Home.", "Movie theater."] }],
    [{ prompt: "What is she going to do?", support: ["She’s going to …"] }],
    [{ prompt: "What are you going to do tonight?", support: ["I’m going to …"] }],
  ],
  "11/2": [
    [{ prompt: "How are they going to celebrate?", support: ["They’re going to …"] }],
    [{ prompt: "Who is going to come?", support: ["Friends.", "Family.", "Both."] }],
    [{ prompt: "Do you like big or small parties?", support: ["Big parties.", "Small parties."] }],
  ],
  "12/1": [
    [{ prompt: "What’s wrong?", support: ["A headache.", "A backache."] }],
    [{ prompt: "Does she feel well?", support: ["Yes, she does.", "No, she doesn’t."] }],
    [{ prompt: "What do you do when you feel sick?", support: ["I rest.", "I drink water."] }],
  ],
  "12/2": [
    [{ prompt: "Water or medicine?", support: ["Water.", "Medicine."] }],
    [{ prompt: "What is the advice?", support: ["Get some rest.", "Go to work."] }],
    [{ prompt: "Good advice or bad advice?", support: ["Good advice.", "Bad advice."] }],
  ],
  "13/1": [
    [{ prompt: "What places can you see?", support: ["I can see a …"] }],
    [{ prompt: "Where is the pharmacy?", support: ["Next to …", "Across from …"] }],
    [{ prompt: "Where do you buy a charger?", support: ["At an electronics store."] }],
  ],
  "13/2": [
    [{ prompt: "Left or right?", support: ["Left.", "Right."] }],
    [{ prompt: "Where is the station?", support: ["It’s …"] }],
    [{ prompt: "How do I get there?", support: ["Go straight.", "Turn …"] }],
  ],
  "14/1": [
    [{ prompt: "What did she do?", support: ["She visited …", "She stayed …"] }],
    [{ prompt: "Home or concert?", support: ["Home.", "A concert."] }],
    [{ prompt: "What did you do last weekend?", support: ["I …"] }],
  ],
  "14/2": [
    [{ prompt: "Where was the vacation?", support: ["At the beach.", "In the city."] }],
    [{ prompt: "Did they enjoy it?", support: ["Yes, they did.", "No, they didn’t."] }],
    [{ prompt: "Where did they stay?", support: ["They stayed at …"] }],
  ],
  "15/1": [
    [{ prompt: "Child or adult?", support: ["A child.", "An adult."] }],
    [{ prompt: "Where was he born?", support: ["He was born in …"] }],
    [{ prompt: "What were their jobs?", support: ["They were …"] }],
  ],
  "15/2": [
    [{ prompt: "School or work?", support: ["School.", "Work."] }],
    [{ prompt: "What was her favorite subject?", support: ["It was …"] }],
    [{ prompt: "Did you like school? Why?", support: ["Yes, because …", "No, because …"] }],
  ],
  "16/1": [
    [{ prompt: "Phone call or message?", support: ["A phone call.", "A message."] }],
    [{ prompt: "Is Julia available?", support: ["Yes, she is.", "No, she isn’t."] }],
    [{ prompt: "What is the message?", support: ["Please call …", "Please tell …"] }],
  ],
  "16/2": [
    [{ prompt: "Party or dinner?", support: ["A party.", "Dinner."] }],
    [{ prompt: "Does the person accept?", support: ["Yes.", "No."] }],
    [{ prompt: "Invite a classmate.", support: ["Would you like to …?", "Do you want to …?"] }],
  ],
};

