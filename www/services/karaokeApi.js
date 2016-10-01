(function () {
     'use strict';

     angular.module('karaokeApp').factory('karaokeApi', [karaokeApi]);

     function karaokeApi() {

        var users = JSON.parse({hello: {hi: "this is a user"}})
        var playlistSongs = JSON.parse({hi: {hello: "this is a playlist"}})
        var songs = JSON.parse()

        function getUsers() {
          console.log(users)
          return users;
        }

        function getPlaylistSongs() {
          return playlistSongs;
        }

        return {
            getUsers: getUsers,
            getPlaylistSongs: getPlaylistSongs
        };
    };
})();
