var app = angular.module('mshhllApp',[
	'ngAnimate',
	'ngRoute'
]);

app.config(['$routeProvider', function($routeProvider){
	
	$routeProvider
		.when('/project', {
			templateUrl: 'views/project.htm'
		})
		.otherwise({
			redirectTo: '/index.html'
		});
}]);