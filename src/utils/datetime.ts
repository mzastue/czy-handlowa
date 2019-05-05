import moment from 'moment';

moment.updateLocale('pl', {
  weekdays: [
    'Niedziela', 'Poniedziałek', 'Wtorek', 'Środa', 'Czwartek', 'Piątek', 'Sobota',
  ],

  months: [
    'Styczeń', 'Luty', 'Marzec', 'Kwiecień', 'Maj', 'Czerwiec', 'Lipiec', 'Październik', 'Listopad', 'Grudzień',
  ]
});

export default moment;
