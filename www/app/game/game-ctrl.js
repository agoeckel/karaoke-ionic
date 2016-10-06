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

function playlistShuffle(){
  index = Math.floor(Math.random() * userPlaylistSongs.length + 1)
  return userPlaylistSongs[index]
}


karaoke.controller('GameCtrl', ['$http', '$scope', '$state', '$ionicPopup', '$window', '$interval', function($http, $scope, $state, $ionicPopup, $window, $interval){
  $scope.party = {
    id: ""
  }

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

  $scope.IsHidden = true;
  $scope.btnClick = function(){
    $scope.IsHidden = false
    $interval(function(){$scope.IsHidden = true}, 3000);
    $interval.cancel()
      // $scope.IsHidden = $scope.IsHidden ? false : true;
    }

  $scope.shuffle = function(){
    console.log("shuffle")
    $state.go('tabs.game', {reload: true});
  }

  $scope.createParty = function() {
    $http.post(rootUrl + '/api/parties', {}, {headers: setHeader()})
    .then(function(response){
      console.log(response)
      $state.go('tabs.game', {reload: true});
      // angular.element('#game-title').text("Game #ID: " + response.data.id)
      $scope.partyID = response.data.id
      $scope.idAlert(response.data.id)
    })
  }

  $scope.joinParty = function() {
    $http.put(rootUrl + "/api/parties/" + $scope.party.id, {},{headers: setHeader()})
    .then(function(response){
      console.log(response)
      $state.go('tabs.game', {reload: true});
      angular.element('#game-title').text("Game #ID: " + response.data.id)
    })
  }

  $scope.shuffleSong = function(){
    $scope.show = false
    $http.post(rootUrl + "/api/song_matches", {}, {headers: setHeader()})
      .then(function(response){
        console.log(response)
        $scope.btnClick()
        angular.element("#upcoming-singer").append("<div class='list card'><div class='item'><p><strong>"+response.data.song_title+"</strong></p><p>"+response.data.song_artist+"</p><p>"+response.data.singer_name+"</p></div></div>")
    })
  }


  $http.get(rootUrl + "/api/song_matches", {headers: setHeader()})
    .then(function(response){
      console.log(response.data)
      $scope.partySongs = response.data
      $scope.currentSinger = $scope.partySongs[0]
  })


  $scope.idAlert = function(id) {
    var alertPopup = $ionicPopup.alert({
     title: "YOU\'RE party ID:  " + id,
     template: 'Share this id with your friends to join the party'
   });
  }


}]);
