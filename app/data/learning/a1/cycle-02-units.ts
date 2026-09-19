import {
  atWorkLesson,
  dreamHomeLesson,
  eatingHabitsLesson,
  everyDayLesson,
  familyHistoryLesson,
  feelBetterLesson,
  feelingSickLesson,
  gameDayLesson,
  gettingAroundLesson,
  homeTourLesson,
  jobTalkLesson,
  lastWeekendLesson,
  leaveAMessageLesson,
  letsCelebrateLesson,
  schoolDaysLesson,
  shoppingAroundLesson,
  showYourTalentLesson,
  vacationStoriesLesson,
  weekendPlansLesson,
  whatsInTheKitchenLesson,
  whichWayLesson,
  youreInvitedLesson,
} from "./cycle-02-lessons";

const checkpoint = (unit: number) => ({
  id: `a1-u${String(unit).padStart(2, "0")}-checkpoint`,
  slug: `checkpoint-${unit}`,
  title: `Checkpoint ${unit}`,
  description: "Review what you learned.",
  order: 3,
  locked: true,
  checkpoint: true,
});

const unit = (
  order: number,
  title: string,
  description: string,
  lessons: [typeof gettingAroundLesson, typeof gettingAroundLesson],
) => ({
  id: `unit-${order}`,
  level: "a1",
  order,
  title,
  description,
  lessons: [...lessons, checkpoint(order)],
});

export const a1Cycle02Units = [
  unit(7, "Family on the Move", "Talk about transportation and routines.", [gettingAroundLesson, everyDayLesson]),
  unit(8, "Home Life", "Describe real and dream homes.", [homeTourLesson, dreamHomeLesson]),
  unit(9, "Working Life", "Talk about jobs, workplaces, and opinions.", [atWorkLesson, jobTalkLesson]),
  unit(10, "Food and Habits", "Talk about food and eating routines.", [whatsInTheKitchenLesson, eatingHabitsLesson]),
  unit(11, "Sports and Talents", "Talk about sports and abilities.", [gameDayLesson, showYourTalentLesson]),
  unit(12, "Making Plans", "Plan weekends and celebrations.", [weekendPlansLesson, letsCelebrateLesson]),
  unit(13, "Health", "Describe ailments and give simple advice.", [feelingSickLesson, feelBetterLesson]),
  unit(14, "Around Town", "Find stores and give directions.", [shoppingAroundLesson, whichWayLesson]),
  unit(15, "Past Adventures", "Talk about weekends and vacations.", [lastWeekendLesson, vacationStoriesLesson]),
  unit(16, "Looking Back", "Share family history and school memories.", [familyHistoryLesson, schoolDaysLesson]),
  unit(17, "Keeping in Touch", "Use the phone and make invitations.", [leaveAMessageLesson, youreInvitedLesson]),
];

export const a1Cycle02Lessons = [
  gettingAroundLesson, everyDayLesson, homeTourLesson, dreamHomeLesson,
  atWorkLesson, jobTalkLesson, whatsInTheKitchenLesson, eatingHabitsLesson,
  gameDayLesson, showYourTalentLesson, weekendPlansLesson, letsCelebrateLesson,
  feelingSickLesson, feelBetterLesson, shoppingAroundLesson, whichWayLesson,
  lastWeekendLesson, vacationStoriesLesson, familyHistoryLesson, schoolDaysLesson,
  leaveAMessageLesson, youreInvitedLesson,
];
