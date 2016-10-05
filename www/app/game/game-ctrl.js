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

function playlistShuffle(){
  index = Math.floor(Math.random() * userPlaylistSongs.length + 1)
  return userPlaylistSongs[index]
}


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
      angular.element('#party-list').append("<div class='item'>"+ response.config.url +"</div>")
    console.log("user")
    $scope.btnClick()
    // $scope.shuffle()
    })
  }




}]);
