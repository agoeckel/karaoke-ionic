karaoke.controller('PlaylistsCtrl', ['$scope', '$http', function($scope, $http) {

  $scope.playlist = function(){
    console.log("hello")
    $http.get(rootUrl + "/api/playlists/1")
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
