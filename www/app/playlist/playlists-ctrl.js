
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

  console.log($scope.query)

  $scope.playlist = function(){
    $http.get(rootUrl + "/api/playlists", {headers: setHeader()})
      .success(function(response){
        $scope.playlists = response.songs;
    })
  }

  $scope.spotify = function() {
    $http.get(rootUrl + '/api/artists', {
      headers: setHeader(),
      params: {track_name: "Sublime"}
    })
      .success(function(response){
        $scope.songs = response
        console.log(response)
      })
  }

  $scope.songInfo = function(){



  }

}]);
