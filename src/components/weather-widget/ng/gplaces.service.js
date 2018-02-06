export class GPlacesService {
    constructor($http) {
        this.$http = $http;
        this.rootUrl = 'https://maps.googleapis.com/maps/api/place';
        this.apiKey = 'AIzaSyBac0oLKwHEZvmmmtB89Kv8pk5vp4EiSLM';
    }

    buildUrl(coord) {
        return `${this.rootUrl}/nearbysearch/json?location=${coord.latitude},${coord.longitude}&radius=500&key=${this.apiKey}`;
    }

    buildPlaceUrl(ref) {
        return `${this.rootUrl}/photo?maxwidth=1000&photoreference=${ref}&key=${this.apiKey}`;
    }

    getPlacePhotos(ref) {
        return this.$http.get(this.buildPlaceUrl(ref)).then(resp => resp);
    }

    getPlace(coord) {
        return this.$http.get(this.buildUrl(coord))
                    .then(resp => this.getPlacePhotos(resp.data.results[0].photos[0].photo_reference));
    }
}

GPlacesService.$inject = ['$http'];