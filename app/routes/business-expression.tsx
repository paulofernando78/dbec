import { Navigate, useNavigate, useParams } from "react-router";

import { PageHeader } from "@/components/content/PageHeader";
import { SequenceNavigation } from "@/components/content/SequenceNavigation";
import { Card } from "@/components/ui/Card";
import { Dialogue } from "@/features/Dialogue";
import { Radio } from "@/features/exercises/Radio";
import { italic, mark } from "@/helpers/content";

const businessLessonTitles: readonly string[] = [
  "Talking About a New Project", "Talking About Financial Issues", "Discussing a New Ad Campaign",
  "Talking About Manufacturing", "Talking About Company Strategy", "Discussing Good Results",
  "Discussing Bad Results", "Discussing a Difficult Decision", "Dealing With a Dissatisfied Customer",
  "Discussing a Difficult Request", "Motivating Co-Workers", "Running a Meeting", "Discussing a Mistake",
  "Taking Credit for Good Results", "Shifting Blame", "Politely Disagreeing With Someone",
  "Telling Somebody Off", "Discussing Office Scandals", "Complaining About a Co-Worker",
  "Talking About a Brown-Noser", "Explaining That You're Feeling Overworked", "Calling In Sick",
  "Requesting a Bank Loan", "Negotiating a Purchase", "Conducting a Performance Review",
  "Promoting an Employee", "Firing Somebody", "Job Interview 1", "Job Interview 2",
  "Negotiating a Salary Offer",
];

const lessonOneExercise = {
  questions: [
    {
      question: ["Did the company think of this new product idea themselves? No, they ", mark("ripped it off from an inventor."), ""],
      options: [
        { option: "No, they paid an inventor for the idea." },
        { option: "No, they stole the idea from an inventor.", isCorrect: true },
        { option: "No, they discussed it with an inventor and he agreed to sell it to them." },
      ],
    },
    {
      question: ["Jill is planning to quit her job at the end of September, but ", mark("mum's the word."), ""],
      options: [
        { option: "don't tell anybody", isCorrect: true },
        { option: "don't tell her mother" },
        { option: "she may change her mind" },
      ],
    },
    {
      question: ["Sony has ", mark("made a killing"), " on its popular PlayStation line."],
      options: [
        { option: "lost money on" },
        { option: "made a lot of money on", isCorrect: true },
        { option: "decided to stop producing" },
      ],
    },
    {
      question: ["After receiving a large loan from the bank, the company was finally able to ", mark("get its project off the ground."), ""],
      options: [
        { option: "get started on the project", isCorrect: true },
        { option: "cancel the project" },
        { option: "borrow money" },
      ],
    },
    {
      question: ["That new software company seems very disorganized. Do they have a ", mark("game plan?"), ""],
      options: [
        { option: "plan for closing down their business" },
        { option: "plan for developing new games" },
        { option: "plan for how they will proceed to grow their business", isCorrect: true },
      ],
    },
    {
      question: ["Some experts recommend that when you're interviewing for a new job, you should ", mark("keep your current salary under wraps."), ""],
      options: [
        { option: "you should tell the interviewer what your current salary is" },
        { option: "you should say you're making twice as much as you're really earning" },
        { option: "you should not say how much you're currently earning", isCorrect: true },
      ],
    },
    {
      question: ["Don's new cell phone has a video camera and all sorts of other ", mark("bells and whistles."), ""],
      options: [
        { option: "fancy features", isCorrect: true },
        { option: "things that make loud ringing noises and whistle tones" },
        { option: "features typical in a low-priced product" },
      ],
    },
    {
      question: ["When investors ", mark("got wind of"), " the fact that the pharmaceutical company's major drug increased the risk of heart attacks, the company's stock price fell."],
      options: [
        { option: "hid" },
        { option: "discovered", isCorrect: true },
        { option: "got fed up over" },
      ],
    },
  ],
};

const lessonTwoExercise = {
  questions: [
    {
      question: ["Did our CEO ", mark("give the green light"), " for the new project yet?"],
      options: [
        { option: "No, he told us he needed more information before making a decision.", isCorrect: true },
        { option: "Yes, he told us that the project was a bad idea and that we should stop working on it." },
        { option: "Yes, he's going to discuss the project with his wife and see what she thinks." },
      ],
    },
    {
      question: ["Last year, our company made a loss on our new line of video games, but this year we'll ", mark("break even."), ""],
      options: [
        { option: "I'm sorry to hear you're broke." },
        { option: "That's great. At least you're making progress.", isCorrect: true },
        { option: "Too bad. Last year you did a lot better." },
      ],
    },
    {
      question: ["If you don't double-check those numbers and make sure they're correct, you might get ", mark("in hot water"), " with your boss."],
      options: [
        { option: "You're right. My boss always appreciates it when I give him the wrong numbers." },
        { option: "That would be great. My boss enjoys soaking in hot water." },
        { option: "You're right. My boss always gets angry when he finds mistakes.", isCorrect: true },
      ],
    },
    {
      question: ["Our company is ", mark("in the red"), " again this quarter."],
      options: [
        { option: "Congratulations! When's the celebration party?" },
        { option: "In the red again? I hope you don't go out of business!", isCorrect: true },
        { option: "In the red? That's okay. It's better than being in the black." },
      ],
    },
    {
      question: ["We should ", mark("pull the plug"), " on our online advertising campaign."],
      options: [
        { option: "I agree. It's not bringing us any new business.", isCorrect: true },
        { option: "I agree. Let's double our spending on it." },
        { option: "I disagree. I think we should stop spending money on online advertising." },
      ],
    },
    {
      question: ["I know our company is looking for ways to cut costs. Do you think my head is ", mark("on the chopping block?"), ""],
      options: [
        { option: "No, don't worry. They won't fire you.", isCorrect: true },
        { option: "No, I don't think so. But you might get fired." },
        { option: "No, I don't think they'll cut off your head." },
      ],
    },
    {
      question: ["Doesn't it ", mark("blow your mind"), " that they promoted Beth to General Manager after the mess she made in our department?"],
      options: [
        { option: "Yes, she really deserved that promotion." },
        { option: "No, but it does surprise me." },
        { option: "Yes, it really surprises me!", isCorrect: true },
      ],
    },
    {
      question: ["Did you have a chance to ", mark("crunch those numbers"), " yet?"],
      options: [
        { option: "Yes, I put them in a blender and crunched them up." },
        { option: "Yes, I just put the financial reports on your desk.", isCorrect: true },
        { option: "Yes, I'll take a look at them next week." },
      ],
    },
  ],
};

const lessonThreeExercise = {
  questions: [
    {
      question: ["Starting a chain of coffee houses in Manhattan is a ", mark("half-baked idea!"), " There are already more than enough coffee houses in Manhattan."],
      options: [
        { option: "a great idea" },
        { option: "a really bad idea" },
        { option: "an idea that needs some more time in the oven", isCorrect: true },
      ],
    },
    {
      question: ["The government is discussing a new proposal to raise the minimum wage, but ", mark("nothing is set in stone yet."), ""],
      options: [
        { option: "nothing has been decided yet", isCorrect: true },
        { option: "the proposal has been approved" },
        { option: "nothing will ever be decided" },
      ],
    },
    {
      question: ["You don't have to ", mark("twist the boss's arm."), " She's already decided to let everybody leave early on Friday to avoid holiday traffic."],
      options: [
        { option: "convince the boss", isCorrect: true },
        { option: "hurt the boss" },
        { option: "ignore the boss" },
      ],
    },
    {
      question: ["Arnold Schwarzenegger has appeared on television commercials in Japan, China, Austria, and Brazil, ", mark("plugging products"), " such as vitamin drinks and soup."],
      options: [
        { option: "drinking products" },
        { option: "advertising products", isCorrect: true },
        { option: "terminating products" },
      ],
    },
    {
      question: ["Before approaching a bank for a loan, you need to ", mark("flesh out"), " your business plan."],
      options: [
        { option: "throw out" },
        { option: "present" },
        { option: "add more detail to", isCorrect: true },
      ],
    },
    {
      question: ["Buying a new computer system would cost ", mark("an arm and a leg."), " Let's just upgrade the system we already have."],
      options: [
        { option: "a lot of money", isCorrect: true },
        { option: "not much money" },
        { option: "a lot of time" },
      ],
    },
    {
      question: ["Paul and Susan make a good living running a bed-and-breakfast in Vermont. Meeting lots of friendly people is ", mark("the icing on the cake."), ""],
      options: [
        { option: "easy when you live in Vermont" },
        { option: "how they earn their living" },
        { option: "an additional benefit", isCorrect: true },
      ],
    },
    {
      question: ["I like your idea of selling our products by direct mail. ", mark("Let's run with it."), ""],
      options: [
        { option: "Let's discuss it further." },
        { option: "Let's proceed with it.", isCorrect: true },
        { option: "Let's forget it." },
      ],
    },
  ],
};

const lessonFourExercise = {
  questions: [
    {
      question: ["To prepare for the holiday season, the chocolate factory operates ", mark("24/7."), ""],
      options: [
        { option: "around the clock", isCorrect: true },
        { option: "until midnight" },
        { option: "24 days a month" },
      ],
    },
    {
      question: ["I think we'll get the report out on Friday, but we'll definitely be ", mark("working down to the wire."), ""],
      options: [
        { option: "bringing in extra help" },
        { option: "taking some shortcuts" },
        { option: "working up until the deadline", isCorrect: true },
      ],
    },
    {
      question: ["When we needed help marketing our conference, Karen was quick to ", mark("step up to the plate."), ""],
      options: [
        { option: "give excuses" },
        { option: "disappear" },
        { option: "offer to help", isCorrect: true },
      ],
    },
    {
      question: [mark("At the end of the day"), " we still managed to make a profit this year."],
      options: [
        { option: "In summary", isCorrect: true },
        { option: "The shocking fact is" },
        { option: "Against everyone's expectation" },
      ],
    },
    {
      question: ["Let's assign the website project to Tyler. He'll ", mark("get the job done."), ""],
      options: [
        { option: "do it successfully", isCorrect: true },
        { option: "finish it today" },
        { option: "know who to hire" },
      ],
    },
    {
      question: ["Tim wants to hire another project manager? ", mark("It's time for a reality check."), ""],
      options: [
        { option: "That's not a realistic goal.", isCorrect: true },
        { option: "What a great idea." },
        { option: "The truth is we need another one." },
      ],
    },
    {
      question: ["We'd planned to release our new tablet computer on Monday, but we're still ", mark("working out the kinks."), ""],
      options: [
        { option: "on schedule" },
        { option: "dealing with some problems", isCorrect: true },
        { option: "in the early stages" },
      ],
    },
    {
      question: [mark("No ifs, ands, or buts,"), " our new product line should be ready to ship by December 1."],
      options: [
        { option: "It's necessary that", isCorrect: true },
        { option: "If possible" },
        { option: "If we work hard" },
      ],
    },
  ],
};

const lessonFiveExercise = {
  questions: [
    {
      question: ["Mattel, a large toy company, always ", mark("beefs up"), " its advertising around the holiday season."],
      options: [
        { option: "changes" },
        { option: "increases", isCorrect: true },
        { option: "decreases" },
      ],
    },
    {
      question: ["Amazon.com uses ", mark("cutting-edge"), " technologies to determine which products each of its customers is most likely to buy."],
      options: [
        { option: "sharp" },
        { option: "inexpensive" },
        { option: "the most modern", isCorrect: true },
      ],
    },
    {
      question: ["We need to re-design our entire store. ", mark("For starters,"), " we should move the cash register from the back of the store to the front of the store."],
      options: [
        { option: "For now" },
        { option: "As a first priority", isCorrect: true },
        { option: "As the solution" },
      ],
    },
    {
      question: ["Your company is introducing garlic fruitcake? ", mark("That sounds like a real dog!"), ""],
      options: [
        { option: "What a great idea!" },
        { option: "That sounds like a terrible idea!", isCorrect: true },
        { option: "I'm sure dogs will love it!" },
      ],
    },
    {
      question: ["After Apple's iPod proved to be successful, several other manufacturers came out with ", mark("me-too products."), ""],
      options: [
        { option: "products very similar to the iPod", isCorrect: true },
        { option: "their own innovative products" },
        { option: "products very different from the iPod" },
      ],
    },
    {
      question: ["Your plan is good, but before you proceed, you'll need to ", mark("get buy-in"), " from the company president."],
      options: [
        { option: "get a purchase order" },
        { option: "get approval", isCorrect: true },
        { option: "get a promotion" },
      ],
    },
    {
      question: ["With our new solar-powered automobile, we're going to ", mark("leapfrog our competitors."), ""],
      options: [
        { option: "make all our competition disappear" },
        { option: "turn our competitors into small green animals" },
        { option: "come out with a superior product", isCorrect: true },
      ],
    },
    {
      question: ["I think you and I are ", mark("on the same page"), " about our plans to expand into China."],
      options: [
        { option: "realistic" },
        { option: "in agreement", isCorrect: true },
        { option: "not in agreement" },
      ],
    },
  ],
};

const lessonSixExercise = {
  questions: [
    {
      question: ["Our store had a very successful holiday season this year. Sales were ", mark("through the roof!"), ""],
      options: [
        { option: "I'm sorry to hear that you need a new roof." },
        { option: "That's great. Congratulations!", isCorrect: true },
        { option: "Don't worry. Maybe next year will be better." },
      ],
    },
    {
      question: ["We're looking for some fresh thinking in our marketing department. Are you good at ", mark("thinking outside the box?"), ""],
      options: [
        { option: "Yes, I tend to think like everybody else." },
        { option: "Yes, I enjoy approaching new projects in a traditional way." },
        { option: "Yes, I'm great at coming up with new and creative ideas.", isCorrect: true },
      ],
    },
    {
      question: ["I'd like to ", mark("share the credit"), " with you. Without you, I wouldn't have been able to find this important new client."],
      options: [
        { option: "Thank you. I appreciate the recognition.", isCorrect: true },
        { option: "Thanks, but I already have enough credit." },
        { option: "I think I deserve some of the credit too." },
      ],
    },
    {
      question: ["A big Ace Hardware store is opening up in town. Do you think they'll give our local hardware store ", mark("a run for their money?"), ""],
      options: [
        { option: "Definitely. Their selection will be bigger and their prices may be lower.", isCorrect: true },
        { option: "Yes, our local hardware store will definitely run out of money." },
        { option: "No. Everybody in town will start shopping at Ace Hardware." },
      ],
    },
    {
      question: ["Since you need to ", mark("drum up some new business,"), " I suggest you exhibit at a trade show."],
      options: [
        { option: "We don't have any business right now." },
        { option: "We've been thinking about going into the drum business." },
        { option: "Great idea! I'm sure we could find some new clients there.", isCorrect: true },
      ],
    },
    {
      question: ["You deserve a ", mark("pat on the back"), " for figuring out how to fix our computer network."],
      options: [
        { option: "Thanks. It was my pleasure.", isCorrect: true },
        { option: "Thanks. Let me turn around so you can see my back." },
        { option: "Sorry. I wish I could've done a better job." },
      ],
    },
    {
      question: [mark("Kudos to you"), " and the rest of the manufacturing department for figuring out how to cut our production costs!"],
      options: [
        { option: "We don't need any more kudos. We have enough in inventory." },
        { option: "Thank you. We are proud of our results.", isCorrect: true },
        { option: "We'll try our best, but we can't guarantee anything." },
      ],
    },
    {
      question: ["Traditional ways of advertising are no longer working for our firm. Do you think we should try some ", mark("guerrilla marketing?"), ""],
      options: [
        { option: "Absolutely. It's always better to use reliable old methods." },
        { option: "Yes, new ways of marketing might help increase sales.", isCorrect: true },
        { option: "No, I think you should try marketing to monkeys instead." },
      ],
    },
  ],
};

const lessonSevenExercise = {
  questions: [
    {
      question: ["These past few years our company has been ", mark("running in place."), ""],
      options: [
        { option: "making good progress" },
        { option: "expanding our business" },
        { option: "not making any progress", isCorrect: true },
      ],
    },
    {
      question: ["“I hope Todd doesn't get promoted to sales director.” — “", mark("You took the words right out of my mouth!"), "”"],
      options: [
        { option: "I was thinking the same thing!", isCorrect: true },
        { option: "That's what I told him!" },
        { option: "Don't try to influence me!" },
      ],
    },
    {
      question: ["Some ", mark("new blood"), " would really help our company."],
      options: [
        { option: "new ideas" },
        { option: "new acquisitions" },
        { option: "new employees", isCorrect: true },
      ],
    },
    {
      question: ["Apple has really been able to ", mark("cash in on"), " the demand for mobile computing."],
      options: [
        { option: "make lots of money from", isCorrect: true },
        { option: "foresee" },
        { option: "increase" },
      ],
    },
    {
      question: [mark("No wonder"), " Wei is having trouble getting a job in the United States. His accent is really strong."],
      options: [
        { option: "I don't understand why" },
        { option: "It's not surprising that", isCorrect: true },
        { option: "It's surprising that" },
      ],
    },
    {
      question: ["After another bad quarter, our CEO announced plans to ", mark("clean house."), ""],
      options: [
        { option: "introduce new products" },
        { option: "re-think our strategy" },
        { option: "cut employees", isCorrect: true },
      ],
    },
    {
      question: ["Why are so many of our employees arriving late to work? We need to ", mark("get to the bottom of it."), ""],
      options: [
        { option: "figure out what the problem is", isCorrect: true },
        { option: "fire them" },
        { option: "tell them to stop it" },
      ],
    },
    {
      question: ["Last year we had revenues ", mark("to the tune of"), " $2 million."],
      options: [
        { option: "of around", isCorrect: true },
        { option: "of more than" },
        { option: "of much less than" },
      ],
    },
  ],
};

const lessonEightExercise = {
  questions: [
    {
      question: ["Sandra is ", mark("of two minds"), " about leaving her job to get an MBA."],
      options: [
        { option: "upset" },
        { option: "not sure", isCorrect: true },
        { option: "very positive" },
      ],
    },
    {
      question: ["You decided to invest some money in real estate? ", mark("Good call!"), ""],
      options: [
        { option: "You're a good person!" },
        { option: "I'll call you back!" },
        { option: "Good idea!", isCorrect: true },
      ],
    },
    {
      question: ["Ford Motor Company debated for a long time whether or not to start making cars in Russia, but the company finally decided to ", mark("bite the bullet."), ""],
      options: [
        { option: "drop the project" },
        { option: "go ahead with it", isCorrect: true },
        { option: "enter the weapons business" },
      ],
    },
    {
      question: ["I know you're nervous about the launch of our new robotic vacuum cleaner, but ", mark("my gut tells me"), " that it's going to be a big seller."],
      options: [
        { option: "I have a strong feeling", isCorrect: true },
        { option: "my friend tells me" },
        { option: "I don't think" },
      ],
    },
    {
      question: ["Janet left her old job before finding a new one and ", mark("lived to regret her decision."), ""],
      options: [
        { option: "had trouble finding a new job" },
        { option: "was happy with her decision" },
        { option: "was sorry about it later", isCorrect: true },
      ],
    },
    {
      question: ["Unfortunately, our company president is not a great leader. He's ", mark("wishy-washy."), ""],
      options: [
        { option: "inconsiderate" },
        { option: "not good at making decisions", isCorrect: true },
        { option: "lazy" },
      ],
    },
    {
      question: ["Kate says running a business from her home ", mark("gives her the best of both worlds:"), " she can stay at home with her four young children and still make some money."],
      options: [
        { option: "allows her all possible advantages", isCorrect: true },
        { option: "gives her more work than she can handle" },
        { option: "lets her stay at home all day doing nothing" },
      ],
    },
    {
      question: ["The computer store was unsure at first how much demand there would be for the new line of laptops, so they started with a small order to ", mark("test the waters."), ""],
      options: [
        { option: "make sure the laptops really worked" },
        { option: "see if there was demand for the laptops", isCorrect: true },
        { option: "see if customers were interested in buying water" },
      ],
    },
  ],
};

const lessonNineExercise = {
  questions: [
    {
      question: ["You promised you'd do a great job re-designing our website, but you didn't ", mark("deliver."), ""],
      options: [
        { option: "meet our expectations", isCorrect: true },
        { option: "do anything" },
        { option: "disappoint us" },
      ],
    },
    {
      question: ["I'm not sure I'll be able to join you for drinks at 5:30. I'm ", mark("swamped."), ""],
      options: [
        { option: "exhausted" },
        { option: "probably available" },
        { option: "very busy", isCorrect: true },
      ],
    },
    {
      question: ["The proposal is due by Friday? I'll ", mark("get right on it."), ""],
      options: [
        { option: "see what I can do" },
        { option: "look it over" },
        { option: "start on it immediately", isCorrect: true },
      ],
    },
    {
      question: ["Don't try to ", mark("pull the wool over my eyes."), " I know you and Suzi were involved in an office romance."],
      options: [
        { option: "change the subject" },
        { option: "hide the truth from me", isCorrect: true },
        { option: "explain things to me" },
      ],
    },
    {
      question: ["Sorry you had to work during your vacation. Let me ", mark("make it up to you."), ""],
      options: [
        { option: "do something nice for you", isCorrect: true },
        { option: "explain why" },
        { option: "take over your duties" },
      ],
    },
    {
      question: ["Let's stop ", mark("messing around."), " We need to get our new product launched next month."],
      options: [
        { option: "strategizing" },
        { option: "wasting time", isCorrect: true },
        { option: "working so hard" },
      ],
    },
    {
      question: ["We paid ", mark("a pretty penny"), " for this new payroll software."],
      options: [
        { option: "a reasonable sum" },
        { option: "a lot of money", isCorrect: true },
        { option: "not much" },
      ],
    },
    {
      question: ["We ", mark("pulled out all the stops"), " to get Chad to accept our job offer."],
      options: [
        { option: "tried really hard", isCorrect: true },
        { option: "tried pretty hard" },
        { option: "paid a lot of money" },
      ],
    },
  ],
};

const lessonTenExercise = {
  questions: [
    {
      question: ["Our president gave everybody business card holders for Christmas. ", mark("I need another business card holder like a hole in the head."), ""],
      options: [
        { option: "I really need a new business card holder." },
        { option: "I'm happy to get another business card holder." },
        { option: "I really don't need another business card holder.", isCorrect: true },
      ],
    },
    {
      question: ["Installing that new computer software was ", mark("child's play"), " for Mark. He's got a PhD in computer science."],
      options: [
        { option: "very easy", isCorrect: true },
        { option: "challenging" },
        { option: "enjoyable" },
      ],
    },
    {
      question: ["I agree with you that we may not be successful entering the market in China, but ", mark("nothing ventured, nothing gained."), ""],
      options: [
        { option: "we should take a risk and enter the Chinese market", isCorrect: true },
        { option: "we shouldn't enter the Chinese market" },
        { option: "if we enter the Chinese market, we'll definitely succeed" },
      ],
    },
    {
      question: ["If you can't figure out how to fix the jammed printer, let Adam ", mark("take a crack at it."), ""],
      options: [
        { option: "fix the crack in it" },
        { option: "try to fix it", isCorrect: true },
        { option: "throw it in the trash" },
      ],
    },
    {
      question: ["The company ", mark("kicked off"), " the new fiscal year by announcing several exciting new products."],
      options: [
        { option: "ended" },
        { option: "postponed" },
        { option: "began", isCorrect: true },
      ],
    },
    {
      question: ["It won't be easy, but if you ", mark("put your mind to it,"), " you can study for your law degree while also working full-time."],
      options: [
        { option: "don't think too much about it" },
        { option: "work hard at it", isCorrect: true },
        { option: "think about it" },
      ],
    },
    {
      question: ["Sorry I couldn't get you the financial reports by Friday. I ", mark("gave it my best shot,"), " but I just couldn't finish on time."],
      options: [
        { option: "tried as hard as I could", isCorrect: true },
        { option: "made a little effort" },
        { option: "didn't try too hard" },
      ],
    },
    {
      question: ["If you want to work for IBM, call my cousin Alan. He's a ", mark("bigwig"), " there."],
      options: [
        { option: "low-level employee" },
        { option: "frequent visitor" },
        { option: "senior executive", isCorrect: true },
      ],
    },
  ],
};

const lessonElevenExercise = {
  questions: [
    {
      question: ["I've got a plan to ", mark("turn around our business."), ""],
      options: [
        { option: "sell our business" },
        { option: "make our business profitable again", isCorrect: true },
        { option: "cut employees" },
      ],
    },
    {
      question: ["The new project sounds interesting. ", mark("Count me in."), ""],
      options: [
        { option: "Tell me more." },
        { option: "Will I be included?" },
        { option: "I will participate.", isCorrect: true },
      ],
    },
    {
      question: ["Productivity is down. How can we ", mark("rally the troops?"), ""],
      options: [
        { option: "motivate employees", isCorrect: true },
        { option: "fire employees" },
        { option: "bring in new employees" },
      ],
    },
    {
      question: ["Let's ", mark("get down to business."), " The project deadline is Thursday."],
      options: [
        { option: "stop worrying" },
        { option: "start working", isCorrect: true },
        { option: "forecast our losses" },
      ],
    },
    {
      question: ["Lisa's got more ", mark("team spirit"), " than anybody at our company."],
      options: [
        { option: "enthusiasm for working as a group", isCorrect: true },
        { option: "work experience" },
        { option: "loyalty" },
      ],
    },
    {
      question: ["Tracy's career advisor told her not to ", mark("rest on her laurels."), ""],
      options: [
        { option: "take a break in her career" },
        { option: "rely on her past successes", isCorrect: true },
        { option: "try hard for a promotion" },
      ],
    },
    {
      question: ["Another year of losses? Is it time to ", mark("throw in the towel?"), ""],
      options: [
        { option: "give up", isCorrect: true },
        { option: "try harder" },
        { option: "find new leadership" },
      ],
    },
    {
      question: ["Are you ", mark("on board with"), " our plans for the acquisition?"],
      options: [
        { option: "aware of" },
        { option: "in disagreement with" },
        { option: "in agreement with", isCorrect: true },
      ],
    },
  ],
};

const lessonTwelveExercise = {
  questions: [
    {
      question: ["Jim thinks his company should outsource its customer service to India, but his boss thinks they should keep it in California. They ", mark("don't see eye-to-eye"), " on the issue."],
      options: [
        { option: "don't understand" },
        { option: "don't agree on", isCorrect: true },
        { option: "agree on" },
      ],
    },
    {
      question: ["We're going to conduct focus groups so consumers can ", mark("weigh in on"), " the design of some of our new products."],
      options: [
        { option: "complain about" },
        { option: "dictate" },
        { option: "give their opinion on", isCorrect: true },
      ],
    },
    {
      question: ["I know we're in a hurry to end the meeting, but let me just ", mark("circle back to"), " something David said earlier."],
      options: [
        { option: "emphasize" },
        { option: "return to", isCorrect: true },
        { option: "dismiss" },
      ],
    },
    {
      question: [mark("Every time I turn around,"), " Ellen and Kelly are chatting."],
      options: [
        { option: "Very frequently", isCorrect: true },
        { option: "Whenever I turn my back" },
        { option: "From time to time" },
      ],
    },
    {
      question: ["Let's ", mark("not jump the gun"), " by buying a new printer before we can see if the old one can be fixed."],
      options: [
        { option: "not act too quickly", isCorrect: true },
        { option: "take action now" },
        { option: "be efficient" },
      ],
    },
    {
      question: ["I know many of you have more to say on this issue, but I'm afraid we're going to have to ", mark("move on"), " so we can finish this meeting on time."],
      options: [
        { option: "continue to discuss this" },
        { option: "leave the conference room now" },
        { option: "proceed to our next topic", isCorrect: true },
      ],
    },
    {
      question: ["Our office expenses are ", mark("out of hand."), " We're going to have to stop spending so much."],
      options: [
        { option: "hard to count" },
        { option: "written down" },
        { option: "much too high", isCorrect: true },
      ],
    },
    {
      question: ["Calvin ", mark("covered a lot of ground"), " with his local partners during his business trip to Tokyo."],
      options: [
        { option: "saw much of the city" },
        { option: "had successful conversations", isCorrect: true },
        { option: "made a lot of money" },
      ],
    },
  ],
};

const lessonThirteenExercise = {
  questions: [
    { question: ["In the future, please be sure to ", mark("dot your i's and cross your t's."), ""], options: [{ option: "write more neatly" }, { option: "be more careful", isCorrect: true }, { option: "work more quickly" }] },
    { question: ["It's just a small mistake. No need to ", mark("make a mountain out of a molehill."), ""], options: [{ option: "correct it" }, { option: "make a big deal of it", isCorrect: true }, { option: "point it out" }] },
    { question: ["Lately your work hasn't been ", mark("up to scratch."), ""], options: [{ option: "on time" }, { option: "bad" }, { option: "good", isCorrect: true }] },
    { question: ["This may be a ", mark("bitter pill to swallow,"), " but several of us have noticed that your performance has been poor for the past six months."], options: [{ option: "unpleasant news", isCorrect: true }, { option: "no surprise" }, { option: "good news" }] },
    { question: ["You ", mark("dropped the ball."), " The proposal was due last Friday!"], options: [{ option: "made a mistake", isCorrect: true }, { option: "worked hard" }, { option: "did well" }] },
    { question: [mark("I could've sworn"), " that I told you about the meeting."], options: [{ option: "I'm sorry" }, { option: "I forgot" }, { option: "I really thought", isCorrect: true }] },
    { question: ["Joe has been ", mark("asleep at the wheel"), " for several months."], options: [{ option: "not doing his job well", isCorrect: true }, { option: "sleepy" }, { option: "doing quite well" }] },
    { question: ["We didn't get the contract renewed? ", mark("No big deal."), ""], options: [{ option: "It's not a big problem.", isCorrect: true }, { option: "It's a big problem." }, { option: "That's good news." }] },
  ],
};

const lessonFourteenExercise = {
  questions: [
    { question: ["Your small company is trying to get distribution at Wal-Mart? How are you going to ", mark("pull that off?"), ""], options: [{ option: "succeed in doing that", isCorrect: true }, { option: "fail to do that" }, { option: "compete with them" }] },
    { question: ["If you need help answering phones and taking orders, I'd be happy to ", mark("pitch in."), ""], options: [{ option: "hang up on the customers" }, { option: "help", isCorrect: true }, { option: "call" }] },
    { question: ["When you're the CEO of a tobacco company, dealing with lawsuits ", mark("comes with the territory."), ""], options: [{ option: "is a great benefit" }, { option: "is easily avoided" }, { option: "is part of the job", isCorrect: true }] },
    { question: ["If we're going to get all of these orders shipped in time for Christmas, we're going to have to ", mark("hunker down!"), ""], options: [{ option: "close for the holidays" }, { option: "work really hard", isCorrect: true }, { option: "take it easy" }] },
    { question: ["During the negotiation, ", mark("keep your eye on the prize"), " and don't let the other side pressure you into a bad deal."], options: [{ option: "watch the prize carefully" }, { option: "stay focused on what's important", isCorrect: true }, { option: "grab everything for yourself" }] },
    { question: ["You think consumers will be willing to pay $50,000 for a high-tech toilet? That's ", mark("pushing the envelope."), ""], options: [{ option: "testing the limits of what people will pay", isCorrect: true }, { option: "a reasonable price" }, { option: "not something to be flushed down a toilet" }] },
    { question: ["You look exhausted. Why don't you take a few days off and get some ", mark("R&R?"), ""], options: [{ option: "spend some time relaxing", isCorrect: true }, { option: "take a trip by train" }, { option: "work extra hours" }] },
    { question: ["If we want to submit the business plan by tomorrow afternoon, we're going to have to ", mark("burn the midnight oil"), " tonight."], options: [{ option: "work until 7 p.m." }, { option: "relax" }, { option: "work very late", isCorrect: true }] },
  ],
};

const lessonFifteenExercise = {
  questions: [
    { question: ["Please don't try to ", mark("talk me into"), " exhibiting at your trade show this year."], options: [{ option: "Okay, I'll sign you up." }, { option: "Okay, I'll call you tomorrow to talk about it some more." }, { option: "Okay, if you're not interested, I won't ask again.", isCorrect: true }] },
    { question: ["I can't find Sam's address anywhere. Do you think you can help me ", mark("track it down?"), ""], options: [{ option: "Yes, I'd be happy to track it." }, { option: "Sure, I'll help you find it.", isCorrect: true }, { option: "No, but I'll help you find it." }] },
    { question: ["We've already ", mark("shelled out"), " enough on advertising this year."], options: [{ option: "I agree. Let's spend more." }, { option: "I know we've spent a lot, but I think we should do a couple more ads.", isCorrect: true }, { option: "I disagree. We've already spent a lot of money on advertising." }] },
    { question: ["You think you'll be accepted to Harvard Business School? ", mark("Dream on!"), ""], options: [{ option: "You may not agree, but I think it's a realistic goal.", isCorrect: true }, { option: "Right, I'll just go to sleep and dream about it." }, { option: "Thanks for helping me think big." }] },
    { question: ["I had nothing to do with the disastrous decision to hire Dan. Don't ", mark("point the finger at me!"), ""], options: [{ option: "I'm not pointing the finger, but I am blaming you." }, { option: "Good. I'm glad you're willing to take the blame." }, { option: "Okay, I won't blame you.", isCorrect: true }] },
    { question: ["I think we've ", mark("struck gold"), " with our idea to sell content on our website instead of giving it away for free. What do you think?"], options: [{ option: "I agree. It's a great idea.", isCorrect: true }, { option: "I agree. Nobody's going to be willing to pay for it." }, { option: "I agree. We should sell silver and bronze on the site too." }] },
    { question: ["You need to take responsibility for our accounting problems. Stop trying to ", mark("pass the buck!"), ""], options: [{ option: "Okay, I won't pass it anymore. You can have it." }, { option: "I already passed the buck." }, { option: "I'm not trying to pass the buck. I admit I made a mistake.", isCorrect: true }] },
    { question: ["You finally got promoted, and now you're leaving your company and opening a health food store? ", mark("I can't believe my ears!"), ""], options: [{ option: "Yes, I know it's a surprising move.", isCorrect: true }, { option: "I couldn't believe my ears either." }, { option: "I know you're not surprised." }] },
  ],
};

const lessonSixteenExercise = {
  questions: [
    { question: ["I know we need to do some ", mark("belt-tightening,"), " but I'm not sure that laying off employees is the solution."], options: [{ option: "increase our revenues" }, { option: "get rid of some people" }, { option: "reduce our expenses", isCorrect: true }] },
    { question: ["Changing the packaging design at this point is ", mark("out of the question."), " We're already in production."], options: [{ option: "not a possibility", isCorrect: true }, { option: "a good idea" }, { option: "probably not possible" }] },
    { question: ["If we're serious about saving money, we should consider ", mark("cutting back"), " on our use of expensive consultants."], options: [{ option: "eliminating" }, { option: "reducing", isCorrect: true }, { option: "increasing" }] },
    { question: ["You can tell me about how great Jim is ", mark("until you're blue in the face."), " The fact is, I don't like the way he does business."], options: [{ option: "until your face turns blue" }, { option: "all you want", isCorrect: true }, { option: "until I change my mind" }] },
    { question: ["Kyle and Mark are meeting at Flanagan's Bar after work to ", mark("bat around"), " some ideas about starting their own business."], options: [{ option: "discuss", isCorrect: true }, { option: "dismiss" }, { option: "finalize" }] },
    { question: ["When you're the boss, demonstrating good leadership is ", mark("the name of the game."), ""], options: [{ option: "not important" }, { option: "somewhat important" }, { option: "very important", isCorrect: true }] },
    { question: ["The food manufacturer's costs have gone up, but they are unable to raise the price of their products. They're ", mark("caught between a rock and a hard place."), ""], options: [{ option: "in an undesirable position", isCorrect: true }, { option: "ready to go out of business" }, { option: "deciding between two good options" }] },
    { question: ["Why don't you open a corporate account with UPS and ship all of your packages with them? You could ", mark("save a bundle."), ""], options: [{ option: "stop carrying heavy packages" }, { option: "save a few dollars" }, { option: "save a lot of money", isCorrect: true }] },
  ],
};

const lessonSeventeenExercise = {
  questions: [
    { question: ["Len, one of the salespeople in our department, isn't ", mark("pulling his weight."), ""], options: [{ option: "doing his share of work", isCorrect: true }, { option: "exercising enough" }, { option: "doing anything" }] },
    { question: ["Len's boss Jill is trying to ", mark("run a tight ship"), " and gets very upset when her employees don't perform."], options: [{ option: "operate effectively", isCorrect: true }, { option: "be an understanding boss" }, { option: "join the Marines" }] },
    { question: ["His boss Jill is ", mark("sick and tired"), " of the fact that Len shows up late every day and is constantly flirting with Tatiana, the saleswoman in the electronics department."], options: [{ option: "delighted by" }, { option: "aware of" }, { option: "fed up with", isCorrect: true }] },
    { question: ["Len's boss told him he wasn't performing well. She told him to ", mark("shape up or ship out."), ""], options: [{ option: "keep doing well" }, { option: "improve or go", isCorrect: true }, { option: "get in better shape" }] },
    { question: [mark("“What's the deal?”"), " Len asked when Jill yelled at him. “I thought you and I were friends.”"], options: [{ option: "What's on your mind?" }, { option: "What's going on?", isCorrect: true }, { option: "What are you offering?" }] },
    { question: ["Len accused Jill of turning into a ", mark("slave driver"), " after she fired him."], options: [{ option: "demanding boss", isCorrect: true }, { option: "fair boss" }, { option: "hard worker" }] },
    { question: ["“I can no longer ", mark("turn a blind eye"), " to the fact that you're not taking this job very seriously,” Jill told him."], options: [{ option: "be pleased with" }, { option: "ignore", isCorrect: true }, { option: "be supportive of" }] },
    { question: ["Len told Jill to ", mark("cut him some slack,"), " explaining that he's been under a lot of stress lately at home."], options: [{ option: "be honest" }, { option: "be pleased" }, { option: "be forgiving", isCorrect: true }] },
  ],
};

const lessonEighteenExercise = {
  questions: [
    { question: ["Jake says he only hires pretty girls to work at his restaurant. He's so ", mark("un-PC!"), ""], options: [{ option: "bad with computers" }, { option: "kind" }, { option: "offensive", isCorrect: true }] },
    { question: ["Tiffany called in sick on Tuesday, and she showed up for work on Wednesday with a suntan. She's going to ", mark("get nailed"), " for lying about being sick."], options: [{ option: "be awarded" }, { option: "get in trouble", isCorrect: true }, { option: "get fired" }] },
    { question: ["Brad said that Tammy ", mark("made a pass at"), " him while they were on a business trip in Moscow."], options: [{ option: "tried to initiate a sexual relationship", isCorrect: true }, { option: "threw a football at him" }, { option: "was rude to him" }] },
    { question: ["Frank keeps taking all of the best customer accounts for himself. We hope that one of these days, ", mark("he'll get his."), ""], options: [{ option: "he'll get his own accounts" }, { option: "something bad will happen to him", isCorrect: true }, { option: "he'll earn the accounts he's taking" }] },
    { question: ["I'm not surprised that Randy kept trying to put his arm around you during the business dinner. He's always ", mark("on the make."), ""], options: [{ option: "affectionate in public" }, { option: "looking for romance", isCorrect: true }, { option: "moving quickly" }] },
    { question: ["Our CEO was one of the last people to hear of the accounting scandal at our company. He's so ", mark("out of the loop!"), ""], options: [{ option: "aware of what's going on" }, { option: "unaware of what's going on", isCorrect: true }, { option: "curious about what's going on" }] },
    { question: ["Monica loves to gossip, so you can always count on her for ", mark("the latest dirt."), ""], options: [{ option: "most up-to-date gossip", isCorrect: true }, { option: "news of important current events" }, { option: "nastiest rumors" }] },
    { question: ["Three months after he laid off thousands of employees on Christmas Eve, the CEO himself was fired. ", mark("What goes around comes around."), ""], options: [{ option: "When you fire somebody, you'll probably get fired yourself soon." }, { option: "The CEO will still come around the offices." }, { option: "When people do bad things, they're usually punished in the end.", isCorrect: true }] },
  ],
};

const lessonNineteenExercise = {
  questions: [
    { question: ["Everybody in the office knows that Tracy is a ", mark("hot-head."), ""], options: [{ option: "has a bad temper", isCorrect: true }, { option: "has a nice personality" }, { option: "rarely gets upset" }] },
    { question: ["When Tracy's in a bad mood, it's best to just ", mark("steer clear of her."), ""], options: [{ option: "annoy her" }, { option: "avoid her", isCorrect: true }, { option: "ask her what's wrong" }] },
    { question: ["According to Seth, Tracy is always ", mark("on her high horse."), ""], options: [{ option: "right" }, { option: "thinking she has all the answers", isCorrect: true }, { option: "nervous" }] },
    { question: ["Seth ", mark("has issues with"), " Tracy."], options: [{ option: "doesn't get along with", isCorrect: true }, { option: "get along with" }, { option: "bothers" }] },
    { question: ["Seth doesn't understand why Tracy's always ", mark("in a snit."), ""], options: [{ option: "busy" }, { option: "in a good mood" }, { option: "in a bad mood", isCorrect: true }] },
    { question: ["When Seth asked Tracy for help today, she said, “You know how to ", mark("push my buttons."), " I'm sick and tired of doing your job all the time.”"], options: [{ option: "ask for help" }, { option: "annoy me", isCorrect: true }, { option: "delight me" }] },
    { question: ["Seth told Yuri that Tracy ", mark("gets bent out of shape"), " whenever he asks her for help."], options: [{ option: "pleased" }, { option: "annoyed", isCorrect: true }, { option: "supportive" }] },
    { question: ["Seth complained to their boss, Yuri, about how much Tracy ", mark("gets under his skin."), ""], options: [{ option: "delights him" }, { option: "lies to him" }, { option: "bothers him", isCorrect: true }] },
  ],
};

const lessonTwentyExercise = {
  questions: [
    { question: ["We'd better be careful what we say in the office."], options: [{ option: "That's right. The walls have ears.", isCorrect: true }, { option: "Likely story!" }, { option: "Right, I wasn't born yesterday." }] },
    { question: ["Eric, we're going to have to ask you to take a 40 percent pay cut. But next year, I promise we'll triple your salary."], options: [{ option: "Lower your voice. The walls have ears!" }, { option: "Don't get too excited. Chill out!" }, { option: "That's hard to believe. I wasn't born yesterday!", isCorrect: true }] },
    { question: ["Jill is constantly flattering her boss and offering to do favors for him."], options: [{ option: "Why doesn't she butter him up instead?" }, { option: "Think twice before accepting favors from her." }, { option: "That's one way to climb the corporate ladder.", isCorrect: true }] },
    { question: ["I'm giving a presentation to our CEO in a half an hour. I'm so nervous!"], options: [{ option: "Likely story." }, { option: "Chill out!", isCorrect: true }, { option: "You're such a yes man." }] },
    { question: ["I spent three hours helping Rick with his financial projections, and he didn't even say thank you."], options: [{ option: "You need to look at yourself in the mirror." }, { option: "I'm sure you'll think twice before helping him again.", isCorrect: true }, { option: "He's trying to climb the corporate ladder." }] },
    { question: ["Maria works at least 60 hours a week at the law firm and always volunteers for extra work. She's an excellent employee."], options: [{ option: "She'll definitely get ahead.", isCorrect: true }, { option: "Let's not talk about her behind her back." }, { option: "It's a dog-eat-dog world." }] },
    { question: ["Paul was arrested for stealing millions of dollars from his company."], options: [{ option: "I'm not surprised. He's a real yes man." }, { option: "That's one way to climb the corporate ladder." }, { option: "I don't know how he can look at himself in the mirror.", isCorrect: true }] },
    { question: ["You're the best boss I've ever had and definitely the smartest!"], options: [{ option: "Are you just out for yourself?" }, { option: "Are you trying to butter me up?", isCorrect: true }, { option: "Isn't it a dog-eat-dog world?" }] },
  ],
};

const lessonTwentyOneExercise = {
  questions: [
    { question: ["Kate said she didn't have time to help you? I'm not surprised, since ", mark("she has a lot on her plate right now."), ""], options: [{ option: "she's very busy these days", isCorrect: true }, { option: "she's taken too much food" }, { option: "she doesn't really like to help people" }] },
    { question: ["Instead of retiring, Joyce decided to keep working and just ", mark("scale back her hours."), ""], options: [{ option: "increase the number of hours she works" }, { option: "retire in a few years" }, { option: "reduce the number of hours she works", isCorrect: true }] },
    { question: ["You've been at the office every night until midnight for the past three months? ", mark("Hang in there."), " In just a few more weeks, the busy period will probably be over."], options: [{ option: "Quit your job." }, { option: "Be patient.", isCorrect: true }, { option: "Keep complaining." }] },
    { question: ["Tanya works all day and goes to school every evening. No wonder she's ", mark("wiped out."), ""], options: [{ option: "exhausted", isCorrect: true }, { option: "sick" }, { option: "full of energy" }] },
    { question: ["At the tax consulting firm, March and April are ", mark("crunch time."), ""], options: [{ option: "a relaxing time" }, { option: "a slow period" }, { option: "a very busy period", isCorrect: true }] },
    { question: ["You asked me to buy you a bamboo vase on my business trip to Hanoi? I'm sorry, but it ", mark("slipped my mind!"), ""], options: [{ option: "you never asked me for that" }, { option: "I forgot", isCorrect: true }, { option: "I didn't get a chance" }] },
    { question: ["Eva is working full-time while studying for her MBA and taking care of her two small kids. ", mark("I don't know how she can keep her head above water."), ""], options: [{ option: "No wonder she has no time to go swimming." }, { option: "I don't know how she manages.", isCorrect: true }, { option: "I don't know what she does with all her free time." }] },
    { question: ["If you want to pass the CPA exam, you'd better ", mark("keep your nose to the grindstone"), " and stop going out every night to party."], options: [{ option: "focus on studying", isCorrect: true }, { option: "focus on having fun" }, { option: "keep your nose out of other people's business" }] },
  ],
};

const lessonTwentyTwoExercise = {
  questions: [
    { question: ["Diana woke up this morning feeling ", mark("under the weather."), ""], options: [{ option: "good" }, { option: "sick", isCorrect: true }, { option: "okay" }] },
    { question: ["“My head is ", mark("killing me,"), "” Diana told her husband Boris."], options: [{ option: "really hurts", isCorrect: true }, { option: "hurts a little" }, { option: "isn't bothering me" }] },
    { question: ["Boris handed Diane the phone and suggested that she ", mark("call in sick."), ""], options: [{ option: "go to work" }, { option: "work from home" }, { option: "phone the office to say she's not feeling well", isCorrect: true }] },
    { question: ["Diana is ", mark("up to her ears in work,"), " so she is not happy about having to call in sick."], options: [{ option: "not too busy" }, { option: "very busy", isCorrect: true }, { option: "enjoying her job" }] },
    { question: ["Diana took the phone and called her boss. “I'm ", mark("not feeling so hot,"), "” she said."], options: [{ option: "I don't feel well", isCorrect: true }, { option: "I feel okay" }, { option: "I have a very high temperature" }] },
    { question: ["Diana's boss said, “It looks like ", mark("there's something going around."), " Three other people have also called in sick today.”"], options: [{ option: "an illness is going around the office", isCorrect: true }, { option: "a lot of people are on vacation" }, { option: "nobody is feeling well" }] },
    { question: ["Diana doesn't like to complain, but the truth is she's ", mark("as sick as a dog."), ""], options: [{ option: "really ill", isCorrect: true }, { option: "feeling okay" }, { option: "in a bad mood" }] },
    { question: ["Diana plans to ", mark("take it easy"), " today."], options: [{ option: "run around" }, { option: "exercise lightly" }, { option: "rest", isCorrect: true }] },
  ],
};

const lessonTwentyThreeExercise = {
  questions: [
    { question: ["Procter & Gamble had to ", mark("jump through hoops"), " to get its new drug approved by the Food and Drug Administration."], options: [{ option: "ask the right people" }, { option: "take many steps", isCorrect: true }, { option: "show proven results" }] },
    { question: ["Nora had a very good job interview with the bank. She thinks ", mark("the job is in the bag."), ""], options: [{ option: "she'll get an offer", isCorrect: true }, { option: "she'll get a rejection letter" }, { option: "she'll get a bag with the bank's logo on it" }] },
    { question: ["Madeleine Albright made many connections while she was U.S. Secretary of State. It was a ", mark("no-brainer"), " for her to open a political consulting firm after she left office."], options: [{ option: "poor decision" }, { option: "logical decision", isCorrect: true }, { option: "tough decision" }] },
    { question: ["When the popular coffee house announced it would start staying open until midnight and start serving beer, many loyal customers feared it would ", mark("become a different animal."), ""], options: [{ option: "become a hangout for dogs and cats" }, { option: "change in character", isCorrect: true }, { option: "become an even better coffee house" }] },
    { question: ["I know you were hoping for a higher bonus, but $5,000 is ", mark("nothing to sneeze at!"), ""], options: [{ option: "less than you deserve" }, { option: "disappointing" }, { option: "a good amount of money", isCorrect: true }] },
    { question: ["Of course, I prefer Dom Pérignon champagne over a $4 bottle of sparkling wine, but ", mark("comparing the two is like comparing apples to oranges."), ""], options: [{ option: "you can't really compare the two", isCorrect: true }, { option: "one is fruitier than the other" }, { option: "it makes sense to compare the two" }] },
    { question: ["If you need advice on where to set up your new manufacturing facility in China, talk to Stan. He ", mark("knows China inside and out."), ""], options: [{ option: "He's been to China a few times." }, { option: "He speaks Chinese." }, { option: "He knows China very well.", isCorrect: true }] },
    { question: ["Chris spent a year working as an intern at Chelsea Brewing Company in order to ", mark("get some experience under his belt."), " Then he opened his own microbrewery."], options: [{ option: "have a good time" }, { option: "make some money" }, { option: "gain experience", isCorrect: true }] },
  ],
};

const lessonTwentyFourExercise = {
  questions: [
    { question: ["I'm trying to decide between a Nook and a Kindle e-reader. Which ", mark("gives more bang for the buck?"), ""], options: [{ option: "offers more value", isCorrect: true }, { option: "is cheaper" }, { option: "is more durable" }] },
    { question: ["Please don't try to ", mark("give me the hard sell."), ""], options: [{ option: "aggressively try to sell me something", isCorrect: true }, { option: "sell me something overpriced" }, { option: "sell me something worthless" }] },
    { question: ["We rented a storage facility for 12 months, and the company threw in an extra three months ", mark("at no extra charge."), ""], options: [{ option: "for a small fee" }, { option: "for free", isCorrect: true }, { option: "at a discount" }] },
    { question: ["If we buy the copier today you'll include one year of servicing for free? ", mark("It's a deal!"), ""], options: [{ option: "I agree!", isCorrect: true }, { option: "That's a good offer!" }, { option: "I'll think about it!" }] },
    { question: ["Linda tried to negotiate the salary offer with Donox, but the company ", mark("stood firm"), " at $90,000 a year."], options: [{ option: "increased their offer to" }, { option: "decreased their offer to" }, { option: "refused to offer more than", isCorrect: true }] },
    { question: ["This is ", mark("off the record,"), " but I'm not sure how much longer Mark is going to be with the company."], options: [{ option: "unofficial", isCorrect: true }, { option: "official" }, { option: "widely known" }] },
    { question: ["Come into the office this Saturday? ", mark("No can do."), ""], options: [{ option: "Maybe." }, { option: "No problem." }, { option: "I can't do that.", isCorrect: true }] },
    { question: ["Apple really ", mark("made a splash"), " with the introduction of the iPad."], options: [{ option: "got lots of attention", isCorrect: true }, { option: "spent a lot of money" }, { option: "beat the competition" }] },
  ],
};

const lessonTwentyFiveExercise = {
  questions: [
    { question: ["Susan said she'd be happy to bring chocolate chip cookies to the office. She ", mark("prides herself on being a good baker."), ""], options: [{ option: "mistakenly thinks she can bake" }, { option: "is proud of her skills as a baker", isCorrect: true }, { option: "bakes chocolate chip cookies every day" }] },
    { question: ["Al's attitude was bad last year, but this year he's ", mark("done a 180."), ""], options: [{ option: "developed an even worse attitude" }, { option: "really improved his attitude", isCorrect: true }, { option: "left the job" }] },
    { question: ["The new government regulations are very complicated. ", mark("We can't make heads or tails of them."), ""], options: [{ option: "We think they're excellent." }, { option: "We think they're very bad." }, { option: "We can't understand them at all.", isCorrect: true }] },
    { question: ["Although you've improved your written communication skills over the past year, this is still ", mark("an opportunity area for you."), ""], options: [{ option: "an area where you need to improve further", isCorrect: true }, { option: "an area where you've already made enough progress" }, { option: "an area where you'll find exciting opportunities" }] },
    { question: ["If you need help with your new logo, ask Molly. ", mark("She's got a knack for graphic design."), ""], options: [{ option: "She used to be a graphic designer." }, { option: "She knows several good graphic designers." }, { option: "She's very good at graphic design.", isCorrect: true }] },
    { question: ["You spent 14 hours proofreading my report? ", mark("That was beyond the call of duty."), ""], options: [{ option: "That was more than I expected.", isCorrect: true }, { option: "You shouldn't have bothered." }, { option: "You were just doing your job." }] },
    { question: ["Please ", mark("keep me in the loop"), " regarding your vacation plans. I need to know when you're not going to be in the office."], options: [{ option: "keep me updated about", isCorrect: true }, { option: "don't bother telling me about" }, { option: "let everybody in the office know about" }] },
    { question: ["Juan's new job at the lab is very complicated. It may take him a few months to ", mark("get up to speed."), ""], options: [{ option: "feel like he's got too much work to do" }, { option: "feel comfortable doing the job", isCorrect: true }, { option: "feel like the job is too difficult for him" }] },
  ],
};

const lessonTwentySixExercise = {
  questions: [
    { question: ["Paula is a ", mark("go-getter."), " No wonder she was our top salesperson last month!"], options: [{ option: "very good at making friends" }, { option: "a reliable, kind person" }, { option: "very effective at her job", isCorrect: true }] },
    { question: ["Your company just agreed to give you a company car, so ", mark("don't push your luck"), " by asking for a large raise now."], options: [{ option: "see if you can get more good luck" }, { option: "see what more you can get", isCorrect: true }, { option: "make your boss happy" }] },
    { question: ["When Keith didn't ", mark("make the grade"), " as a professional athlete, he decided to become a high school football coach instead."], options: [{ option: "succeed" }, { option: "fail", isCorrect: true }, { option: "get good grades" }] },
    { question: ["Kate is interested in working internationally, and she hopes to get a job in Europe ", mark("down the road."), ""], options: [{ option: "after she retires" }, { option: "close to home" }, { option: "in the future", isCorrect: true }] },
    { question: ["Sure, Michelle earns more money than any of us and has the biggest office, but ", mark("she's earned her keep."), ""], options: [{ option: "she earns a lot of money" }, { option: "she just got lucky" }, { option: "she deserves it", isCorrect: true }] },
    { question: ["I'm not sure how to ", mark("break the news,"), " but our company is bankrupt and our offices will close down next week."], options: [{ option: "I've got some wonderful news to tell you" }, { option: "This is difficult to discuss", isCorrect: true }, { option: "I'm not sure if this is true" }] },
    { question: ["Nordstrom's department stores are famous for their customer service. They're always willing to ", mark("go the extra mile"), " to please their customers."], options: [{ option: "travel long distances" }, { option: "do a lot", isCorrect: true }, { option: "do nothing" }] },
    { question: ["Sheryl didn't get the job offer at the Los Angeles Times. They told her they needed somebody with more journalism experience who ", mark("could hit the ground running."), ""], options: [{ option: "would run away from the job after a short period" }, { option: "would tell everybody else how to do their jobs" }, { option: "would learn quickly how to do the job", isCorrect: true }] },
  ],
};

const lessonTwentySevenExercise = {
  questions: [
    { question: ["Liz's boss has told her to ", mark("reduce headcount"), " because the company is in financial trouble."], options: [{ option: "cut her salary" }, { option: "cut costs" }, { option: "lay off workers", isCorrect: true }] },
    { question: ["Liz only has three employees: Brian, Rachel, and Pam. Brian and Rachel are doing great work, so she can't afford to ", mark("let them go."), ""], options: [{ option: "fire them", isCorrect: true }, { option: "let them take a vacation" }, { option: "have them quit" }] },
    { question: ["Pam isn't doing so well. In fact, over the past year her work has really ", mark("slipped."), ""], options: [{ option: "gotten better" }, { option: "gotten worse", isCorrect: true }, { option: "stayed the same" }] },
    { question: ["It's true that Pam helped build the company ", mark("from the ground up"), " and has been a very loyal employee over the past 10 years."], options: [{ option: "from its beginnings", isCorrect: true }, { option: "from a failing enterprise" }, { option: "starting recently" }] },
    { question: ["Unfortunately, Pam is no longer ", mark("at the top of her game."), ""], options: [{ option: "interested in working" }, { option: "good at sports" }, { option: "performing well", isCorrect: true }] },
    { question: ["Liz thinks Pam has simply worked too hard and is now ", mark("burned out."), ""], options: [{ option: "no longer effective", isCorrect: true }, { option: "very effective" }, { option: "ready for a promotion" }] },
    { question: ["Liz likes Pam, and would prefer not to fire her. But ", mark("her hands are tied."), ""], options: [{ option: "she has another choice" }, { option: "she has no choice", isCorrect: true }, { option: "she can't move her hands" }] },
    { question: ["Liz hopes there will be ", mark("no hard feelings"), " after she tells Pam the bad news."], options: [{ option: "no bitterness", isCorrect: true }, { option: "no loss of feeling" }, { option: "no joy" }] },
  ],
};

const lessonTwentyEightExercise = {
  questions: [
    { question: ["We received résumés from two candidates that ", mark("sparked our interest."), " Please call them to arrange interviews."], options: [{ option: "will definitely be hired" }, { option: "aren't interesting" }, { option: "look promising", isCorrect: true }] },
    { question: ["I'm currently ", mark("between jobs,"), " but I'm confident I'll find something soon."], options: [{ option: "on vacation" }, { option: "employed" }, { option: "unemployed", isCorrect: true }] },
    { question: ["No wonder Carl is so good at sales. ", mark("He's a real people person."), ""], options: [{ option: "He's good with people.", isCorrect: true }, { option: "He's good at his job." }, { option: "He doesn't like people." }] },
    { question: ["Working at a small company with only four employees, Vijay is used to ", mark("wearing many hats."), ""], options: [{ option: "working much too hard" }, { option: "putting on a hat every morning" }, { option: "doing many different tasks", isCorrect: true }] },
    { question: ["Working as a summer intern is a good way to ", mark("get your foot in the door with a company."), ""], options: [{ option: "get a full-time job at a company", isCorrect: true }, { option: "get promoted" }, { option: "make money over the summer" }] },
    { question: ["Where does Wendy work? I know she told me, but ", mark("I'm drawing a blank."), ""], options: [{ option: "I wasn't listening" }, { option: "I can't remember", isCorrect: true }, { option: "I promised not to tell anybody" }] },
    { question: ["I suggest you take the sales analyst position. It's a ", mark("stepping stone to a better position."), ""], options: [{ option: "way to get a better job in the future", isCorrect: true }, { option: "way to ensure you'll always be a sales analyst" }, { option: "way to guarantee you'll be the sales director next year" }] },
    { question: ["Angela hardly ever sees her boss. ", mark("He's hands-off."), ""], options: [{ option: "He keeps his hands off her." }, { option: "He doesn't manage her closely.", isCorrect: true }, { option: "He has his hands in everything." }] },
  ],
};

const lessonTwentyNineExercise = {
  questions: [
    { question: ["We purchased an entire office building in New York ", mark("for a song"), " a few years ago when the economy was bad."], options: [{ option: "Now that building would be much more expensive.", isCorrect: true }, { option: "Now that building would be much cheaper." }, { option: "Now you could probably get that building at a good price." }] },
    { question: ["Kim, our new finance manager, is the type of person who can ", mark("take the ball and run with it."), ""], options: [{ option: "Great, we need somebody here who needs a lot of direction." }, { option: "Great, we need some more good athletes in our office." }, { option: "Great, we're looking for somebody with initiative.", isCorrect: true }] },
    { question: ["Jesse won $5 million last month in a lawsuit. He really ", mark("struck it rich."), ""], options: [{ option: "No wonder he's decided to retire!", isCorrect: true }, { option: "No wonder he's decided to go to law school!" }, { option: "No wonder he's decided to continue working!" }] },
    { question: ["We're looking to hire somebody who'll stay with our company for at least a few years. You wouldn't ", mark("jump ship"), " after just a year, would you?"], options: [{ option: "No, I don't even like sailing." }, { option: "No, I always stay at jobs at least three years.", isCorrect: true }, { option: "No, I would probably quit after a year." }] },
    { question: ["You might get rich investing in biotech companies, but you're just as likely to ", mark("lose your shirt."), ""], options: [{ option: "That's good advice. I'll definitely invest heavily in them." }, { option: "That's true. I'd better be careful about putting too much money into them.", isCorrect: true }, { option: "That's true, but I'd be willing to give away my shirt in exchange for a lot of money." }] },
    { question: ["While in Russia, you should ", mark("snap up"), " some lacquer boxes. They're beautiful and inexpensive there."], options: [{ option: "Okay, I will be sure to pack plenty of boxes." }, { option: "Okay, I will be sure to sell some lacquer boxes." }, { option: "Okay, I will be sure to buy some lacquer boxes.", isCorrect: true }] },
    { question: ["I bought plane tickets on Econo-Airlines, and a few days later they ", mark("went belly up!"), ""], options: [{ option: "I'm sure you'll have a great flight." }, { option: "I'll be sure to book my next flight with Econo-Airlines." }, { option: "That's too bad. You'd better buy some new plane tickets.", isCorrect: true }] },
    { question: ["Working on Wall Street for an investment bank sounds wonderful, but ", mark("it's not all it's cracked up to be."), ""], options: [{ option: "You're right. It really is wonderful." }, { option: "You're right. The pay is good, but the work is demanding and the hours are long.", isCorrect: true }, { option: "You're right. Everybody I know who works on Wall Street loves it." }] },
  ],
};

const lessonThirtyExercise = {
  questions: [
    { question: ["Hi, it's Karen Chen from Citigroup calling to see if you've had a chance to ", mark("review our offer."), ""], options: [{ option: "reject our offer" }, { option: "consider our offer", isCorrect: true }, { option: "make an offer" }] },
    { question: ["Hi, Karen. I still haven't made up my mind. I'm ", mark("weighing another offer"), " from another financial services company."], options: [{ option: "considering", isCorrect: true }, { option: "rejecting" }, { option: "discussing" }] },
    { question: ["Tell me ", mark("the big picture"), " on what the other company is offering."], options: [{ option: "small points" }, { option: "true story" }, { option: "overview", isCorrect: true }] },
    { question: ["I don't need to know the ", mark("nitty-gritty"), " of what the other company is offering."], options: [{ option: "overview" }, { option: "summary" }, { option: "details", isCorrect: true }] },
    { question: ["The salary you're requesting is ", mark("out of our range."), ""], options: [{ option: "less than we can afford" }, { option: "more than we can afford", isCorrect: true }, { option: "about what we can afford" }] },
    { question: ["If you can ", mark("split the difference,"), " we can come to an agreement."], options: [{ option: "meet halfway", isCorrect: true }, { option: "pay me what I want" }, { option: "raise your offer a little" }] },
    { question: ["If you ", mark("stand your ground"), " regarding the salary, we're not going to be able to reach an agreement."], options: [{ option: "give up your position" }, { option: "act totally unreasonable" }, { option: "maintain your position", isCorrect: true }] },
    { question: ["Tom ", mark("drove a hard bargain"), " and got the company to offer an additional $10,000."], options: [{ option: "negotiated a little" }, { option: "negotiated hard", isCorrect: true }, { option: "negotiated fairly" }] },
  ],
};

const lessonOneLines = [
  {
    speaker: "Carl",
    line: ["I think we've ", mark("come up with a winner.")],
  },
  {
    speaker: "Anne",
    line: ["I agree. The new Brush-o-matic should be a ", mark("blockbuster!")],
  },
  {
    speaker: "Carl",
    line: [
      "Our designers have already made up some prototypes. The toothbrushes have a tooth-whitening attachment and many other ",
      mark("bells and whistles."),
    ],
  },
  {
    speaker: "Greg",
    line: [
      "We should ",
      mark("fast track this project."),
      " Let's try to launch it in time for the holiday season.",
    ],
  },
  {
    speaker: "Anne",
    line: ["This will be a great ", mark("stocking stuffer!")],
  },
  {
    speaker: "Carl",
    line: ["We definitely need a ", mark("big win"), " for the holidays."],
  },
  {
    speaker: "Anne",
    line: ["This is a great idea. We're going to ", mark("make a killing.")],
  },
  {
    speaker: "Greg",
    line: [
      "Let's not talk about this project to anybody who doesn't need to know. We'll ",
      mark("keep it under wraps."),
    ],
  },
  {
    speaker: "Carl",
    line: [
      "I agree. ",
      mark("Mum's the word."),
      " We don't want any of our competitors to ",
      mark("get wind of"),
      " the idea and ",
      mark("rip it off!"),
    ],
  },
  {
    speaker: "Anne",
    line: [
      "Right. Let's meet again on Monday morning and discuss our ",
      mark("game plan"),
      " for ",
      mark("getting this project off the ground!"),
    ],
  },
];

const lessonTwoLines = [
  { speaker: "Juan", line: ["I'm really excited about the ", italic("launch"), " of our new line of fat-free Delicious Delight donuts."] },
  { speaker: "Diane", line: ["Me too. But before we go any further, we'd better make sure this ", italic("product line"), " is going to be profitable."] },
  { speaker: "Juan", line: ["I did some ", mark("back-of-the-envelope calculations."), " Take a look."] },
  { speaker: "Diane", line: ["I see you've estimated $2 million for new equipment. Where did you get that ", italic("figure"), "?"] },
  { speaker: "Juan", line: ["That's an ", mark("educated guess"), " based on some equipment I bought last year."] },
  { speaker: "Diane", line: ["You're going to need to ", italic("double-check"), " that. Using old estimates can get us ", mark("in hot water.")] },
  { speaker: "Juan", line: ["No problem. I'll get on the phone with the manufacturer in Dallas and get a price quote."] },
  { speaker: "Diane", line: ["Do you have a sense for ", italic("market demand"), "? We should get the ", italic("forecasts"), " from the marketing department before we ", mark("crunch the numbers.")] },
  { speaker: "Juan", line: ["We don't have those yet. Mary from marketing said maybe we'd have them next week."] },
  { speaker: "Diane", line: ["It just ", mark("blows my mind"), " when marketing people want us to ", mark("run numbers"), " and they don't bring us the information we need!"] },
  { speaker: "Juan", line: ["If we end up ", mark("in the red"), " on this project, it's going to be their ", mark("heads on the chopping block"), ", not ours. They're the ones with P&L responsibility!"] },
  { speaker: "Diane", line: ["Our CFO won't ", mark("give this project the green light"), " until he sees all the numbers. If it doesn't look like we'll make money or at least ", mark("break even"), ", he'll ", mark("pull the plug"), " on the project."] },
];

const lessonThreeLines = [
  { speaker: "Lisa", line: ["Ted would like to ", mark("run some ideas by"), " us for our new ", italic("ad campaign"), "."] },
  { speaker: "Ted", line: ["Please ", mark("keep an open mind."), " Remember that ", mark("nothing is set in stone"), " yet. We're still just ", mark("brainstorming."), ""] },
  { speaker: "Sam", line: ["I hope that doesn't mean we're about to hear a lot of ", mark("half-baked ideas!"), ""] },
  { speaker: "Ted", line: ["I think you're going to like this. Our idea is to use a black bear as our ", italic("mascot"), ". Our ", mark("tagline"), " can be: “Strong enough to satisfy a bear.”"] },
  { speaker: "Lisa", line: ["It would be great if people would ", italic("associate our brand with"), " a bear—strong and independent. That would really improve our ", italic("brand equity"), " [patrimônio líquido]."] },
  { speaker: "Sam", line: ["I don't want to ", mark("throw cold water on"), " your idea, but where did you get the idea for a bear?"] },
  { speaker: "Ted", line: ["Didn't you hear about that bear at the campground a couple of weeks ago? He entered a tent and drank two dozen Pacific beers! What a great ", italic("endorsement"), " for Pacific beer!"] },
  { speaker: "Lisa", line: ["I think we're ", mark("on the right track"), " with this campaign. The bear should ", mark("generate lots of buzz."), " Everybody will be talking about the bear who loves Pacific beer!"] },
  { speaker: "Ted", line: ["And here's the ", mark("icing on the cake:"), " He won't demand ", mark("an arm and a leg"), " to ", mark("plug our product."), " In fact, we can probably pay him in beer."] },
  { speaker: "Sam", line: ["Okay, you've ", mark("twisted my arm."), " Let's ", mark("run with the idea."), ""] },
  { speaker: "Ted", line: ["Great. I'll ", mark("flesh it out"), " some more and ", mark("touch base with"), " you in a couple of days."] },
];

const lessonFourLines = [
  { speaker: "Dan", line: ["We've decided to launch our new spring shoe on April 20th."] },
  { speaker: "Mike", line: ["We're still trying to ", mark("work out the kinks"), " in our manufacturing process. Our factory in China is having trouble with the soles."] },
  { speaker: "Dan", line: ["I know that, Mike. But you've still got three months. It should be plenty of time."] },
  { speaker: "Mike", line: ["It could take another six months to ", mark("fine-tune"), " our manufacturing process."] },
  { speaker: "Dan", line: ["Well, we don't have much time. ", mark("No ifs, ands, or buts,"), " we need to launch on April 20th."] },
  { speaker: "Mike", line: [mark("Just for the record,"), " I think we're ", mark("cutting it a little close."), " I recommend we launch on July 20th instead."] },
  { speaker: "Dan", line: ["We can't. We've already decided on the ", mark("tagline:"), " “Spring into spring with Swift's new spring shoe.”"] },
  { speaker: "Mike", line: ["It's time for a ", mark("reality check."), " I'm telling you we might not be ready by April 20th, and you're telling me we have to be because of ", mark("a tagline?"), ""] },
  { speaker: "Dan", line: ["Mike, now's the time to ", mark("step up to the plate"), " and ", mark("get the job done."), ""] },
  { speaker: "Mike", line: ["Well, I'm going to be ", mark("working down to the wire."), ""] },
  { speaker: "Dan", line: ["Just ", mark("do whatever it takes."), " Just make sure we've got a million pairs of shoes in inventory by the April 20th deadline."] },
  { speaker: "Mike", line: ["I'm going to have to run the factories ", mark("24/7."), " That's going to be a lot of overtime pay."] },
  { speaker: "Dan", line: [mark("At the end of the day,"), " a little extra expense doesn't matter. We just want those shoes ready by April 20th."] },
];

const lessonFiveLines = [
  { speaker: "Andy", line: ["My team has come up with a new strategy. We can't continue being ", mark("fast followers."), " We need to start developing our own ", mark("cutting-edge"), " technologies."] },
  { speaker: "Laura", line: ["Why? We've been ", mark("fast followers"), " for the past ten years. ", mark("Why mess with success?"), ""] },
  { speaker: "Andy", line: ["Success? ", mark("Get with the program."), " Our sales are way down. Our ", mark("cash cow,"), " the Model 8B, only sold 900 units last month!"] },
  { speaker: "Laura", line: ["I can understand why. That phone's a relic. It's been around for over three years. What about our new phones?"] },
  { speaker: "Andy", line: ["Our latest-model cell phone was a ", mark("real dog!"), " It sold only 20 percent of our sales forecast."] },
  { speaker: "Laura", line: ["Any idea why?"] },
  { speaker: "Andy", line: ["Product life cycles are much shorter now than before. New technologies are developed at a much faster rate."] },
  { speaker: "Laura", line: ["So what are we supposed to do?"] },
  { speaker: "Andy", line: ["We need to become much more innovative as a company. Instead of producing ", mark("me-too products,"), " we need to ", mark("leapfrog our competitors."), ""] },
  { speaker: "Laura", line: ["How do we do that?"] },
  { speaker: "Andy", line: [mark("For starters,"), " we need to ", mark("beef up"), " our R&D department. We need to develop differentiated products which we can sell ", mark("at a premium."), ""] },
  { speaker: "Laura", line: ["As a next step, let's ", mark("get buy-in"), " from our marketing and sales directors."] },
  { speaker: "Andy", line: ["We should get everyone ", mark("on the same page."), ""] },
];

const lessonSixLines = [
  { speaker: "Peter", line: ["Great news! We had a ", mark("record-breaking"), " quarter. We brought in revenues of $500,000."] },
  { speaker: "Linda", line: ["Wow, revenues really were ", mark("through the roof"), "!"] },
  { speaker: "Todd", line: ["That's great. ", mark("Kudos to"), " Linda! She deserves ", mark("a pat on the back"), ". The guerrilla marketing campaign she ", mark("dreamed up"), " was brilliant. She sent out e-mail to all of our customers asking them to e-mail a friend about our services. For each friend they e-mailed, they received a free gift."] },
  { speaker: "Peter", line: ["Linda, your campaign helped us ", mark("drum up a lot of business"), ". We ", mark("signed on 800 new customers"), "."] },
  { speaker: "Linda", line: ["I'm really glad my plan ", mark("panned out"), ". I thought it would, since everybody loves a ", mark("freebie"), "!"] },
  { speaker: "Todd", line: ["Linda, we can always count on you to ", mark("think outside the box"), "."] },
  { speaker: "Linda", line: [mark("For the record"), ", Peter helped me come up with the idea."] },
  { speaker: "Peter", line: ["Thanks for ", mark("sharing the credit"), ", Linda. But it was your idea."] },
  { speaker: "Todd", line: ["The important thing is that we're now giving our biggest competitor, U.S. Bank, a ", mark("run for their money"), "."] },
];

const lessonSevenLines = [
  { speaker: "Alex", line: ["We need to ", mark("face the music"), " here. We're ", mark("in deep trouble!"), " Sales are down by 50 percent versus last year."] },
  { speaker: "Pam", line: ["It looks like we're going to be ", mark("in the red"), " for the year ", mark("to the tune of"), " $1 million."] },
  { speaker: "Ron", line: [mark("No wonder."), " We're losing ", mark("market share"), " to Manhattan Beer."] },
  { speaker: "Alex", line: ["Why? We need to ", mark("get to the bottom of"), " this!"] },
  { speaker: "Pam", line: ["Every year they come up with new beers. They're really ", mark("on top of trends."), " For instance, last year they released a low-carb beer."] },
  { speaker: "Ron", line: ["No wonder they're ", mark("eating our lunch!"), " They're ", mark("cashing in on"), " the latest trends and bringing ", mark("great new products to market."), ""] },
  { speaker: "Pam", line: ["Meanwhile, we're ", mark("running in place."), " We need a new product line and new ideas for marketing."] },
  { speaker: "Alex", line: ["It's time to ", mark("clean house"), " and bring some ", mark("new blood"), " into this company."] },
  { speaker: "Ron", line: [mark("You took the words right out of my mouth!"), " We need some new people with fresh ideas."] },
];

const lessonEightLines = [
  { speaker: "Anna", line: ["We need to decide already whether or not we want to move our manufacturing from the United States to China. Jeff, have you made the final decision?"] },
  { speaker: "Jeff", line: ["There are ", mark("pros and cons"), " to moving it to China. I've been ", mark("back and forth"), " on this issue for months. I'm ", mark("of two minds."), ""] },
  { speaker: "Anna", line: ["Jeff, I know this is a ", mark("tough call,"), " but now is not the time to be ", mark("wishy-washy."), " We need to make a decision."] },
  { speaker: "Lynn", line: ["That's right, and I recommend we ", mark("bite the bullet"), " and move our operations to China."] },
  { speaker: "Anna", line: ["Or we could ", mark("test the waters"), " by moving 25 percent of our operations there."] },
  { speaker: "Lynn", line: ["Good idea. That would give us ", mark("the best of both worlds:"), " we could reduce our risk, while starting to enjoy some of the cost savings from lower-cost manufacturing."] },
  { speaker: "Jeff", line: ["I agree with you that we should ", mark("put a stake in the ground."), " Let's move a quarter of our operations to China."] },
  { speaker: "Lynn", line: [mark("Good call,"), " Jeff!"] },
  { speaker: "Jeff", line: ["I hope I don't ", mark("live to regret this decision."), ""] },
  { speaker: "Anna", line: ["You won't. ", mark("My gut tells me"), " we're doing the right thing."] },
];

const lessonNineLines = [
  { speaker: "John", line: ["We're disappointed with the website you designed for us. It's ", mark("a far cry from"), " what we were expecting."] },
  { speaker: "Kevin", line: ["I'm sorry you're not satisfied. We really ", mark("went all out"), " to make it a great site."] },
  { speaker: "John", line: ["Well, I'm not going to ", mark("mince words"), ", but you charged us a ", mark("pretty penny"), " and you didn't ", mark("deliver."), ""] },
  { speaker: "Kevin", line: ["Wow, I'm really surprised to hear you say that! We ", mark("pulled out all the stops."), ""] },
  { speaker: "John", line: ["Don't try to ", mark("pull the wool over my eyes."), " You promised that your best people would work on this project, but our website looks like it was designed by a summer intern!"] },
  { speaker: "Kevin", line: ["What exactly is the problem with the site?"] },
  { speaker: "John", line: [mark("Where to begin?"), " The shopping cart doesn't even work."] },
  { speaker: "Kevin", line: ["Really? Well, we'll ", mark("get right on that."), ""] },
  { speaker: "John", line: ["And you guys ", mark("messed around"), " forever getting the site done. You were three months behind schedule!"] },
  { speaker: "Kevin", line: ["I'm sorry about that. We were ", mark("swamped."), " Let me ", mark("make it up to you."), " We'll give you a 25 percent discount on the project."] },
];

const lessonTenLines = [
  { speaker: "Tanya", line: ["Let me ", mark("kick off"), " this meeting with some news. Our marketing department would like us to produce a new fragrance by the end of next month."] },
  { speaker: "John", line: ["Oh, brother.* We ", mark("need this extra work like a hole in the head!"), " What fragrance are they looking for?"] },
  { speaker: "Tanya", line: ["Mango."] },
  { speaker: "Andy", line: ["Mango? Are they ", mark("out of their minds?"), " Do they know how tough that is?"] },
  { speaker: "Tanya", line: ["Yeah, but I told them we'd ", mark("take a crack at it."), " If we ", mark("put our minds to it"), ", I know we can do it."] },
  { speaker: "Andy", line: ["I don't know. It's not going to be easy."] },
  { speaker: "Tanya", line: ["Let's ", mark("roll up our sleeves"), " and ", mark("give it our best shot."), " ", mark("Nothing ventured, nothing gained."), ""] },
  { speaker: "John", line: ["Well, Tanya, you certainly have a ", mark("can-do attitude!"), ""] },
  { speaker: "Tanya", line: ["Actually, this is ", mark("child's play"), " compared to what our CEO wants us to do by the end of the year. He wants us to come up with new, improved formulas for all 50 of our shampoos."] },
  { speaker: "Andy", line: ["What? How are we supposed to manage that? Sometimes I think the ", mark("bigwigs"), " at this company are ", mark("out of touch with reality!"), ""] },
];

const lessonElevenLines = [
  { speaker: "Greg", line: ["Our sales were down again last quarter."] },
  { speaker: "Donna", line: ["We've been ", mark("working our tails off"), " and our results are still lousy!"] },
  { speaker: "Greg", line: ["Maybe we should exit the trash bag business — just ", mark("call it quits!"), ""] },
  { speaker: "Stan", line: ["C'mon.* Let's not ", mark("throw in the towel"), " yet. ", mark("We've been down before, but we always come back fighting."), ""] },
  { speaker: "Donna", line: ["But this time ", mark("private-label products"), " are driving us out of business!"] },
  { speaker: "Stan", line: ["We've got a successful ", mark("track record."), " Everybody knows that we offer quality trash bags."] },
  { speaker: "Donna", line: ["That's true, but we can't just ", mark("rest on our laurels"), " forever."] },
  { speaker: "Stan", line: ["Well, I have a new idea that's going to ", mark("turn around our business."), " It's a new line of trash bags that smell like fresh fruits, such as apples and peaches."] },
  { speaker: "Greg", line: ["That sounds like a great idea. I'm ready to ", mark("roll up my sleeves"), " and get ", mark("down to business!"), ""] },
  { speaker: "Stan", line: ["I appreciate your ", mark("team spirit!"), " Donna, are you ", mark("on board"), " too?"] },
  { speaker: "Donna", line: ["Sure. ", mark("Count me in."), ""] },
  { speaker: "Stan", line: ["Great. Let's get everybody else in the company excited about this plan too. I'll count on you two to ", mark("rally the troops."), ""] },
];

const lessonTwelveLines = [
  { speaker: "Julia", line: ["Let's ", mark("get down to business."), " We need to ", mark("cover a lot of ground."), " Our first ", mark("agenda item"), " is to figure out how we're going to respond to all the complaints we've been getting about our new website."] },
  { speaker: "Larry", line: ["Just so we're all ", mark("on the same page,"), " please give us an overview of the problem."] },
  { speaker: "Julia", line: [mark("In a nutshell,"), " our customers are complaining that it's very difficult to place orders through the new website."] },
  { speaker: "Sally", line: ["I think we ", mark("jumped the gun"), " by not conducting focus groups with our customers before we launched our new website."] },
  { speaker: "Larry", line: ["More focus groups? ", mark("Every time I turn around"), " we're running focus groups! It's ", mark("gotten out of hand."), ""] },
  { speaker: "Sally", line: [mark("I beg to differ."), " Focus groups are very important. They help us better understand our customer."] },
  { speaker: "Julia", line: ["Well, clearly you two ", mark("don't see eye-to-eye"), " on this issue."] },
  { speaker: "Larry", line: ["Ha! ", mark("That's putting it lightly!"), " Focus groups are a waste of time and…"] },
  { speaker: "Julia", line: ["Excuse me, let's not ", mark("get off track"), " here. Does anybody else want to ", mark("weigh in on the issue at hand?"), ""] },
  { speaker: "Carl", line: ["If I can ", mark("put in my two cents,"), " I agree with Sally that focus groups would've been a good idea."] },
  { speaker: "Julia", line: ["Well, enough about focus groups for now. Let's move on to our next agenda item — planning for our ", mark("company offsite."), ""] },
  { speaker: "Larry", line: ["Wait, I'm not finished talking about the website!"] },
  { speaker: "Julia", line: ["We can ", mark("circle back to"), " that at the end of our meeting if we have time. I want to keep us on schedule since I know many of us have another meeting at 11 o'clock."] },
];

const lessonThirteenLines = [
  { speaker: "Chris", line: ["Todd, we got our shipment of wood yesterday. We're ", mark("short by"), " 18 tons."] },
  { speaker: "Todd", line: ["Our wood supplier must've made a mistake. ", mark("I could've sworn that"), " I ordered the right amount."] },
  { speaker: "Chris", line: ["You'd better go back and double-check your order."] },
  { speaker: "Todd", line: ["Oops, you're right. I accidentally ordered two tons instead of twenty. ", mark("No big deal."), " I'll just put in another order."] },
  { speaker: "Chris", line: ["When filling out order forms, you need to ", mark("dot your i's and cross your t's."), " You shouldn't be making careless mistakes like this."] },
  { speaker: "Todd", line: ["I just forgot to add a zero after the two. Don't ", mark("make a mountain out of a molehill."), " No need to ", mark("blow things out of proportion."), ""] },
  { speaker: "Chris", line: ["This is very serious. Now we won't have enough wood to finish the furniture order we got from La-Z Boy."] },
  { speaker: "Todd", line: ["Okay, sorry I ", mark("dropped the ball."), ""] },
  { speaker: "Chris", line: ["Todd, this may be a ", mark("bitter pill to swallow,"), " but your work lately hasn't been ", mark("up to scratch."), " You've really been ", mark("asleep at the wheel!"), ""] },
];

const lessonFourteenLines = [
  { speaker: "Bob", line: ["Kurt, I've got great news for you. We're ", mark("pushing the envelope"), " and launching our new website three weeks ahead of schedule."] },
  { speaker: "Kurt", line: ["Wow, Bob, that's a first for this company! How did you ", mark("pull that off?"), ""] },
  { speaker: "Bob", line: ["I ", mark("burned the midnight oil"), " over these past few weeks. I ", mark("worked my tail off."), " Sometimes things would get tough, but I always ", mark("kept my eye on the prize."), ""] },
  { speaker: "Tara", line: ["Let's not forget about Jim in technical support. He really ", mark("hunkered down"), " these past few days, working ", mark("around the clock."), ""] },
  { speaker: "Bob", line: ["Yeah, Jim's a real ", mark("team player."), " He helped a lot."] },
  { speaker: "Kurt", line: ["Well, that's not surprising. Jim's always ready to ", mark("pitch in."), ""] },
  { speaker: "Bob", line: ["Of course, you deserve ", mark("a pat on the back"), " too, Kurt. None of this would've been possible without your leadership."] },
  { speaker: "Kurt", line: [mark("All in a day's work."), " Providing great leadership ", mark("comes with the territory."), " Well, time for some ", mark("R&R."), " I'm off to Florida to play golf for a few days. See you next week!"] },
];

const lessonFifteenLines = [
  { speaker: "Max", line: ["I can't believe you two bought these fake antique necklaces! Didn't you examine them before ", mark("shelling out"), " 10 grand?*"] },
  { speaker: "Rick", line: ["Yeah, I thought they were fake, but I let Ellen ", mark("talk me into"), " buying them."] },
  { speaker: "Ellen", line: ["What? ", mark("I can't believe my ears!"), " You thought they were real. Now you're just trying to ", mark("cover yourself!"), ""] },
  { speaker: "Rick", line: ["I don't want to be the ", mark("fall guy"), " here, Ellen. You were the one who looked at them under a magnifying glass."] },
  { speaker: "Ellen", line: [mark("For the record,"), " you were the one going on about how you ", mark("“struck gold”"), " right after the woman left the shop!"] },
  { speaker: "Rick", line: ["I don't remember saying that. Stop trying to ", mark("pass the buck."), " Just ", mark("step up to the plate"), " and admit your mistake!"] },
  { speaker: "Ellen", line: ["Right, while you ", mark("wash your hands"), " of the whole thing. ", mark("Dream on!"), ""] },
  { speaker: "Max", line: ["Let's stop ", mark("pointing fingers at each other."), " We need to ", mark("track down that woman"), " and get the money back!"] },
];

const lessonSixteenLines = [
  { speaker: "Kathy", line: ["We're going to be ", mark("in the red"), " again this year."] },
  { speaker: "Joel", line: ["I think we should ", mark("cut back"), " on employee health benefits. We could ", mark("save a bundle."), ""] },
  { speaker: "Kathy", line: ["True, it might help the ", mark("bottom line,"), " but our employees would be really unhappy. I would only recommend it as a ", mark("last resort."), ""] },
  { speaker: "Joel", line: ["Well, we need to do some ", mark("belt-tightening."), " We can either have a salary freeze or we can cut back on their health benefits. I think I've chosen the ", mark("lesser of two evils."), ""] },
  { speaker: "Kathy", line: ["Another salary freeze is ", mark("out of the question."), " All our best employees will quit."] },
  { speaker: "Joel", line: ["I'm caught ", mark("between a rock and a hard place."), " I have to cut costs."] },
  { speaker: "Kathy", line: ["Do you really? I don't think cutting costs is ", mark("the name of the game."), " I think the secret is figuring out how to increase our sales."] },
  { speaker: "Joel", line: ["How do you suggest we ", mark("pull that off?"), ""] },
  { speaker: "Kathy", line: ["Let's meet with the other vice presidents and ", mark("bat around some ideas."), ""] },
  { speaker: "Joel", line: ["We can talk until ", mark("we're blue in the face."), " We need to take action now."] },
  { speaker: "Kathy", line: ["It's clear that you and I ", mark("don't see eye-to-eye."), " For now, ", mark("let's just agree to disagree."), ""] },
];

const lessonSeventeenLines = [
  { speaker: "Doug", line: ["Good morning, guys. How's it going?"] },
  { speaker: "Joe", line: ["Lousy. You were supposed to be here at 8 a.m. It's now 11 o'clock. ", mark("What's the deal?"), ""] },
  { speaker: "Doug", line: ["Sorry about that. My alarm didn't go off this morning."] },
  { speaker: "Kara", line: ["You've been late every day this week!"] },
  { speaker: "Doug", line: ["I ", mark("had a rough night"), " last night. My girlfriend Liz ", mark("dumped me"), " and told me she's in love with my best friend!"] },
  { speaker: "Kara", line: ["Oh please, ", mark("spare us the sob story!"), ""] },
  { speaker: "Joe", line: ["I'm ", mark("sick and tired"), " of your excuses. You need to start ", mark("pulling your weight"), " around here."] },
  { speaker: "Doug", line: ["Hey, ", mark("cut me some slack!"), " My life is a mess right now."] },
  { speaker: "Kara", line: ["Doug, I'm trying to ", mark("run a tight ship."), " I can't continue ", mark("turning a blind eye"), " to the fact that you're always late. ", mark("Shape up or ship out!"), ""] },
  { speaker: "Doug", line: ["I promise tomorrow I'll be here at 8 a.m. ", mark("on the dot."), ""] },
  { line: ["Telling Somebody Off, Part 2: The Next Day…"] },
  { speaker: "Doug", line: ["Sorry, I'm ", mark("running behind."), " I had to…"] },
  { speaker: "Kara", line: [mark("Don't waste your breath!"), " You're three hours late again."] },
  { speaker: "Doug", line: ["But my car wouldn't start, my mechanic is on vacation in Florida, and then I…"] },
  { speaker: "Kara", line: ["Today was the ", mark("last straw."), " You're fired!"] },
  { speaker: "Doug", line: ["That's fine. I was miserable working for a ", mark("slave driver"), " like you anyway!"] },
  { speaker: "Kara", line: ["Don't ", mark("burn your bridges."), " You may need me later as a reference.*"] },
];

const lessonEighteenLines = [
  { speaker: "Cindy", line: ["Did you hear ", mark("the latest dirt?"), ""] },
  { speaker: "Steve", line: ["Of course not. I'm totally ", mark("out of the loop!"), " I'm always the last one to find out everything."] },
  { speaker: "Cindy", line: [mark("According to the rumor mill,"), " Bill Swing ", mark("made a pass at"), " Laura Teller, the new marketing manager. Now she's threatening to sue him for sexual harassment.*"] },
  { speaker: "Steve", line: ["Sounds like Bill's ", mark("up to his old tricks"), " again. He's always ", mark("on the make."), " Last year, Paula Reynolds accused him of pinching her…"] },
  { speaker: "Cindy", line: ["I remember that. Too bad Paula quit before they could ", mark("get to the bottom of it."), ""] },
  { speaker: "Steve", line: ["Two years ago he ", mark("got nailed"), " for organizing a company offsite* to a strip joint*!"] },
  { speaker: "Cindy", line: ["Oh, that really ", mark("takes the cake."), " That's so ", mark("un-PC!"), ""] },
  { speaker: "Steve", line: ["Bill is definitely not ", mark("politically correct!"), ""] },
  { speaker: "Cindy", line: [mark("What goes around comes around. One day, he'll get his."), ""] },
];

const lessonNineteenLines = [
  { speaker: "Mary", line: ["How did the meeting with Joe go?"] },
  { speaker: "Justin", line: ["Lousy. He was ", mark("in a snit."), ""] },
  { speaker: "Mary", line: ["Why?"] },
  { speaker: "Justin", line: ["He ", mark("got bent out of shape"), " over the fact that I didn't bring him the sales forecasts. He ", mark("gave me an earful"), " about how people from the marketing department never bring him the right information."] },
  { speaker: "Mary", line: ["Don't worry about him. Don't let him ", mark("push your buttons."), ""] },
  { speaker: "Justin", line: ["I'll just have to ", mark("steer clear of him"), " now that I know he's such a ", mark("hot-head."), ""] },
  { speaker: "Mary", line: ["He's ", mark("not a bad guy,"), " but ", mark("he does have issues."), " And he's got a ", mark("chip on his shoulder"), " when it comes to marketing people."] },
  { speaker: "Justin", line: ["Joe's always ", mark("on his high horse"), " about something."] },
  { speaker: "Mary", line: ["You'll just have to ", mark("grin and bear it."), " We've got a lot of personalities around here.* You'll just have to learn to work with them."] },
  { speaker: "Justin", line: ["Well, I don't know how I'm going to be able to work with him. He ", mark("gets under my skin."), ""] },
];

const lessonTwentyLines = [
  { speaker: "Tony", line: ["I was just in a meeting with Mitch and Bill. Mitch said to Bill, “Bill, we're so lucky to have you as our boss. You're such a great leader!”"] },
  { speaker: "Karen", line: ["He's ", mark("up to his old tricks."), " He was trying to earn ", mark("brownie points"), " with Bill."] },
  { speaker: "Nancy", line: ["Mitch has the reputation of being a ", mark("yes man"), " and a ", mark("brown noser."), " He's an expert at ", mark("kissing up."), ""] },
  { speaker: "Tony", line: ["Then he said to Bill, “Other people here don't appreciate you like I do!” ", mark("Talk about trying to butter up the boss!"), ""] },
  { speaker: "Nancy", line: ["Yeah, and this time ", mark("at our expense!"), " He's just ", mark("out for himself."), ""] },
  { speaker: "Karen", line: ["Well, it's a ", mark("dog-eat-dog world."), " Obviously, he thinks this is the way to ", mark("get ahead."), ""] },
  { speaker: "Tony", line: ["I guess it's one way to ", mark("climb the corporate ladder."), " But I could never ", mark("look at myself in the mirror"), " after behaving that way."] },
  { speaker: "Karen", line: ["I'm not good at ", mark("kissing up"), " either. ", mark("No wonder"), " I've been in the same lousy position for 10 years!"] },
  { line: ["Talking About a Brown Noser, Part 2: When You're Overheard"] },
  { speaker: "Mitch", line: ["Hey guys. Don't you know it's rude to ", mark("talk behind someone's back!"), " I just overheard your entire conversation!"] },
  { speaker: "Tony", line: ["Sorry, Mitch. We didn't mean to offend you."] },
  { speaker: "Mitch", line: ["Well, ", mark("the walls have ears."), " ", mark("Think twice"), " before you insult me again!"] },
  { speaker: "Nancy", line: [mark("Chill out!"), " We were talking about a different Mitch, not you."] },
  { speaker: "Tony", line: ["That's right. We were talking about Mitch Schneider, over in the accounting department."] },
  { speaker: "Mitch", line: [mark("Likely story. I wasn't born yesterday!"), ""] },
];

const lessonTwentyOneLines = [
  { speaker: "Dan", line: ["Mary, why weren't you at the staff meeting this morning? We all missed you."] },
  { speaker: "Mary", line: ["Oh, it completely ", mark("slipped my mind."), ""] },
  { speaker: "Dan", line: ["How could you forget? These meetings are not optional."] },
  { speaker: "Mary", line: ["I'm feeling so ", mark("stressed out"), " these days. Sometimes ", mark("I don't know whether I'm coming or going!"), ""] },
  { speaker: "Dan", line: ["Well, it is ", mark("crunch time"), " right now. Things will ", mark("settle down"), " after tax season is over."] },
  { speaker: "Mary", line: ["I hope so. I am ", mark("wiped out"), " after putting in 60-hour weeks at the office and taking care of my five kids and sick mother."] },
  { speaker: "Dan", line: ["Wow, you really do ", mark("have a lot on your plate."), ""] },
  { speaker: "Mary", line: ["Yeah, I can hardly ", mark("keep my head above water."), " Maybe I should ", mark("scale back my hours."), ""] },
  { speaker: "Dan", line: ["Just ", mark("hang in there"), " a little longer. After April 15th, it'll quiet down around here. For now, ", mark("keep your nose to the grindstone"), " and focus on getting your most important work done."] },
  { speaker: "Mary", line: ["You're right. I need to remember the ", mark("80/20 rule."), " I get 80 percent of my results from just 20 percent of my activities. Now if I could only figure out what that 20 percent is!"] },
];

const lessonTwentyTwoLines = [
  { speaker: "Maria", line: ["Hi, Scott, it's Maria."] },
  { speaker: "Scott", line: ["Hey Maria. ", mark("What's up?"), ""] },
  { speaker: "Maria", line: ["I'm not feeling well today."] },
  { speaker: "Scott", line: ["Oh yeah? What's wrong?"] },
  { speaker: "Maria", line: [mark("My stomach is killing me."), " Maybe it's the sushi I ate last night. I'm ", mark("as sick as a dog."), ""] },
  { speaker: "Scott", line: ["Sara ", mark("called in sick"), " today also. And Kurt just told me he was feeling ", mark("under the weather"), " today. I'm ", mark("not feeling so hot"), " myself. Maybe ", mark("there's something going around."), ""] },
  { speaker: "Maria", line: ["Well, I hope you don't catch it too."] },
  { speaker: "Scott", line: ["I ", mark("can't afford to"), " get sick. I'm up to my ears in work."] },
  { speaker: "Maria", line: ["I should be back in the office tomorrow."] },
  { speaker: "Scott", line: ["Don't worry about that. You should stay home until you feel better."] },
  { speaker: "Maria", line: ["I'll try to work from home this afternoon if I feel better."] },
  { speaker: "Scott", line: [mark("Take it easy"), " today. We want you back ", mark("in tip-top shape."), ""] },
];

const lessonTwentyThreeLines = [
  { speaker: "Ivan", line: ["I'm here to see about getting a $100,000 loan to start a Coffee Shack franchise."] },
  { speaker: "Gina", line: ["I see from your application that you've already got two franchise businesses ", mark("under your belt"), " — both Subway sandwich shops. That's certainly ", mark("nothing to sneeze at."), ""] },
  { speaker: "Ivan", line: ["Thank you. Now that I ", mark("know the franchise business inside and out,"), " I'd like to expand."] },
  { speaker: "Gina", line: ["Well, Subway is a sandwich shop. Now you're talking about a coffee house. That's an entirely ", mark("different animal."), ""] },
  { speaker: "Ivan", line: ["Sure, there may be a thing or two to learn, but it should be more or less a ", mark("no-brainer."), ""] },
  { speaker: "Gina", line: ["I see from your business plan that you're basing all of your profit estimates on the profits you made from one of your Subway shops. I don't think that's right. You're ", mark("comparing apples to oranges."), ""] },
  { speaker: "Ivan", line: ["Apples? Oranges? I didn't know we were talking about fruit now. Maybe I should open up a fruit smoothie shop instead!"] },
  { speaker: "Gina", line: ["Ha ha. Well, at least you haven't lost your sense of humor!"] },
  { speaker: "Ivan", line: ["Well, seriously, what do you want me to do?"] },
  { speaker: "Gina", line: ["Go ", mark("back to the drawing board."), " Make some new calculations based on selling coffee, not sandwiches. Then the loan will be ", mark("in the bag."), ""] },
  { speaker: "Ivan", line: ["If you're going to make me ", mark("jump through hoops"), " to get this loan, I'll just have to take my business to a different bank."] },
  { speaker: "Gina", line: ["You're ", mark("missing the point"), " here. I'm not trying to make your life difficult. I'm just suggesting you ", mark("beef up"), " your business plan so my boss will approve your loan."] },
  { speaker: "Ivan", line: ["Well, in that case, maybe I will ", mark("go back to the drawing board."), ""] },
];

const lessonTwentyFourLines = [
  { speaker: "Jack", line: ["My store is having a big sale next week. I'd like to buy a small advertisement in the Sunday edition of the Newport Times. How much would a quarter page cost?"] },
  { speaker: "Dave", line: ["A quarter page ad costs $250. What you really need is a full page ad if you want to ", mark("make a splash."), " That would be $900. I better reserve that for you before we run out of space."] },
  { speaker: "Jack", line: ["Don't try to give me ", mark("the hard sell."), " Nine hundred bucks would ", mark("break my budget!"), ""] },
  { speaker: "Dave", line: ["Okay, so we're looking at a quarter page. For another $200 I can make it a full color ad. Color would give you ", mark("more bang for the buck."), ""] },
  { speaker: "Jack", line: ["Of course color is better than black and white. That's a ", mark("no-brainer!"), " Can you ", mark("throw that in at no extra charge?"), ""] },
  { speaker: "Dave", line: ["Sorry, ", mark("no can do."), ""] },
  { speaker: "Jack", line: ["Your competitor, the Newport Bulletin, is offering me a quarter page color ad for $300. That's very attractive since I'm ", mark("on a tight budget."), ""] },
  { speaker: "Dave", line: ["The Newport Bulletin? This is ", mark("off the record,"), " but you really don't want to advertise in that rag! Nobody reads it."] },
  { speaker: "Jack", line: ["Here's my final offer: I'll take a quarter page color ad in your paper for $350 and not a penny more."] },
  { speaker: "Dave", line: ["How about we find a ", mark("happy medium."), " I'll give it to you for $400."] },
  { speaker: "Jack", line: ["Please don't try to ", mark("nickel-and-dime"), " me. I'm ", mark("standing firm"), " at $350."] },
  { speaker: "Dave", line: ["Okay, I don't want to spend all afternoon arguing. ", mark("It's a deal."), ""] },
];

const lessonTwentyFiveLines = [
  { speaker: "Sara", line: ["During the first half of the year, your performance was ", mark("not so hot."), " But then you ", mark("did a 180"), " and you started doing great."] },
  { speaker: "John", line: ["Really? I was that bad at the beginning of year?"] },
  { speaker: "Sara", line: ["I think it was because you were new here, and it took you a while to ", mark("get up to speed."), " The most important thing is that you're now a valuable member of the team."] },
  { speaker: "John", line: ["That's nice to hear."] },
  { speaker: "Sara", line: ["You've ", mark("got a knack for"), " sales. These past few months, I've also seen your communication skills improve. You're great at ", mark("keeping people in the loop"), " and making sure we all know what's going on with your accounts."] },
  { speaker: "John", line: ["Thanks. I do ", mark("pride myself on"), " my communication skills."] },
  { speaker: "Sara", line: ["Of course, you still have some ", mark("opportunity areas"), " that I'd like you to work on, starting with your analytical skills. Sometimes I can't ", mark("make heads or tails of"), " your sales forecasts."] },
  { speaker: "John", line: ["How would you suggest I work on that?"] },
  { speaker: "Sara", line: ["I'm going to send you to a training class. Then we'll ", mark("take it from there."), ""] },
  { speaker: "John", line: ["Great. I love attending classes!"] },
  { speaker: "Sara", line: ["We'll be raising your salary by 5 percent to $60,000. And, if you really go ", mark("beyond the call of duty,"), " you'll also receive a bonus at the end of the year."] },
];

const lessonTwentySixLines = [
  { speaker: "Kurt", line: ["Steve, your performance over the past year has been excellent. You've only been here a year, but you ", mark("hit the ground running."), ""] },
  { speaker: "Steve", line: ["Thank you. It's nice to be appreciated!"] },
  { speaker: "Kurt", line: ["You're an ", mark("“A” player"), " here — a real star. You've really ", mark("earned your keep."), " You're great at motivating your employees, and you're always willing to ", mark("go the extra mile."), ""] },
  { speaker: "Steve", line: ["Thanks, Kurt. I really enjoy my work here."] },
  { speaker: "Kurt", line: ["I'm going to ", mark("take you into my confidence."), " Steve, this past year has been really challenging. Everybody hasn't ", mark("made the grade."), ""] },
  { speaker: "Steve", line: ["Right. I heard that Dan is going to be ", mark("given his walking papers."), ""] },
  { speaker: "Kurt", line: ["Yes, he'll be ", mark("leaving us."), " I'll be ", mark("breaking the news"), " to him this afternoon. But the good news is that I'm promoting you to marketing director."] },
  { speaker: "Steve", line: ["Wow, that is good news. Thank you!"] },
  { speaker: "Kurt", line: ["No need to thank me. You're a real ", mark("go-getter,"), " and you earned it. The new position comes with a 10 percent raise and several perks*, including an extra week of vacation."] },
  { speaker: "Steve", line: ["Will I get a company car too?"] },
  { speaker: "Kurt", line: [mark("Don't push your luck."), " But if you ", mark("play your cards right,"), " maybe in a few years. Ten years ", mark("down the road,"), " I can even see you in a ", mark("corner office."), ""] },
  { speaker: "Steve", line: ["Thanks, Kurt."] },
  { speaker: "Kurt", line: ["No, Steve, thank you. ", mark("Keep up the good work!"), ""] },
];

const lessonTwentySevenLines = [
  { speaker: "Kurt", line: ["Dan, ", mark("your work has slipped."), " You've been here for 15 years, and I think you're just ", mark("burned out."), ""] },
  { speaker: "Dan", line: ["What are you talking about? I'm ", mark("at the top of my game."), " I just managed our biggest project in years."] },
  { speaker: "Kurt", line: ["You can't ", mark("take credit for"), " that. You ", mark("didn't lift a finger"), " on that project. You were on vacation in Hawaii for three weeks while Steve and Sally were doing all the work."] },
  { speaker: "Dan", line: ["I'm not good at ", mark("reading between the lines."), " Please just ", mark("cut to the chase."), " What are you trying to say?"] },
  { speaker: "Kurt", line: ["Dan, Swift Shoes is downsizing. This is really difficult, but we're going to have to ", mark("let you go."), ""] },
  { speaker: "Dan", line: ["What? I helped ", mark("build this company from the ground up!"), " You can't fire me now."] },
  { speaker: "Kurt", line: ["I don't want to, but ", mark("my hands are tied."), " Our president has told me to ", mark("reduce headcount"), " by 50 percent."] },
  { speaker: "Dan", line: ["I thought you and I were friends, but ", mark("when push comes to shove,"), " I guess our friendship isn't worth anything."] },
  { speaker: "Kurt", line: ["Of course we're still friends, but business is business."] },
  { speaker: "Dan", line: ["I don't agree with that. I would never fire a friend…after all those times Kathleen and I invited you and Donna to dinner at our home!"] },
  { speaker: "Kurt", line: ["Dan, I want you to leave Swift Shoes on friendly terms. ", mark("No hard feelings."), " ", mark("To soften the blow,"), " we're going to give you a generous severance package.*"] },
];

const lessonTwentyEightLines = [
  { speaker: "Donna", line: ["Tell me about your most recent work experience."] },
  { speaker: "Marina", line: ["Right now I'm ", mark("between jobs."), " In my last position, I was a marketing associate at Comtek International. I was there for two and a half years."] },
  { speaker: "Donna", line: ["I know I've heard of them, but I'm ", mark("drawing a blank"), " right now. What do they do?"] },
  { speaker: "Marina", line: ["They produced international trade fairs. They were ", mark("bought out"), " last month by a much larger company and all of us were ", mark("let go."), ""] },
  { speaker: "Donna", line: ["I see from your résumé that you also worked in sales for the company."] },
  { speaker: "Marina", line: ["Yes, that's right. It was a small company, so I ", mark("wore many hats."), " It was very exciting."] },
  { speaker: "Donna", line: ["What are you looking for in a job?"] },
  { speaker: "Marina", line: ["Well, I'm a real ", mark("people person,"), " so I would like a position where I have lots of interaction with different people."] },
  { speaker: "Donna", line: ["Describe your ideal boss."] },
  { speaker: "Marina", line: ["I work well with all different types of people. But I guess my ideal boss would be hands-off. I prefer to work independently and not to be ", mark("micro-managed."), ""] },
  { speaker: "Donna", line: ["Tell me about a time when you had to ", mark("think outside the box"), " in your work."] },
  { speaker: "Marina", line: ["When I was at Comtek, we didn't have any money to buy advertising. I ", mark("put in place"), " a program offering magazines a stand at the trade show in exchange for an advertisement in the magazine."] },
  { speaker: "Donna", line: ["That sounds like a good idea! Tell me, what ", mark("sparked your interest"), " in our sales position?"] },
  { speaker: "Marina", line: ["I noticed from your job description that it requires a lot of interaction with the marketing department. I am very interested in marketing, so I thought this would be a good ", mark("stepping stone"), " to a marketing position."] },
  { speaker: "Donna", line: ["Yes, this would be a good way to ", mark("get your foot in the door"), " of the marketing department."] },
];

const lessonTwentyNineLines = [
  { speaker: "Nick", line: ["I see from your résumé that you're ", mark("running your own show"), " as the owner of OldOfficeChair.com."] },
  { speaker: "Sam", line: ["That's right. I've ", mark("carved out a niche"), " selling used office chairs over the Internet."] },
  { speaker: "Nick", line: ["That sounds like a great business. Sam, I was ", mark("making money hand over fist"), " after the dot-com bust.* Companies were ", mark("going belly up"), " every day, and I ", mark("snapped up"), " all their chairs ", mark("for a song."), " But these days it's becoming harder and harder to find used chairs."] },
  { speaker: "Nick", line: ["Wouldn't you rather continue working for yourself?"] },
  { speaker: "Sam", line: ["No, I'm tired of working for myself."] },
  { speaker: "Nick", line: ["I can ", mark("see the writing on the wall:"), " you'll ", mark("jump ship"), " when you think up another good business idea."] },
  { speaker: "Sam", line: ["No, I won't. I'd always wanted to be an entrepreneur, but I ", mark("got that out of my system."), " I realize now that ", mark("it's not all it's cracked up to be."), ""] },
  { speaker: "Nick", line: ["It certainly isn't. You work really hard and you're just as likely to ", mark("strike out"), " as you are to ", mark("strike it rich."), ""] },
  { speaker: "Sam", line: ["Tell me about it! My best friend invested all his money in starting a company. He ended up ", mark("losing his shirt!"), ""] },
  { speaker: "Nick", line: ["Right, we all know people like that…One final point about the position. As you know, this is a large corporation. Are you sure you wouldn't be happier at a ", mark("start-up?"), ""] },
  { speaker: "Sam", line: [mark("Start-ups"), " are exciting, but at this point in my life, I'm looking for stability over excitement. I've got four kids at home, and they like to eat!"] },
  { speaker: "Nick", line: [mark("I hear what you're saying."), " We could use somebody around here who thinks like an entrepreneur. If you're someone who can ", mark("take the ball and run with it,"), " you'd be a great addition."] },
];

const lessonThirtyLines = [
  { speaker: "Donna", line: ["Marina, it's Donna Harris from American Steel Enterprises. I've got great news. We'd like to ", mark("make you an offer."), ""] },
  { speaker: "Marina", line: ["That's fantastic!"] },
  { speaker: "Donna", line: ["Our HR department will go over the ", mark("nitty-gritty"), " of the offer with you, but let me give you ", mark("the big picture"), " now. The base salary* will be $45,000."] },
  { speaker: "Marina", line: ["I'm really excited about this opportunity. I should mention that I'm ", mark("weighing another offer"), " with a higher base salary. ", mark("Is there any room to negotiate?"), ""] },
  { speaker: "Donna", line: ["What did you ", mark("have in mind?"), ""] },
  { speaker: "Marina", line: ["Well, my other offer is for $50,000. Can you match it?"] },
  { speaker: "Donna", line: ["That's ", mark("out of our range."), " Let's ", mark("split the difference."), " We'll go up to $47,500."] },
  { speaker: "Marina", line: ["Can we say $48,000?"] },
  { speaker: "Donna", line: ["No, I'm afraid not. Our final offer is $47,500."] },
  { speaker: "Marina", line: ["This sounds good, but I'd like to ", mark("sleep on it."), " Can I call you back tomorrow?"] },
  { speaker: "Donna", line: ["Yes, but please ", mark("touch base with"), " me ", mark("first thing in the morning"), " so we can ", mark("get the ball rolling."), " We've got several other candidates interested in the position."] },
  { line: ["(The Next Day)"] },
  { speaker: "Marina", line: ["Donna, I've had a chance to ", mark("review your offer."), " I'm going to ", mark("stand my ground."), " To accept your offer, I really need $48,000."] },
  { speaker: "Donna", line: ["Marina, you ", mark("drive a hard bargain!"), " But, okay, I think that can be arranged. Can you start on Monday, 9 a.m.?"] },
  { speaker: "Marina", line: ["That'll be perfect. See you then!"] },
];

export default function BusinessExpression() {
  const navigate = useNavigate();
  const { lesson } = useParams();

  if (!["lesson-1", "lesson-2", "lesson-3", "lesson-4", "lesson-5", "lesson-6", "lesson-7", "lesson-8", "lesson-9", "lesson-10", "lesson-11", "lesson-12", "lesson-13", "lesson-14", "lesson-15", "lesson-16", "lesson-17", "lesson-18", "lesson-19", "lesson-20", "lesson-21", "lesson-22", "lesson-23", "lesson-24", "lesson-25", "lesson-26", "lesson-27", "lesson-28", "lesson-29", "lesson-30"].includes(lesson ?? "")) {
    return <Navigate to="/expressions/business" replace />;
  }

  const isLessonOne = lesson === "lesson-1";
  const isLessonTwo = lesson === "lesson-2";
  const isLessonThree = lesson === "lesson-3";
  const isLessonFour = lesson === "lesson-4";
  const isLessonFive = lesson === "lesson-5";
  const isLessonSix = lesson === "lesson-6";
  const isLessonSeven = lesson === "lesson-7";
  const isLessonEight = lesson === "lesson-8";
  const isLessonNine = lesson === "lesson-9";
  const isLessonTen = lesson === "lesson-10";
  const isLessonEleven = lesson === "lesson-11";
  const isLessonTwelve = lesson === "lesson-12";
  const isLessonThirteen = lesson === "lesson-13";
  const isLessonFourteen = lesson === "lesson-14";
  const isLessonFifteen = lesson === "lesson-15";
  const isLessonSixteen = lesson === "lesson-16";
  const isLessonSeventeen = lesson === "lesson-17";
  const isLessonEighteen = lesson === "lesson-18";
  const isLessonNineteen = lesson === "lesson-19";
  const isLessonTwenty = lesson === "lesson-20";
  const isLessonTwentyOne = lesson === "lesson-21";
  const isLessonTwentyTwo = lesson === "lesson-22";
  const isLessonTwentyThree = lesson === "lesson-23";
  const isLessonTwentyFour = lesson === "lesson-24";
  const isLessonTwentyFive = lesson === "lesson-25";
  const isLessonTwentySix = lesson === "lesson-26";
  const isLessonTwentySeven = lesson === "lesson-27";
  const isLessonTwentyEight = lesson === "lesson-28";
  const isLessonTwentyNine = lesson === "lesson-29";
  const isLessonThirty = lesson === "lesson-30";
  const lessonNumber = isLessonThirty ? 30 : isLessonTwentyNine ? 29 : isLessonTwentyEight ? 28 : isLessonTwentySeven ? 27 : isLessonTwentySix ? 26 : isLessonTwentyFive ? 25 : isLessonTwentyFour ? 24 : isLessonTwentyThree ? 23 : isLessonTwentyTwo ? 22 : isLessonTwentyOne ? 21 : isLessonTwenty ? 20 : isLessonNineteen ? 19 : isLessonEighteen ? 18 : isLessonSeventeen ? 17 : isLessonSixteen ? 16 : isLessonFifteen ? 15 : isLessonFourteen ? 14 : isLessonThirteen ? 13 : isLessonTwelve ? 12 : isLessonEleven ? 11 : isLessonTen ? 10 : isLessonNine ? 9 : isLessonEight ? 8 : isLessonSeven ? 7 : isLessonSix ? 6 : isLessonFive ? 5 : isLessonFour ? 4 : isLessonThree ? 3 : isLessonTwo ? 2 : 1;
  const title = isLessonThirty
    ? "Negotiating a Salary Offer"
    : isLessonTwentyNine
    ? "Job Interview 2"
    : isLessonTwentyEight
    ? "Job Interview 1"
    : isLessonTwentySeven
    ? "Firing Somebody"
    : isLessonTwentySix
    ? "Promoting an Employee"
    : isLessonTwentyFive
    ? "Conducting a Performance Review"
    : isLessonTwentyFour
    ? "Negotiating a Purchase"
    : isLessonTwentyThree
    ? "Requesting a Bank Loan"
    : isLessonTwentyTwo
    ? "Calling in Sick"
    : isLessonTwentyOne
    ? "Explaining That You're Feeling Overworked"
    : isLessonTwenty
    ? "Talking About a Brown Noser"
    : isLessonNineteen
    ? "Complaining About a Co-Worker"
    : isLessonEighteen
    ? "Discussing Office Scandals"
    : isLessonSeventeen
    ? "Telling Somebody Off"
    : isLessonSixteen
    ? "Politely Disagreeing with Someone"
    : isLessonFifteen
    ? "Shifting Blame"
    : isLessonFourteen
    ? "Taking Credit for Good Results"
    : isLessonThirteen
    ? "Discussing a Mistake"
    : isLessonTwelve
    ? "Running a Meeting"
    : isLessonEleven
    ? "Motivating Co-Workers"
    : isLessonTen
    ? "Discussing a Difficult Request"
    : isLessonNine
    ? "Dealing with a Dissatisfied Customer"
    : isLessonEight
    ? "Discussing a Difficult Decision"
    : isLessonSeven
      ? "Discussing Bad Results"
      : isLessonSix
        ? "Discussing Good Results"
        : isLessonFive
          ? "Talking About Company Strategy"
          : isLessonFour
            ? "Talking About Manufacturing"
            : isLessonThree
              ? "Discussing a New Ad Campaign"
              : isLessonTwo
                ? "Talking About Financial Issues"
                : "Talking About a New Project";
  const context = isLessonThirty
    ? "Donna calls Marina to tell her the good news — she got the job. Marina wisely decides to negotiate for a higher salary."
    : isLessonTwentyNine
      ? "Sam currently runs his own company selling used office furniture online. He's tired of running his own business and wants to get a job with a big company."
      : isLessonTwentyEight
      ? "Donna, a Human Resources Manager, is interviewing Marina for a sales position."
      : isLessonTwentySeven
      ? "Kurt has the difficult task of firing Dan. Dan's been with the company since the beginning and is a friend of Kurt's. Dan is surprised and upset with the news."
      : isLessonTwentySix
      ? "Steve is meeting with his boss, Kurt, to review his performance. Kurt promotes Steve to the position of marketing director."
      : isLessonTwentyFive
      ? "It's annual performance review time. John meets with his boss to go over his performance for the past year, hear about his strengths and weaknesses, and find out about his salary increase."
      : isLessonTwentyFour
      ? "Jack, owner of Jack's Party Store, is negotiating to buy an advertisement in the Newport Times. Dave is an ad salesman with the newspaper."
      : isLessonTwentyThree
      ? "Ivan meets with Gina, a loan officer at L&S Bank, about getting a loan to start a new coffee shop. When Gina reviews his financial forecasts and suggests some changes, Ivan is angry at first but then decides to go along with it."
      : isLessonTwentyTwo
      ? "Maria calls her boss, Scott, to tell him she's not feeling well, and she's going to have to take a sick day. Fortunately, Scott is an understanding boss."
      : isLessonTwentyOne
      ? "Mary is feeling overwhelmed between commitments at home and at work. Dan advises her to be patient and stay focused. Things will improve once their busy period at the office is over."
      : isLessonTwenty
      ? "Nearly every office has one: the brown noser. He or she will do just about anything to win favor with the boss. Here Tony, Karen, and Nancy complain about their local brown noser, Mitch."
      : isLessonNineteen
      ? "Justin, from the marketing department, is complaining to Mary about Joe. Joe is always nasty to Justin and Justin is sick of it. Mary advises Justin not to let Joe bother him."
      : isLessonEighteen
      ? "With his naughty behavior, Bill Swing provides plenty of material for office gossip. Cindy and Steve discuss his latest move and review his other recent insensitive behavior."
      : isLessonSeventeen
      ? "Doug and Joe work at the reception desk of the Boston Empire Hotel, a large hotel. Kara, the hotel manager, yells at Doug for being late to work every day."
      : isLessonSixteen
      ? "If Kroll Enterprises doesn't take action soon, the company is going to be in financial trouble. Joel and Kathy have different opinions on how to cut costs at the company."
      : isLessonFifteen
      ? "Rick and Ellen work for Attic Treasures Antiques, an antique shop. Max is the owner of the shop. Recently, a woman came in and sold them $10,000 worth of “antique” jewelry. Max takes one look at the jewelry and realizes it's fake."
      : isLessonFourteen
      ? "When United Supply Company launches their website three weeks ahead of schedule, there's more than one person ready to take credit."
      : isLessonThirteen
      ? "Chris and Todd work for Alpine Design, a furniture manufacturer. When Todd accidentally orders the wrong amount of wood, his boss Chris warns him to be more careful in the future."
      : isLessonTwelve
      ? "Julia is running a meeting. When Larry and Sally start arguing, Julia has to bring the meeting back under control."
      : isLessonEleven
      ? "Greg, Stan, and Donna work for Pack-It, a maker of trash bags and other consumer goods. After disappointing sales results, they discuss exiting the trash bag business. But a fresh new idea gives them hope for the future."
      : isLessonTen
      ? "Tanya is a head of R&D in a laboratory for Sudsco, a company that makes shampoo. Here she meets with colleagues John and Andy to discuss a request from the marketing department."
      : isLessonNine
      ? "John hired Kevin's web design firm to design a website for his company, but John is not satisfied with the end result."
      : isLessonEight
      ? "Anna, Lynn, and Jeff are thinking about moving their manufacturing facilities from the United States to China. Jeff is having trouble deciding what to do."
      : isLessonSeven
      ? "Ron, Alex, and Pam work for Brooklyn Brewski, a company that brews and distributes beer throughout New York. The company's recent results have been terrible."
      : isLessonSix
        ? "Peter, Linda, and Todd work as managers at Capital City Bank, a retail bank. Linda's creative idea for attracting new customers to the bank has generated lots of new business."
        : isLessonFive
          ? "Andy and Laura work for Saltonica, a maker of cell phones. Sales have been slow lately, so Andy is recommending that the company adopt a new strategy."
          : isLessonFour
            ? "Mike and Dan work for Swift Shoes, a manufacturer of sneakers. Mike is in charge of manufacturing. Dan is trying to push Mike to get some new shoes ready quickly."
            : isLessonThree
              ? "Ted works for an advertising agency. He's presenting to Sam and Lisa, who work for Pacific Beer Company."
              : isLessonTwo
                ? "Juan and Diane work in the finance department of Delicious Delights, a company that makes snack foods. Here, they're discussing the financial projections for a new product line."
                : "Carl, Greg, and Anne work for WaterSonic Corporation. Recently, the company has come up with an idea for a new electric toothbrush.";
  const lines = isLessonThirty
    ? lessonThirtyLines
    : isLessonTwentyNine
      ? lessonTwentyNineLines
      : isLessonTwentyEight
      ? lessonTwentyEightLines
      : isLessonTwentySeven
      ? lessonTwentySevenLines
      : isLessonTwentySix
      ? lessonTwentySixLines
      : isLessonTwentyFive
      ? lessonTwentyFiveLines
      : isLessonTwentyFour
      ? lessonTwentyFourLines
      : isLessonTwentyThree
      ? lessonTwentyThreeLines
      : isLessonTwentyTwo
      ? lessonTwentyTwoLines
      : isLessonTwentyOne
      ? lessonTwentyOneLines
      : isLessonTwenty
      ? lessonTwentyLines
      : isLessonNineteen
      ? lessonNineteenLines
      : isLessonEighteen
      ? lessonEighteenLines
      : isLessonSeventeen
      ? lessonSeventeenLines
      : isLessonSixteen
      ? lessonSixteenLines
      : isLessonFifteen
      ? lessonFifteenLines
      : isLessonFourteen
      ? lessonFourteenLines
      : isLessonThirteen
      ? lessonThirteenLines
      : isLessonTwelve
      ? lessonTwelveLines
      : isLessonEleven
      ? lessonElevenLines
      : isLessonTen
      ? lessonTenLines
      : isLessonNine
      ? lessonNineLines
      : isLessonEight
      ? lessonEightLines
      : isLessonSeven
      ? lessonSevenLines
      : isLessonSix
        ? lessonSixLines
        : isLessonFive
          ? lessonFiveLines
          : isLessonFour
            ? lessonFourLines
            : isLessonThree
              ? lessonThreeLines
              : isLessonTwo
                ? lessonTwoLines
                : lessonOneLines;

  return (
    <div>
      <PageHeader
        eyebrow={`Business 1 · Lesson ${lessonNumber}`}
        title={title}
      />

      <Card>
        <section>
          <Dialogue
            instruction="Listen to the..."
            audioSrc={`/media/audio/language/expressions/business-1/lesson-${lessonNumber}.mp3`}
            context={context}
            lines={lines}
            segmented
          />
        </section>

        {isLessonTwo && (
          <section className="rounded-xl bg-(--background) p-4">
            <h2 className="mb-3 text-lg font-black">Abbreviations</h2>
            <dl className="grid gap-2">
              <div><dt className="inline font-bold">P&amp;L</dt><dd className="inline"> = Profit and Loss</dd></div>
              <div><dt className="inline font-bold">CFO</dt><dd className="inline"> = Chief Financial Officer</dd></div>
              <div><dt className="inline font-bold">CEO</dt><dd className="inline"> = Chief Executive Officer (Managing Director)</dd></div>
            </dl>
          </section>
        )}

        {isLessonEleven && (
          <section className="rounded-xl bg-(--background) p-4">
            <p>* c'mon — This casual expression is short for “come on” and here means “listen to me.”</p>
            <p>(to) work one's tail off</p>
          </section>
        )}

        {isLessonFifteen && (
          <section className="rounded-xl bg-(--background) p-4">
            <p>* grand — thousand</p>
          </section>
        )}

        {isLessonSeventeen && (
          <section className="rounded-xl bg-(--background) p-4">
            <p>* reference — a recommendation by a past employer to a future employer regarding a person's character and qualifications</p>
          </section>
        )}

        {isLessonEighteen && (
          <section className="grid gap-2 rounded-xl bg-(--background) p-4">
            <p>* sexual harassment — unwelcome verbal or physical contact of a sexual nature that affects one's employment or creates an unpleasant work environment</p>
            <p>* company offsite — a trip in which employees of a company leave the office together and go to another location, frequently for fun or to discuss broad company goals for the future</p>
            <p>* strip joint — a bar in which women remove their clothes on stage for the entertainment of male clientele</p>
          </section>
        )}

        {isLessonNineteen && (
          <section className="rounded-xl bg-(--background) p-4">
            <p>* This is a nice way of saying: Many of the people working here have strange and/or unusual personalities, and it may be difficult to work with them.</p>
          </section>
        )}

        {isLessonTwentySix && (
          <section className="rounded-xl bg-(--background) p-4">
            <p>* perks — short for perquisites: benefits other than salary</p>
          </section>
        )}

        {isLessonTwentySeven && (
          <section className="rounded-xl bg-(--background) p-4">
            <p>* severance package — the benefits offered to an employee being laid off</p>
          </section>
        )}

        {isLessonThirty && (
          <section className="rounded-xl bg-(--background) p-4">
            <p>* base salary — the salary not including bonuses or any other benefits</p>
          </section>
        )}
      </Card>

      {isLessonOne && (
        <Card className="mt-4">
          <h2 className="mb-2 text-xl font-black">Practice the Idioms</h2>
          <Radio
            instruction="Choose the best substitute for the phrase or sentence highlighted."
            exercise={lessonOneExercise}
            questionClassName="rounded-xl bg-(--background) p-4"
          />
        </Card>
      )}

      {isLessonTwo && (
        <Card className="mt-4">
          <h2 className="mb-2 text-xl font-black">Practice the Idioms</h2>
          <Radio
            instruction="Choose the most appropriate response to each sentence."
            exercise={lessonTwoExercise}
            questionClassName="rounded-xl bg-(--background) p-4"
          />
        </Card>
      )}

      {isLessonThree && (
        <Card className="mt-4">
          <h2 className="mb-2 text-xl font-black">Practice the Idioms</h2>
          <Radio
            instruction="Choose the best substitute for the phrase or sentence highlighted."
            exercise={lessonThreeExercise}
            questionClassName="rounded-xl bg-(--background) p-4"
          />
        </Card>
      )}

      {isLessonFour && (
        <Card className="mt-4">
          <h2 className="mb-2 text-xl font-black">Practice the Idioms</h2>
          <Radio
            instruction="Choose the best substitute for the phrase or sentence highlighted."
            exercise={lessonFourExercise}
            questionClassName="rounded-xl bg-(--background) p-4"
          />
        </Card>
      )}

      {isLessonFive && (
        <Card className="mt-4">
          <h2 className="mb-2 text-xl font-black">Practice the Idioms</h2>
          <Radio
            instruction="Choose the best substitute for the phrase or sentence highlighted."
            exercise={lessonFiveExercise}
            questionClassName="rounded-xl bg-(--background) p-4"
          />
        </Card>
      )}

      {isLessonSix && (
        <Card className="mt-4">
          <h2 className="mb-2 text-xl font-black">Practice the Idioms</h2>
          <Radio
            instruction="Choose the most appropriate response to each sentence."
            exercise={lessonSixExercise}
            questionClassName="rounded-xl bg-(--background) p-4"
          />
        </Card>
      )}

      {isLessonSeven && (
        <Card className="mt-4">
          <h2 className="mb-2 text-xl font-black">Practice the Idioms</h2>
          <Radio
            instruction="Choose the best substitute for the phrase or sentence highlighted."
            exercise={lessonSevenExercise}
            questionClassName="rounded-xl bg-(--background) p-4"
          />
        </Card>
      )}

      {isLessonEight && (
        <Card className="mt-4">
          <h2 className="mb-2 text-xl font-black">Practice the Idioms</h2>
          <Radio
            instruction="Choose the best substitute for the phrase or sentence highlighted."
            exercise={lessonEightExercise}
            questionClassName="rounded-xl bg-(--background) p-4"
          />
        </Card>
      )}

      {isLessonNine && (
        <Card className="mt-4">
          <h2 className="mb-2 text-xl font-black">Practice the Idioms</h2>
          <Radio
            instruction="Choose the best substitute for the phrase or sentence highlighted."
            exercise={lessonNineExercise}
            questionClassName="rounded-xl bg-(--background) p-4"
          />
        </Card>
      )}

      {isLessonTen && (
        <Card className="mt-4">
          <h2 className="mb-2 text-xl font-black">Practice the Idioms</h2>
          <Radio
            instruction="Choose the best substitute for the phrase or sentence highlighted."
            exercise={lessonTenExercise}
            questionClassName="rounded-xl bg-(--background) p-4"
          />
        </Card>
      )}

      {isLessonEleven && (
        <Card className="mt-4">
          <h2 className="mb-2 text-xl font-black">Practice the Idioms</h2>
          <Radio
            instruction="Choose the best substitute for the phrase or sentence highlighted."
            exercise={lessonElevenExercise}
            questionClassName="rounded-xl bg-(--background) p-4"
          />
        </Card>
      )}

      {isLessonTwelve && (
        <Card className="mt-4">
          <h2 className="mb-2 text-xl font-black">Practice the Idioms</h2>
          <Radio
            instruction="Choose the best substitute for the phrase or sentence highlighted."
            exercise={lessonTwelveExercise}
            questionClassName="rounded-xl bg-(--background) p-4"
          />
        </Card>
      )}

      {isLessonThirteen && (
        <Card className="mt-4">
          <h2 className="mb-2 text-xl font-black">Practice the Idioms</h2>
          <Radio instruction="Choose the best substitute for the phrase or sentence highlighted." exercise={lessonThirteenExercise} questionClassName="rounded-xl bg-(--background) p-4" />
        </Card>
      )}

      {isLessonFourteen && (
        <Card className="mt-4">
          <h2 className="mb-2 text-xl font-black">Practice the Idioms</h2>
          <Radio instruction="Choose the best substitute for the phrase or sentence highlighted." exercise={lessonFourteenExercise} questionClassName="rounded-xl bg-(--background) p-4" />
        </Card>
      )}

      {isLessonFifteen && (
        <Card className="mt-4">
          <h2 className="mb-2 text-xl font-black">Practice the Idioms</h2>
          <Radio instruction="Choose the most appropriate response to the following." exercise={lessonFifteenExercise} questionClassName="rounded-xl bg-(--background) p-4" />
        </Card>
      )}

      {isLessonSixteen && (
        <Card className="mt-4"><h2 className="mb-2 text-xl font-black">Practice the Idioms</h2><Radio instruction="Choose the best substitute for the phrase or sentence highlighted." exercise={lessonSixteenExercise} questionClassName="rounded-xl bg-(--background) p-4" /></Card>
      )}
      {isLessonSeventeen && (
        <Card className="mt-4"><h2 className="mb-2 text-xl font-black">Practice the Idioms</h2><Radio instruction="Choose the best substitute for the phrase or sentence highlighted." exercise={lessonSeventeenExercise} questionClassName="rounded-xl bg-(--background) p-4" /></Card>
      )}
      {isLessonEighteen && (
        <Card className="mt-4"><h2 className="mb-2 text-xl font-black">Practice the Idioms</h2><Radio instruction="Choose the best substitute for the phrase or sentence highlighted." exercise={lessonEighteenExercise} questionClassName="rounded-xl bg-(--background) p-4" /></Card>
      )}
      {isLessonNineteen && (
        <Card className="mt-4"><h2 className="mb-2 text-xl font-black">Practice the Idioms</h2><Radio instruction="Choose the best substitute for the phrase or sentence highlighted." exercise={lessonNineteenExercise} questionClassName="rounded-xl bg-(--background) p-4" /></Card>
      )}
      {isLessonTwenty && (
        <Card className="mt-4"><h2 className="mb-2 text-xl font-black">Practice the Idioms</h2><Radio instruction="Choose the most appropriate response to the following." exercise={lessonTwentyExercise} questionClassName="rounded-xl bg-(--background) p-4" /></Card>
      )}
      {isLessonTwentyOne && (
        <Card className="mt-4"><h2 className="mb-2 text-xl font-black">Practice the Idioms</h2><Radio instruction="Choose the best substitute for the phrase or sentence highlighted." exercise={lessonTwentyOneExercise} questionClassName="rounded-xl bg-(--background) p-4" /></Card>
      )}
      {isLessonTwentyTwo && (
        <Card className="mt-4"><h2 className="mb-2 text-xl font-black">Practice the Idioms</h2><Radio instruction="Choose the best substitute for the phrase or sentence highlighted." exercise={lessonTwentyTwoExercise} questionClassName="rounded-xl bg-(--background) p-4" /></Card>
      )}
      {isLessonTwentyThree && (
        <Card className="mt-4"><h2 className="mb-2 text-xl font-black">Practice the Idioms</h2><Radio instruction="Choose the best substitute for the phrase or sentence highlighted." exercise={lessonTwentyThreeExercise} questionClassName="rounded-xl bg-(--background) p-4" /></Card>
      )}
      {isLessonTwentyFour && (
        <Card className="mt-4"><h2 className="mb-2 text-xl font-black">Practice the Idioms</h2><Radio instruction="Choose the best substitute for the phrase or sentence highlighted." exercise={lessonTwentyFourExercise} questionClassName="rounded-xl bg-(--background) p-4" /></Card>
      )}
      {isLessonTwentyFive && (
        <Card className="mt-4"><h2 className="mb-2 text-xl font-black">Practice the Idioms</h2><Radio instruction="Choose the best substitute for the phrase or sentence highlighted." exercise={lessonTwentyFiveExercise} questionClassName="rounded-xl bg-(--background) p-4" /></Card>
      )}
      {isLessonTwentySix && (
        <Card className="mt-4"><h2 className="mb-2 text-xl font-black">Practice the Idioms</h2><Radio instruction="Choose the best substitute for the phrase or sentence highlighted." exercise={lessonTwentySixExercise} questionClassName="rounded-xl bg-(--background) p-4" /></Card>
      )}
      {isLessonTwentySeven && (
        <Card className="mt-4"><h2 className="mb-2 text-xl font-black">Practice the Idioms</h2><Radio instruction="Choose the best substitute for the phrase or sentence highlighted." exercise={lessonTwentySevenExercise} questionClassName="rounded-xl bg-(--background) p-4" /></Card>
      )}
      {isLessonTwentyEight && (
        <Card className="mt-4"><h2 className="mb-2 text-xl font-black">Practice the Idioms</h2><Radio instruction="Choose the best substitute for the phrase or sentence highlighted." exercise={lessonTwentyEightExercise} questionClassName="rounded-xl bg-(--background) p-4" /></Card>
      )}
      {isLessonTwentyNine && (
        <Card className="mt-4"><h2 className="mb-2 text-xl font-black">Practice the Idioms</h2><Radio instruction="Choose the most appropriate response to each sentence." exercise={lessonTwentyNineExercise} questionClassName="rounded-xl bg-(--background) p-4" /></Card>
      )}
      {isLessonThirty && (
        <Card className="mt-4"><h2 className="mb-2 text-xl font-black">Practice the Idioms</h2><Radio instruction="Choose the best substitute for the phrase or sentence highlighted." exercise={lessonThirtyExercise} questionClassName="rounded-xl bg-(--background) p-4" /></Card>
      )}

      <SequenceNavigation
        previousLabel={
          lessonNumber > 1
            ? (businessLessonTitles[lessonNumber - 2] ?? "Business 1")
            : "Business 1"
        }
        nextLabel={
          lessonNumber < businessLessonTitles.length
            ? (businessLessonTitles[lessonNumber] ?? "Business 1")
            : "Business 1"
        }
        onPrevious={() =>
          navigate(
            lessonNumber > 1
              ? `/expressions/business/lesson-${lessonNumber - 1}`
              : "/expressions/business",
          )
        }
        onNext={() =>
          navigate(
            lessonNumber < businessLessonTitles.length
              ? `/expressions/business/lesson-${lessonNumber + 1}`
              : "/expressions/business",
          )
        }
        ariaLabel="Business 1 lessons"
      />
    </div>
  );
}
