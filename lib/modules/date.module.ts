import { isBefore } from "./compare.module";

export const isDateBefore = (dateOne: Date, dateTwo: Date): boolean => {
  return isBefore(dateOne.getTime(), dateTwo.getTime());
};

export const isDateAfter = (dateOne: Date, dateTwo: Date) => {
  return isDateBefore(dateOne, dateTwo);
};