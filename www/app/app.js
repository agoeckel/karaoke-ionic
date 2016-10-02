
var rootUrl = "https://karaoke-rollette.herokuapp.com"
var karaoke = angular.module('karaokeApp', ['ionic'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('home', {
      url: "/home",
      templateUrl: "app/home/home.html"
    })

    .state('login', {
      url: "/login",
      templateUrl: "app/login/login.html"
    })

    .state('app', {
      url: "/playlist",
      templateUrl: "app/playlist/playlist.html"
    })

    .state('game', {
      url: "/game",
      templateUrl: "app/game/game.html"
    });

  $urlRouterProvider.otherwise("/login")
});

