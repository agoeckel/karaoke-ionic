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

  $http.get(rootUrl + "/api/playlists", {headers: setHeader()})
    .success(function(response){
      $scope.playlists = response.songs;
  })

  $scope.spotify = function() {
    $scope.show = true
    song = $scope.spotify.searchedSong
    $http.get(rootUrl + '/api/artists', {
      headers: setHeader(),
      params: {track_name: song}
    })
    .success(function(response){
      $scope.songs = response
    })
  }

  $scope.songInfo = function(){
    var songName = this.song.name;
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
      angular.element("#user-playlist").append("<div ng-show='mySong' id='mySong' class='item card'><p><strong>"+response.config.data.artist+"</strong></p><p>"+response.config.data.title+"</p><button id="+response.data.song_id+" ng-click='destroySong()' class='item card icon ion-minus-circled song-delete-btn'>   Delete</button></div>");
      $scope.show = false
      $scope.spotify.searchedSong = ''
    })
  }

  $scope.destroySong = function() {
    var songIndex = this.$index
    var songName = this.$$watchers[0].last;
    $http.delete(rootUrl + "/api/playlist_songs/" + songName, {
      headers: setHeader()
    }).then(function(){
      console.log(this)
    })

  }
  $scope.show = false
}]);
