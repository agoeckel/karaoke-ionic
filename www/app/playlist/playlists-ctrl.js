
karaoke.controller('PlaylistsCtrl', ['$scope', '$http', function($scope, $http) {

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

  // $http.get(rootUrl + $scope.playlists.id + '/playlists' + $scope.playlists.id)
  //   .success(function(response){
  //     $scope.userplaylist = response
  //   })

    $scope.playlistParty
    // $scope.user

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
  }

  $scope.$on("$ionicView.beforeEnter", function(){
    $scope.playlist();
  })

  $scope.show = false

}]);
