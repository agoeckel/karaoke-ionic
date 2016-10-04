
var rootUrl = "https://karaoke-rollette.herokuapp.com"
//var rootUrl = "http://localhost:8100"
var karaoke = angular.module('karaokeApp', ['ionic', 'ngOpenFB', 'satellizer'])

.run(function($ionicPlatform, ngFB, $rootScope, $state, $auth) {
  // ngFB.init({appId: '1602849213349267'});

  $rootScope.$on('$stateChangeStart',
    function (event, toState) {
      var requiredLogin = false;
      if (toState.data && toState.data.requiredLogin)
        requiredLogin = true;
      if (requiredLogin && !$auth.isAuthenticated()) {
        event.preventDefault();
        $state.go('login');
      }
    });


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

.config(function($stateProvider, $urlRouterProvider, $authProvider) {
  $stateProvider

    .state('register', {
      url: '/register',
      templateUrl: 'app/user/register.html'
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

  $authProvider.facebook({
    clientId: '1602849213349267',
    // by default, the redirect URI is http://localhost:5000
    redirectUri: rootUrl + '/auth/facebook/callback'
  });
})

.config(function($ionicConfigProvider) {
  $ionicConfigProvider.tabs.position('bottom');
});



