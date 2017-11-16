'use strict';

angular.module('curate', [
    'ngRoute',
    'curation'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
    $locationProvider.hashPrefix('!');

    $routeProvider.
        when('/curation', {
            templateUrl: 'curation/curation.template.html',
            controller: 'CurationController',
            controllerAs: 'curation'
        }).
        otherwise('/curation');
}]);
