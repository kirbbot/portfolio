app.controller('mainController', function($scope, $timeout, $http, $location, $rootScope, $routeParams){

	activate();
	function activate(){
		$scope.search = $routeParams;

		$timeout(function(){
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
		}, 0);
		
	};

	$scope.open_project = function(project){
		console.log("open project");
		// $rootScope.$apply(function() {
			var selected_book_path = '/project/' + project.id;
			$location.path(selected_book_path);
			console.log($routeParams);
		// });
	}
});