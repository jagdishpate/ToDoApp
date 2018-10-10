toDoApp.config(['$routeProvider', function ($routeProvider) {
	
	$routeProvider.when('/toDoList', {
		templateUrl: 'views/toDoList.html',
		controller: 'toDoListController'
	})
	.otherwise({ redirectTo: '/toDoList' });
}]);