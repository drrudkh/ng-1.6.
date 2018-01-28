export const DashboardComponent = {
    template: require('../templates/dashboard.component.html'),
    controller: class DashboardController {
        constructor() {
            this.title = "Dashboard";

        }

        $onInit() {
            this.isOpen = true;
        }
    }
}