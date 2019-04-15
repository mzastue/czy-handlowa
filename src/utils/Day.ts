import moment from '@/utils/datetime';

export default class Day {
  isSunday: boolean;
  date: moment.Moment;
  isCommercial: boolean = false;
  previousDayId: string = '';

  public constructor(date: moment.Moment) {
    this.date = date;
    this.isSunday = date.day() === 0;
    this.id = this.getId();
  }

  public getId() {
    return this.date.format('DDMMYYYY');
  }
}
