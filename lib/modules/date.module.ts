import { isAfter, isBefore } from "./compare.module";
/**
 * Compare date values according to before
 * @param {Date} dateOne - First value to compare
 * @param {Date} dateTwo - Second value to compare
 * @returns {boolean} - if dateOne is before dateTwo return true else false
 */
export const isDateBefore = (dateOne: Date, dateTwo: Date): boolean => {
  return isBefore(dateOne.getTime(), dateTwo.getTime());
};

/**
 * Compare date values according to after
 * @param {Date} dateOne - First value to compare
 * @param {Date} dateTwo - Second value to compare
 * @returns {boolean} - if dateOne is after dateTwo return true else false
 */
export const isDateAfter = (dateOne: Date, dateTwo: Date) => {
  return isAfter(dateOne.getTime(), dateTwo.getTime());
};
