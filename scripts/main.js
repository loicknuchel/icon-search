angular.module('app', [])

.controller('MainCtrl', function($scope, FontAwesomeSrv, UnicodeSrv){
  $scope.fontAwesome = FontAwesomeSrv.all;
  $scope.unicodes = UnicodeSrv.all;
});
