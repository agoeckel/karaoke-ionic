// $.ajax({
//   url: rootUrl,
//   method: 'GET'
// })
// .done(function(response) {
//   userPlaylistSongs = response
// });

function playlistShuffle(){
  index = Math.floor(Math.random() * userPlaylistSongs.length + 1)
  return userPlaylistSongs[index]
}

karaoke.controller('GameCtrl', ['$http', '$scope', function($http, $scope){



}]);
