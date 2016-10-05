
karaoke.controller('PlaylistsCtrl', ['$scope', '$http', '$state','$window', function($scope, $http, $state, $window) {

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
    $scope.show = false
    $http.get(rootUrl + "/api/playlists", {headers: setHeader()})
      .success(function(response){
        console.log(response)
        $scope.playlists = response.songs;
        console.log("why won't you append the song jerk")
    })
  }

  // $http.get(rootUrl + $scope.playlists.id + '/playlists' + $scope.playlists.id)
  //   .success(function(response){
  //     $scope.userplaylist = response
  //   })

    $scope.playlistParty
    // $scope.user

  $scope.spotify = function() {
    console.log("hi there");
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
    var songName = this.song.name;
    console.log(this.song.album.images[0].name)
    var artistName = this.song.artists[0].name;
    var songImages = this.song.album.images[0].url;
    if (songName === null || songName === undefined) { songName = null };
    if (artistName === null || artistName === undefined) { artistName = null };
    if (songImages === null || songImages === undefined) { songImages = null };
    var songAttributes = {title: songName, artist: artistName, image_src: songImages};
    $http.post(rootUrl + "/api/songs", songAttributes, {
      headers: setHeader()
    })
    .then(function(response){

    })
    .catch(function(data) {
      // showAlert(data.data.errors[0])
    })
    $window.location.reload();
  }

  $scope.$on("$ionicView.beforeEnter", function(){
    $scope.playlist();
  })

  $scope.show = false

}]);
