import { differenceInCalendarDays, format } from "date-fns";

export const DateUtil = {
  /**
   * @param date 2023-05-09
   * @returns 09 May 2023
   */
  formatOnlyDate: (date: Date | string, hideYear = false) => {
    return format(new Date(date), `dd MMM ${hideYear ? "" : "yyyy"}`);
  },
  /**
   * @param date Date
   * @returns 2023-05-09
   */
  getOnlyDate: (date: Date | string) => {
    return format(new Date(date), `yyyy-MM-dd`);
  },
  /**
   * @param date 2023-05-09
   * @returns 09 May 2023 (11:43 AM)
   */
  formatDateTime: (date: Date | string, hideYear = false) => {
    return format(new Date(date), `dd MMM ${hideYear ? `` : `yyyy`} (hh:mm a)`);
  },
  /**
   * @param date String Date | "2023-06-29T06:15:21.414Z"
   * @description convert the date into date object and replace time with server time
   * @returns Date
   */
  getCurrentDateTime: (date: string | Date) => {
    const createdAtDate = new Date(date);
    createdAtDate.setHours(new Date().getHours());
    createdAtDate.setMinutes(new Date().getMinutes());
    createdAtDate.setSeconds(new Date().getSeconds());
    return createdAtDate;
  },
  /**
   * @param date Date
   * @returns difference in days between the given date and current date
   * @example
   * const date = new Date("2023-05-09");
   * const difference = DateUtil.getDayDifference(date);
   * console.log(difference); // 3
   */
  getDayDifference: (date: Date) => {
    return differenceInCalendarDays(date, new Date());
  },
};
