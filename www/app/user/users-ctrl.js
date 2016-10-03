function setHeader() {
  return {
    "access-token": window.sessionStorage.token,
    "token-type": "Bearer",
    "client": window.sessionStorage.client,
    "expiry": window.sessionStorage.expiry,
    "uid": window.sessionStorage.uid
  };
};

karaoke.controller('UserCtrl', ['$http', '$scope', '$state', 'ngFB', function($http, $scope, $state, ngFB) {

  function storeSession(response, setUser) {
    window.sessionStorage.token = response.headers('access-token');
    window.sessionStorage.client = response.headers('client');
    window.sessionStorage.expiry = response.headers('expiry');
    window.sessionStorage.uid = response.headers('uid');
    window.sessionStorage.username = setUser.username;
    window.sessionStorage.user_id = setUser.id;
  };

  $scope.fbLogin = function () {
    ngFB.login({scope: 'email'}).then(
      function(response) {
        if (response.status === 'connected') {
            console.log('Facebook login succeeded');
            $scope.closeLogin();
        } else {
            console.log("failed")
            alert('Facebook login failed');
        }
      });
    };

    $scope.logout = function() {
      FB.getLoginStatus(function(response) {
        if (response.authResponse) {
          return FB.logout();
        }
      });
      window.sessionStorage.clear();
    };

}]);
