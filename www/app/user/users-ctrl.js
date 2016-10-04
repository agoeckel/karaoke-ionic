function setHeader() {
  return {
    "access-token": window.sessionStorage.token,
    "token-type": "Bearer",
    "client": window.sessionStorage.client,
    "expiry": window.sessionStorage.expiry,
    "uid": window.sessionStorage.uid
  };
};

karaoke.controller('UserCtrl', ['$http', '$scope', '$state', '$auth', function($http, $scope, $state, $auth) {

  function storeSession(response, setUser) {
    window.sessionStorage.token = response.headers('access-token');
    window.sessionStorage.client = response.headers('client');
    window.sessionStorage.expiry = response.headers('expiry');
    window.sessionStorage.uid = response.headers('uid');
    window.sessionStorage.username = setUser.username;
    window.sessionStorage.user_id = setUser.id;
  };

  $scope.signup = function () {
    $auth
      .signup({email: $scope.email, password: $scope.password})
      .then(function(response){
        $auth.setToken(response);
        $state.go('home')
      })
      .catch(function(response){
        alert("Invalid Login");
      })
    };

    $scope.login = function() {
      console.log("login")
      $auth
      .login({email: $scope.email, password: $scope.password})
      .then(function (response) {
        $auth.setToken(response);
        $state.go('home');
      })
      .catch(function (response) {
        alert("Invalid Login")
      })
    };

  $scope.auth = function (provider) {
  $auth.authenticate(provider)
    .then(function (response) {
      console.debug("success", response);
      $state.go('home');
    })
    .catch(function (response) {
      console.debug("catch", response);
    })
  }
}]);
