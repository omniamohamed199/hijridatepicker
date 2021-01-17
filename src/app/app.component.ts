import { Component, EventEmitter, Injectable, Input, OnInit, Output } from '@angular/core';
import {NgbDateStruct, NgbCalendar, NgbCalendarIslamicCivil, NgbDatepickerI18n} from '@ng-bootstrap/ng-bootstrap';
const I18N_VALUES = {
  'en': {
    weekdays: ['Mon', 'Tues', 'Wen', 'Thurs', 'Fri', 'Sat', 'Sun'],
    months: ['Muharram', 'Safar', ' Rabi Al-awwal', 'Rabi Al-akhar ', 'Jumada Al-ula ', 'Jumada Al-ukhra ', 'Rajab', 'Shab’ban', 'Ramadan', 'Shawwal',
      'Dhul-Qi’dah', 'Dhul-Hijjah']
  },
  // other languages you would support
  'ar': {
    weekdays: ['ن', 'ث', 'ر', 'خ', 'ج', 'س', 'ح'],
    months: ['محرم', 'صفر', 'ربيع الأول', 'ربيع الآخر', 'جمادى الأولى', 'جمادى الآخرة', 'رجب', 'شعبان', 'رمضان', 'شوال',
      'ذو القعدة', 'ذو الحجة']
  }
}
@Injectable()
export class I18n {
  language ;
}
@Injectable()
export class CustomDatepickerI18n extends NgbDatepickerI18n {

  constructor(private _i18n: I18n) {
    super();
  }

  getWeekdayShortName(weekday: number): string {
    return I18N_VALUES[this._i18n.language].weekdays[weekday - 1];
  }
  getMonthShortName(month: number): string {
    return I18N_VALUES[this._i18n.language].months[month - 1];
  }
  getMonthFullName(month: number): string {
    return this.getMonthShortName(month);
  }

  getDayAriaLabel(date: NgbDateStruct): string {
    return `${date.day}-${date.month}-${date.year}`;
  }
}

@Component({
  selector: 'hijridatepicker',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [I18n, {provide: NgbDatepickerI18n, useClass: CustomDatepickerI18n}, {provide: NgbCalendar, useClass: NgbCalendarIslamicCivil}]
})
export class AppComponent implements OnInit {
  title = 'hijridatepicker';
  model: NgbDateStruct;

  @Output('date') date = new EventEmitter();
  @Input() lang :string;
  @Input() btnshow :any;
  constructor() { 
    
  }
  ngOnInit(): void {
    console.log(this.btnshow)
    I18n.prototype.language=this.lang
  }
  onDateSelected() {
    this.date.emit(this.model)
  }
}

