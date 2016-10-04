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
    name: "",
    email: "",
    password: "",
    password_confirmation: ""
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
    if($scope.user.email && $scope.user.password) {
        login = {email: $scope.user.email, password:$scope.user.password};
        console.log(login)
        $http.post(rootUrl + "/v1/auth/sign_in", login)
        .then(function(response) {
          storeSession(response, response.data.data);
          $state.go('home');
        })
        .catch(function(data) {
          showAlert(data.data.errors[0]);
        });
    } else {
      showAlert("Invalid Login");
    }
  };

  $scope.register = function() {
    console.log($scope.user)
    if($scope.user.password === $scope.user.password_confirmation) {
      register = JSON.stringify($scope.user);
      $http.post(rootUrl + '/v1/auth', register)
    .then(function(response) {
      storeSession(response, response.data.data);
      $state.go('tabs.home');
    })
    .catch(function(data) {
      showAlert(data.data.errors[0]);
    })
    } else {
      $scope.password = "";
      $scope.password_confirmation = "";
      showAlert("Passwords did not match.");
    };
  };

  $scope.logout = function() {
    window.sessionStorage.clear();
  };
}]);
