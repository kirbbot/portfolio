app.controller('mainController', function($scope, $http, $location, $rootScope, $routeParams){

	activate();
	function activate(){
		$scope.search = $routeParams;

		$http.get("json/data.json").then(function(data){
			$scope.projects = data.data;
			if ($routeParams.Id){
				angular.forEach($scope.projects, function(item){
					if(item.id == $routeParams.Id){
						$scope.project = item; 
					}
				})
			}
		});
	};
});