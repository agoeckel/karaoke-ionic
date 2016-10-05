
karaoke.controller('PlaylistsCtrl', ['$scope', '$http', '$state', function($scope, $http, $state) {

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


  $scope.playlist = function(){
    $scope.show =
    $http.get(rootUrl + "/api/playlists", {headers: setHeader()})
      .success(function(response){
        console.log(response)
        $scope.playlists = response.songs;
    })
  }

  $scope.spotify = function() {
    $scope.show = true
    song = $scope.spotify.searchedSong
    $http.get(rootUrl + '/api/artists', {
      headers: setHeader(),
      params: {track_name: song}
    })
      .success(function(response){
        $scope.songs = response
        console.log(response)
      })
  }

  $scope.songInfo = function(){
    console.log("this is a song")
    // $state.go("tabs.home")
  }

  $scope.$on("$ionicView.beforeEnter", function(){
    $scope.playlist();
  })
  $scope.show = false
}]);
