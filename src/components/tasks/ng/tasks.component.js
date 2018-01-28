export const TasksComponent = {
	template: require('../templates/tasks.component.html'),
	controller: class TasksController {
		constructor() {
			this.title = "Tasks";
		}
	}
}