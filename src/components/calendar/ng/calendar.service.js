export const CalendarComponent = {
    template: require('../templates/calendar.html'),
    controller: class CalendarController {
        constructor($scope) {
            this.$scope = $scope;
        }

        $onInit() {
            this.date = new Date();
            this.dateLabel = new Date();
            this.year = this.date.getFullYear();
            this.month = this.date.getMonth() + 1; // +1 for 1-12 month range
            this.day = this.date.getDay();
            this.weekDays = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
            this.calendar = this.generateCalendar();

        }

        prevMonth() {
            if (this.month === 1) {
                this.year = this.year - 1;
                this.month = 12;
            } else {
                this.month = this.month - 1;
            }
            this.calendar = this.generateCalendar();
        }

        nextMonth() {
            if (this.month === 12) {
                this.year = this.year + 1;
                this.month = 1;
            } else {
                this.month = this.month + 1;
            }
            this.calendar = this.generateCalendar();
            this.dateLabel = new Date(Date.now() + (1000 * 3600 * 24 * 30 * this.month));
        }

        generateCalendar() {
            const prevMonth = this.buildPreviousMonth();
            const nextMonth = this.buildNextMonth();
            const nrOfMissingDays = new Date(this.year, this.month - 1, 1).getDay(); // -1 bcs JavaScript counts months from 0 to 11. January is 0. December is 11.
            var monthInProccess = this.buildMonthObj(prevMonth.year, prevMonth.month);
            var dayInProccess = monthInProccess.nrOfDays - nrOfMissingDays + 1;
            var isThisMonth = false;

            var buildMonth = () => {
                const weeksInMonth = [];
                const weekCount = this.weeksInMonthCount(this.year, this.month);

                for (let i = 0; i < weekCount; i++) {
                    weeksInMonth.push(buildWeek())
                }

                return weeksInMonth;
            }

            var buildWeek = (length = 7) => {
                const daysInWeek = []

                for (let i = 0; i < length; i++) {

                    if (!isThisMonth && dayInProccess > monthInProccess.nrOfDays) {
                        isThisMonth = true;
                        monthInProccess = this.buildMonthObj(this.year, this.month);
                        dayInProccess = 1;
                    }

                    if (isThisMonth && dayInProccess > monthInProccess.nrOfDays) {
                        isThisMonth = false;
                        monthInProccess = this.buildMonthObj(nextMonth.year, nextMonth.month);
                        dayInProccess = 1;
                    }

                    daysInWeek.push({
                        dayNr: dayInProccess,
                        month: monthInProccess.month,
                        year: monthInProccess.year,
                        isThisMonth,
                        isToday: dayInProccess === this.date.getDate() && this.date.getMonth() + 1 === monthInProccess.month &&
                            this.date.getFullYear() === monthInProccess.year
                    })

                    dayInProccess++;
                }

                return daysInWeek;
            }

            return buildMonth();
        }


        weeksInMonthCount(y, m) {
            const firstDayOfMonth = new Date(y, m - 1, 1);
            const lastDayOfMonth = new Date(y, m, 0);

            return Math.ceil((firstDayOfMonth.getDay() + lastDayOfMonth.getDate()) / 7)
        }

        buildMonthObj(y, m) {
            return {
                year: y,
                month: m,
                nrOfDays: new Date(y, m, 0).getDate()

            }
        }


        buildPreviousMonth() {
            if (this.month === 1) {
                return {
                    year: this.year - 1,
                    month: 12,
                }
            } else {
                return {
                    year: this.year,
                    month: this.month - 1
                }
            }
        }

        buildNextMonth() {
            if (this.month === 12) {
                return {
                    year: this.year + 1,
                    month: 1
                }
            } else {
                return {
                    year: this.year,
                    month: this.month - 1
                }
            }
        }

    }
}

CalendarComponent.$inject = ['$scope']