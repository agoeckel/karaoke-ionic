(function () {
     'use strict';

     angular.module('karaokeApp').factory('karaokeApi', ['$http', karaokeApi]);

     function karaokeApi($http) {
        // var users = ({user: {"id":5,"name":"Devon Mueller","email":"hope@gusikowskisimonis.info","facebook_id":null,"token":null,"party_id":1,"created_at":"2016-09-30T19:29:57.163Z","updated_at":"2016-09-30T19:29:57.163Z"},"playlist":[{"id":12,"artist":"Jaqen H'ghar","title":"Dying of the Light","created_at":"2016-09-30T19:29:57.499Z","updated_at":"2016-09-30T19:29:57.499Z"},{"id":24,"artist":"Viserys Targaryen","title":"Absalom, Absalom!","created_at":"2016-09-30T19:29:57.516Z","updated_at":"2016-09-30T19:29:57.516Z"},{"id":38,"artist":"Catelyn Stark","title":"Death Be Not Proud","created_at":"2016-09-30T19:29:57.535Z","updated_at":"2016-09-30T19:29:57.535Z"},{"id":42,"artist":"Jaime Lannister","title":"The Stars' Tennis Balls","created_at":"2016-09-30T19:29:57.541Z","updated_at":"2016-09-30T19:29:57.541Z"},{"id":61,"artist":"Tyrion Lannister","title":"The Mirror Crack'd from Side to Side","created_at":"2016-09-30T19:29:57.567Z","updated_at":"2016-09-30T19:29:57.567Z"},{"id":100,"artist":"Stannis Baratheon","title":"Arms and the Man","created_at":"2016-09-30T19:29:57.622Z","updated_at":"2016-09-30T19:29:57.622Z"}]})


        function getUsers(callback) {
            $http.get(rootUrl)
              .success(function(data){
                callback(data);
              });
        }

        return {
            getUsers: getUsers,
        };
    };
})();
