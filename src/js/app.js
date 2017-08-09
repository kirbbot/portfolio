var app = angular.module('mshhllApp',[
	'ngAnimate',
	'ngRoute'
]);

app.config(function ($routeProvider, $locationProvider) {
	$locationProvider.hashPrefix('');
	
	$routeProvider
		.when('/project/:Id', {
			templateUrl: 'views/project.htm'
		})
		.when('/', {
			templateUrl: 'views/projectList.htm'
		})
		.otherwise({
			redirectTo: '/'
		});
});