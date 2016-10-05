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
    console.log("hello")
    $http.get(rootUrl + "/api/playlists", {headers: setHeader()})
      .success(function(response){
        $scope.playlists = response.songs;
    }).fail(function(){
      showAlert("fail")
    })
  }



  // $http.get(rootUrl + $scope.playlists.id + '/playlists' + $scope.playlists.id)
  //   .success(function(response){
  //     $scope.userplaylist = response
  //   })

    $scope.playlistParty
    // $scope.user


    // $scope.createParty = function(){

    //   $http.post(
    //       rootUrl + "/playlists",
    //       {title: $scope.playlistCreate}
    //     )
    // }
}]);
