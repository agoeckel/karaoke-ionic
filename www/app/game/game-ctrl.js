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
  $scope.party = {
    id: ""
  }

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
      $scope.btnClick()
  }

  $scope.createParty = function() {
    $http.post(rootUrl + '/api/parties', {}, {headers: setHeader()})
    .then(function(response){
      console.log(response)
      $state.go('tabs.game', {reload: true});
      angular.element('#game-title').text("Game #ID: " + response.data.id)
      $scope.btnClick()
    })
  }

  $scope.joinParty = function() {
    $http.put(rootUrl + "/api/parties/" + $scope.party.id, {},{headers: setHeader()})
    .then(function(response){
      console.log(response)
      $state.go('tabs.game', {reload: true});
      angular.element('#game-title').text("Game #ID: " + response.data.id)
    })
  }

  $scope.shuffleSong = function(){
    $scope.show = false
    $http.get(rootUrl + "/api/playlists", {headers: setHeader()})
      .success(function(response){
        $scope.playlists = response.songs;
    })
  }

  $scope.$on("$ionicView.beforeEnter", function(){
    // $scope.playlist();
    console.log("please do this")
  })


}]);
