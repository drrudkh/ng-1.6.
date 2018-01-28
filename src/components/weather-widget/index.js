import { WeatherComponent } from './ng/weather.component.js';

export default angular
	.module('weatherModule', [])
	.component('weatherWidget', WeatherComponent)