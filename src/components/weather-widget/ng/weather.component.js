export const WeatherComponent = {
    template: require('../templates/weather.component.html'),
    controller: class WeatherController {
        constructor(WeatherService) {
            this.title = "Weather";
            this.service = WeatherService;
            this.weather = this.service.getGeoLocation();
        }


    }
};

WeatherComponent.$inject = ['WeatherService'];