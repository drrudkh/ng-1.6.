export const WeatherComponent = {
    template: require('../templates/weather.component.html'),
    controller: class WeatherController {
        constructor(DarkSkyService, GPlacesService) {
            this.darkSky = DarkSkyService;
            this.gPlaces = GPlacesService;
        }

        $onInit() {
            this.title = 'Weather';
            this.getWeather();
        }

        getWeather() {
            this.darkSky.getWeatherInfo()
                .then(resp => {
                    this.gPlaces.getPlace(resp.data)
                        .then(resp => {
                            this.imageUrl = resp.config.url;
                        });
                })
                .catch(err => {
                    console.warn(err);
                });
        }


    }
};

WeatherComponent.$inject = ['DarkSkyService', 'GPlacesService'];