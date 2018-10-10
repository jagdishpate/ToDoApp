toDoApp.controller('toDoListController', ['$scope', function ($scope) {
  console.log($scope)
  $scope.todos = [
    { text: 'Todo #1', done: true },
    { text: 'Todo #2', done: false },
    { text: 'Todo #3', done: false },
    { text: 'Todo #4', done: false }];

  $scope.addTodo = function () {
    $scope.todos.push({ text: $scope.todoText, done: false });
    $scope.todoText = '';
  }

  $scope.remaining = function () {
    var count = 0;
    angular.forEach($scope.todos, function (todo) {
      count += todo.done ? 0 : 1;
    });
    return count;
  }

  $scope.archive = function () {
    var oldTodos = $scope.todos;
    $scope.todos = [];
    angular.forEach(oldTodos, function (todo) {
      if (!todo.done) $scope.todos.push(todo);
    });
  }

}]);