function setHeader() {
  return {
    "access-token": window.sessionStorage.token,
    "token-type": "Bearer",
    "client": window.sessionStorage.client,
    "expiry": window.sessionStorage.expiry,
    "uid": window.sessionStorage.uid
  };
};

karaoke.controller('UserCtrl', ['$http', '$scope', '$state', function($http, $scope, $state, $cordovaOauth, $location, $localStorage, $ngCordovaFacebook) {

  function storeSession(response, setUser) {
    window.sessionStorage.token = response.headers('access-token');
    window.sessionStorage.client = response.headers('client');
    window.sessionStorage.expiry = response.headers('expiry');
    window.sessionStorage.uid = response.headers('uid');
    window.sessionStorage.username = setUser.username;
    window.sessionStorage.user_id = setUser.id;
  };

 $scope.login = function() {
      $cordovaOauth.facebook("1602849213349267", ["email"]).then(function(result) {
          $localStorage.accessToken = result.access_token;
          $location.path("/home");
      }, function(error) {
          alert("There was a problem signing in!  See the console for logs");
          console.log(error);
      });
    };

}]);
