karaoke.controller('PlaylistsCtrl', ['karaokeApi', function(karaokeApi) {

  // function PlaylistsCtrl() {
    var vm = this;

    karaokeApi.getUsers(function(data){
      vm.playlist = data;
    });


    console.log(users.playlist);
}]);
