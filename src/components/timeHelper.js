import dayjs from "dayjs";
import jalali from "jalaliday";

dayjs.extend(jalali);
dayjs.calendar("jalali"); // Jalali Calendar

export const convertToJalaliDate = (date, format = "YYYY / MM / DD | HH:mm") =>
  dayjs(date, {jalali: true}).locale("fa").format(format);
