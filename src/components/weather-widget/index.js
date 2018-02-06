import { WeatherComponent } from './ng/weather.component.js';
import { DarkSkyService } from './ng/darksky.service.js';
import { GPlacesService } from './ng/gplaces.service.js';

export default angular
	.module('weatherModule', [])
	.component('weatherWidget', WeatherComponent)
	.service('DarkSkyService', DarkSkyService)
	.service('GPlacesService', GPlacesService)