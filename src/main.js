import angular from 'angular';
import 'app';
import 'scss/main.scss';

angular
    .module('app-bootstrap', [
        'appModule',
    ])


angular.element(document).ready(function() {
    angular.bootstrap(document, ['app-bootstrap'])
})