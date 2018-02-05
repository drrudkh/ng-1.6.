import { CalendarComponent } from './ng/calendar.component.js';
import { CalendarService } from './ng/calendar.service.js';

export default angular
	.module('calendarModule',[])
	.component('calendar', CalendarComponent)
	.service('CalendarService', CalendarService)