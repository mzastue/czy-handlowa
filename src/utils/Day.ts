import moment from '@/utils/datetime';

export interface DayInterface {
  id: string,
  previousDayId: string;
  isSunday: boolean;
  date: moment.Moment;
  isCommercial: boolean,
  getId(): string;
}

export default class Day implements DayInterface {
  isSunday: boolean;
  date: moment.Moment;
  isCommercial: boolean = false;
  previousDayId: string = '';
  id: string = '';

  public constructor(date: moment.Moment) {
    this.date = date;
    this.isSunday = date.day() === 0;
    this.id = this.getId();
  }

  public getId() {
    return this.date.format('DDMMYYYY');
  }
}
