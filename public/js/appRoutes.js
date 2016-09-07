angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

	$routeProvider

		// home page
		.when('/', {
			templateUrl: '/views/home.html',
			controller: 'MainController'
		})

		.when('/nerds', {
			templateUrl: '/views/nerd.html',
			controller: 'NerdController'
		})

		.when('/geeks', {
			templateUrl: '/views/geek.html',
			controller: 'GeekController'	
		})

		.when('/techbros', {
			templateUrl: '/views/tech_bros.html',
			controller: 'TechBrosController'
		})

		.when('/hipbros', {
			templateUrl: '/views/hip.html',
			controller: 'HipController'
		});

	$locationProvider.html5Mode(true);

}]);