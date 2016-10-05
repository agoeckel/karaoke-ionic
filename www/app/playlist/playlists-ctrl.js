
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
    $http.get(rootUrl + "/api/playlists", {headers: setHeader()})
      .success(function(response){
        console.log(response)
        $scope.playlists = response.songs;
    })
  }


    // $scope.playlistParty
    // // $scope.user

    // $scope.createParty = function(){
    //   $http.post(
    //     rootUrl + "/playlists",
    //     {artist: $scope.artist, title: $scope.title}
    //   )
    // }

  $scope.spotify = function() {
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
    console.log("do it")
    $scope.playlist();
  })

}]);
