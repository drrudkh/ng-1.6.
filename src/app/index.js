import uiRouter from "@uirouter/angularjs";
import 'components';
import { AppComponent } from './ng/app.component.js';

export default angular
    .module('appModule', ['componentsModule', 'ui.router'])
    .component('app', AppComponent)
    .config(function($stateProvider, $urlServiceProvider) {
    	// $urlServiceProvider.rules.otherwise({ state: 'home'})

        $stateProvider
            .state('home', {
                url: '/',
                component: 'dashboard'
            })

            .state('tasks', {
            	url: 'tasks',
            	component: 'tasks'
            })
    })