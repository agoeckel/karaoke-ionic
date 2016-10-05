karaoke.controller('GameCtrl', ['$http', '$scope', '$state', function($http, $scope, $state){
  function setHeader() {
  return {
    "access-token": window.sessionStorage.token,
    "token-type": "Bearer",
    "client": window.sessionStorage.client,
    "expiry": window.sessionStorage.expiry,
    "uid": window.sessionStorage.uid,
    "id": window.sessionStorage.id
  };
};

  $scope.IsHidden = true;
  $scope.btnClick = function(){
      $scope.IsHidden = $scope.IsHidden ? false : true;
    }

  $scope.shuffle = function(){
    console.log("shuffle")
    $state.go('tabs.game', {reload: true});
  }

  $scope.user = function() {
    $http.post(rootUrl + '/api/parties', {}, {headers: setHeader()})
    .then(function(response){
      console.log(response)
      // <div class="item">response</div>
    console.log("user")
    $scope.btnClick()
    // $scope.shuffle()
  })

<<<<<<< HEAD
  // $http.post(


  //   )
=======
 }
>>>>>>> 8631944cee2d849a873eb933d4b445adbe6287ce


}]);
