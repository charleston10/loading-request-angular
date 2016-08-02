(function(angular,undefined){
  
  angular
		.module('app')
		.directive('hideRequest',HideRequest);

  HideRequest.$inject = ['$http','$rootScope'];

  function HideRequest($http,$rootScope) {
    return function(scope, elem, attr) {
        $rootScope.spinnerActive = false;
        
        scope.isLoading = function () {
            return $http.pendingRequests.length > 0;
        };

        scope.$watch(scope.isLoading, function (loading){
            $rootScope.spinnerActive = loading;
            if(loading){
                elem.addClass('ng-hide');
            }else{
                elem.removeClass('ng-hide');
            }
        });
    };
  }
})(angular);