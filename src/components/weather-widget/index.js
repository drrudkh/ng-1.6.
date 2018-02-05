import { WeatherComponent } from './ng/weather.component.js';
import { WeatherService } from './ng/weather.service.js';

export default angular
	.module('weatherModule', [])
	.component('weatherWidget', WeatherComponent)
	.service('WeatherService', WeatherService)