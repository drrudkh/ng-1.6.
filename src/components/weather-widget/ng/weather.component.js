export const WeatherComponent = {
	template: require('../templates/weather.component.html'),
	controller: class WeatherController {
		constructor() {
			this.title = "Weather";
		}
	}
}