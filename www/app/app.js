
var rootUrl = "http://localhost:3000"
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

    .state('register', {
      url: '/register',
      templateUrl: 'app/user/register.html'
    })

    .state('logout', {
      url: '/logout',
      templateUrl: 'app/login/login.html'
    })

    .state('login', {
      url: "/login",
      templateUrl: "app/login/login.html"
    })

    .state('tabs', {
      url: '/tab',
      abstract: true,
      templateUrl: 'app/nav/nav.html'
    })

    .state('tabs.home', {
      url: "/home",
      views: {
        'home-tab': {
          templateUrl: 'app/home/home.html'
        }
      }
    })

    .state('tabs.app', {
      url: "/playlist",
      views: {
        'join-tab': {
          templateUrl: 'app/playlist/playlist.html'
        }
      }
    })

    .state('tabs.game', {
      url: "/game",
      views: {
        'game-tab': {
          templateUrl: 'app/game/game.html'
        }
      }
    });

  $urlRouterProvider.otherwise("/login")
})

.config(function($ionicConfigProvider) {
  $ionicConfigProvider.tabs.position('bottom');
});

