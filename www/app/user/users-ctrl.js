karaoke.factory('authentication', ['$http', function($http) {
  return {
    authenticate: function(username, password) {
      return $http.post(
        rootUrl + "/auth/login",
        JSON.stringify({email: username, password: password})
      );
    }
  };
}]);

function setHeader() {
  return {
    "access-token": window.sessionStorage.token,
    "token-type": "Bearer",
    "client": window.sessionStorage.client,
    "expiry": window.sessionStorage.expiry,
    "uid": window.sessionStorage.uid
  };
};

karaoke.controller('UserCtrl', ['$http', '$scope', '$state', '$ionicPopup', function($http, $scope, $state, $ionicPopup) {
  $scope.user = {
    username: "",
    password: "",
    passwordConfirm: "",
    email: ""
  };

  console.log($scope.user);

  showAlert = function(alert) {
    var alertPopup = $ionicPopup.alert({
      title: alert,
      cssClass: 'popupstyle'
    });
  };

  function storeSession(response, setUser) {
    window.sessionStorage.token = response.headers('access-token');
    window.sessionStorage.client = response.headers('client');
    window.sessionStorage.expiry = response.headers('expiry');
    window.sessionStorage.uid = response.headers('uid');
  };

  $scope.regpage = function(){
    $state.go("register")
  }

  $scope.login = function() {
    console.log("Username: " + $scope.user.username)
    console.log($scope.user)
  };

  $scope.register = function() {
    console.log($scope)
    if($scope.password === $scope.passwordConfirm) {
      register = JSON.stringify($scope.user);
      $http.post(rootUrl + '/auth', register);
      $state.go('tabs.home');
    } else {
      $scope.password = "";
      $scope.passwordConfirm = "";
      showAlert("Passwords did not match.");
    }
  }
}]);
