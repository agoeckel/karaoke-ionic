function playlistShuffle(){
  index = Math.floor(Math.random() * userPlaylistSongs.length + 1)
  return userPlaylistSongs[index]
}

karaoke.controller('GameCtrl', ['$http', '$scope', function($http, $scope){

  $scope.IsHidden = true;
  $scope.btnClick = function(){
      $scope.IsHidden = $scope.IsHidden ? false : true;
    }

}]);
