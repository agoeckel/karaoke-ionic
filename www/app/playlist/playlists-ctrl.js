(function (){
      'use strict';

      angular.module('karaokeApp').controller('PlaylistsCtrl', ['karaokeApi', PlaylistsCtrl]);

      function PlaylistsCtrl(karaokeApi) {
        var vm = this;

        var users = karaokeApi.getUsers();
        var playlistSongs = karaokeApi.getPlaylistSongs();

        console.log(users, playlistSongs);

      }
})
