karaoke.controller('LoginSignupCtrl', function ($scope, $auth, $state, $http) {

  function storeSession() {
    window.sessionStorage.token = response.user.oauth_token;
    window.sessionStorage.expiry = response.user.oath_expires_at;
    window.sessionStorage.uid = response.user.uid;
    window.sessionStorage.name = response.user.name;
    window.sessionStorage.user_id = response.user.id;
  };

  $scope.signUp = function () {
    $auth
      .signup({email: $scope.email, password: $scope.password})
      .then(function (response) {
        $auth.setToken(response);
        $state.go('home');
      })
      .catch(function (response) {
        toastr.error(
          'Error!',
          {closeButton: true}
        );
      })
  };

  $scope.login = function () {
    $auth
      .login({email: $scope.email, password: $scope.password})
      .then(function (response) {
        storeSession();
        $state.go('home');
      })
      .catch(function (response) {
        toastr.error(
          'Email or password not correct!',
          {closeButton: true}
        );
      })
  };

  $scope.auth = function (provider) {
    $auth.authenticate(provider);
    console.log($auth.isAuthenticated());
      // .then(function (response) {
      //   storeSession();
      //   console.log("success", response);
      //   $state.go('home');
      // })
      // .catch(function (response) {
      //   storeSession();
      //   console.log("catch", response);
      // })
  }
});
