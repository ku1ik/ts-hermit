function RootCtrl($scope, $timeout) {
  $scope.name = localStorage['name']

  $scope.save = function() {
    localStorage['name'] = $scope.name;

    $scope.status = "Options Saved.";

    $timeout(function() {
      $scope.status = "";
    }, 3000);
  }
}
