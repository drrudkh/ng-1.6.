export class CalendarService {
    constructor(date) {
        this.date = date;
    }

    generateCalendar() {
        const year = new Date(this.date).getFullYear();
        const month = new Date(this.date).getMonth();
        const nrOfMissingDays = new Date(year, month, 1).getDay(); // first day index of the month
        var startAtDay = this.date - 1000 * 3600 * 24 * (new Date(this.date).getDate() - 1 + nrOfMissingDays);

        const buildMonth = () => {
            const weeksInMonth = [];
            const weekCount = this.weeksInMonthCount(year, month);

            for (let i = 0; i < weekCount; i++) {
                weeksInMonth.push(buildWeek())
            }

            return weeksInMonth;
        }

        const buildWeek = () => {
            const daysInWeek = [];

            for (let i = 0; i < this.weekDays.length; i++) {

                daysInWeek.push({
                    day: new Date(startAtDay).getDate(),
                    isThisMonth: new Date(startAtDay).getMonth() === month,
                    isToday: new Date(startAtDay).toDateString() === new Date(Date.now()).toDateString() // toDateString() returns the date portion of a Date
                })


                startAtDay = startAtDay + 1000 * 3600 * 24;
            }

            return daysInWeek;
        }

        return buildMonth();
    }

    weeksInMonthCount(y, m) {
        const firstDayOfMonth = new Date(y, m, 1);
        const lastDayOfMonth = new Date(y, m + 1, 0); // since there is no day 0 in a month, it will return last day of previous month

        return Math.ceil((firstDayOfMonth.getDay() + lastDayOfMonth.getDate()) / 7)
    }
}