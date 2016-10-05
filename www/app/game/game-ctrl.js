function playlistShuffle(){
  index = Math.floor(Math.random() * userPlaylistSongs.length + 1)
  return userPlaylistSongs[index]
}

karaoke.controller('GameCtrl', ['$http', '$scope', function($http, $scope){

    $scope.myTrigger = false;
    $scope.btnClick = function () {
      $scope.myTrigger = !$scope.myTrigger;
    };
    console.log('inscope');
}]).directive('slot', ['$animate', function ($animate) {
    var der = {
        restrict: 'E',
        template: '<div class="slots" id="slots"><div class="wrapper"></div></div>',
        fn: {
            opts: ['Abraham','Bob','Carter','Doug','Fred'],
            go: function (elem) {
                der.fn.addSlots(elem);
                der.fn.moveSlots(elem);
            },
            addSlots: function (elem) {
                for(var i = 0; i < 15; i++){
                    var ctr = Math.floor(Math.random()*der.fn.opts.length);
                    elem.append("<div class='slot'>"+der.fn.opts[ctr]+"</div>");
                }
            },
            moveSlots: function (elem) {
                var marginTop = parseInt(elem.css("margin-top"), 10);
                marginTop -= (7 * 100);

                var time = 600;
                time += Math.round(Math.random()*1000);
                elem.stop(true,true);

                elem.animate({"margin-top": marginTop+"px"},{'duration' : time});
            }
        },
        link: function (scope, ele, attrs) {
            if (attrs.trigger && attrs.trigger !== undefined) {
                if (scope[attrs.trigger] !== undefined) {
                    scope.$watch(attrs.trigger, function (newValue, oldValue) {
                        if (newValue) {
                            der.fn.go($('#slots .wrapper'));
                        }
                    });
                }
            }
        }
    };
    console.log(der)
    return der;
}]);
