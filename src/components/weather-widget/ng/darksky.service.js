export class DarkSkyService {
	constructor($http, $q) {
		this.$http = $http;
		this.$q = $q;
		this.rootUrl = 'https://api.darksky.net';
		this.apiKey = 'b0727f02c7066a6eb7d00706dc9e1b51';
	}

	buildUrl(coord) {
		return `${this.rootUrl}/forecast/${this.apiKey}/${coord.latitude},${coord.longitude}`;
	}

	getWeatherInfo() {
		if ('geolocation' in navigator) {
			return this.$q((resolve, reject) => {
				navigator.geolocation.getCurrentPosition(
					position => {
						resolve(
							this.$http.get(this.buildUrl(position.coords))
								.then(resp => resp));
				}, () => { 
						 reject(
							console.warn('We could not get your location'))});
			});
		}
	}


}

DarkSkyService.$inject = ['$http', '$q'];