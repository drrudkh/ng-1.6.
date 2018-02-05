export class WeatherService {
	constructor($http) {
		this.$http = $http;
		this.baseUrl = 'https://api.darksky.net';
		this.apiKey = 'b0727f02c7066a6eb7d00706dc9e1b51';
	}

	buildUrl(coord) {
		return `${this.baseUrl}/forecast/${this.apiKey}/${coord.latitude},${coord.longitude}`;
	}

	getGeoLocation() {
		const onSucces = (position) => {
			this.$http.get(this.buildUrl(position.coords))
				.then(resp => resp);
		};

		const onError = (error) => {
			console.warn(`Error(${error.code}): ${error.message}`);
		};

		navigator.geolocation.getCurrentPosition(onSucces, onError);
	}
}

WeatherService.$inject = ['$http'];