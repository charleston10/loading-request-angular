(function(angular,undefined){
  
  angular
		.module('app')
		.directive('loadingRequest',LoadingRequest);

  LoadingRequest.$inject = ['$http','$rootScope'];

  function LoadingRequest($http,$rootScope) {
    return function(scope, elem, attr) {
        $rootScope.spinnerActive = false;
        
        scope.isLoading = function () {
            return $http.pendingRequests.length > 0;
        };

        scope.$watch(scope.isLoading, function (loading){
            $rootScope.spinnerActive = loading;
            if(loading){
                elem.removeClass('ng-hide');
            }else{
                elem.addClass('ng-hide');
            }
        });
    };
  }
})(angular);