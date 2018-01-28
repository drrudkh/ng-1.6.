export const AppComponent = {
	template: require('../templates/app.html'),
	controller: class AppController {
		constructor() {
			this.title = "App Page";
		}
	}
}