function setHeader() {
  return {
    "access-token": window.sessionStorage.token,
    "token-type": "Bearer",
    "client": window.sessionStorage.client,
    "expiry": window.sessionStorage.expiry,
    "uid": window.sessionStorage.uid
  };
};



karaoke.controller('UserCtrl', ['$http', '$scope', '$state', function($http, $scope, $state) {
  $scope.data = {}

  function storeSession(response, setUser) {
    window.sessionStorage.token = response.headers('access-token');
    window.sessionStorage.client = response.headers('client');
    window.sessionStorage.expiry = response.headers('expiry');
    window.sessionStorage.uid = response.headers('uid');
    window.sessionStorage.username = setUser.username;
    window.sessionStorage.user_id = setUser.id;
  };

  $scope.login = function() {

    $http.post(
        rootUrl + "/users",
        {username: $scope.data.username, password: $scope.data.password}
      )
        .success(function(response) {
          storeSession(response, response.data.data);
          $state.go('home');
        })
      .error(function(error){
        $state.go('game');
    })
  };

  $scope.register = function() {
    if($scope.password === $scope.passwordConfirm) {
      register = JSON.stringify({username: $scope.username, password: $scope.password});
      $http.post(rootUrl + '/register', register);
      $state.go('home');
    } else {
      $scope.password = "";
      $scope.passwordConfirm = "";
      showAlert("Passwords did not match.");
    };
  };

  $scope.logout = function() {
    window.sessionStorage.clear();
  };
}]);
