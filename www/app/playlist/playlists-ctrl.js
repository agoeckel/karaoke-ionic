karaoke.controller('PlaylistsCtrl', ['$scope', '$http', function($scope, $http) {

  $scope.playlist = function(){
    $http.get(rootUrl + "/api/playlists/:id")
      .success(function(response){
        $scope.playlists = response;
        console.log()
    });
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
