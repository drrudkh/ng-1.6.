import { TasksComponent } from './ng/tasks.component.js';

export default angular
	.module('tasksModule', [])
	.component('tasks', TasksComponent)