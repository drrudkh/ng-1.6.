export const SidebarComponent = {
	template: require('../templates/side-bar.component.html'),
	controller: class SidebarController {
		constructor() {
			this.title = "Sidebar";
		}
	}
}