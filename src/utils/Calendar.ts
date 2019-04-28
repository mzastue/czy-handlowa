import moment from "./datetime";
import { DayInterface } from './Day';

const commercialSundays: Array<string> = [
  '2019-04-14',
  '2019-04-28',
  '2019-05-26',
  '2019-06-30',
  '2019-07-28',
  '2019-08-25',
  '2019-09-29',
  '2019-10-27',
  '2019-11-24',
  '2019-12-15',
  '2019-12-22',
  '2019-12-29',
].sort();

const isCommercialSunday = (day: DayInterface): boolean => {
  return !!commercialSundays
    .find((commercialSunday: string) => day.date.format('YYYY-MM-DD') === commercialSunday);
}

export interface CalendarInterface {
  getToday(): DayInterface;
  addDay(day: DayInterface): void
}

export default class Calendar implements CalendarInterface {
  private days: Array<DayInterface> = [];
  public constructor(firstDay: DayInterface) {
    this.addDay(firstDay);
  }

  public addDay(day: DayInterface) {
    if (this.days.length) {
      const previousDay = this.previousDey();
      day.previousDayId = previousDay.getId();
    }
    day.isCommercial = isCommercialSunday(day);
    this.days.push(day);
  }

  public getToday(): DayInterface {
    return this.days[0];
  }

  private previousDey(): DayInterface {
    return this.days[this.days.length - 1];
  }
}