karaoke.controller('PlaylistsCtrl', ['$scope', '$http', function($scope, $http) {
  $http.get(rootUrl)
    .success(function(response){

    $scope.playlists = response;

    });

    $scope.playlistParty

    $scope.createParty = function(){

      $http.post(
          //rootUrl + "/playlists",
          //{title: $scope.playlistCreate}
        )
    }

}]);
