'use strict';

angular.module('tritonCineApp')
  .controller('MainCtrl', function ($scope,$http) {
    $scope.orderProp='fields.rang';
    $http.get('http://public.opendatasoft.com/api/records/1.0/search?dataset=les-plus-grands-succes-du-cinema-depuis-1945&rows=200')
    .success(function(data){
      $scope.liste=data.records;
    });

    $scope.rang='fields.rang';
    $scope.titre='fields.titre';
    $scope.realisateur='fields.realisateur';
    $scope.nationalite='fields.nationalite';
    $scope.annee='fields.annee_de_sortie';
    $scope.trier=function(ordre){
      if($scope.orderProp===ordre){
        $scope.orderProp='-'+ordre;
      }
      else{
        $scope.orderProp=ordre;
      }
    };
  });


angular.module('tritonCineApp')
  .controller('RealisateurCtrl',function ($scope,$http,$routeParams) {
    $scope.realisateur=$routeParams.realisateur;
    $scope.orderProp='fields.rang';
    $http.get('http://public.opendatasoft.com/api/records/1.0/search?dataset=les-plus-grands-succes-du-cinema-depuis-1945&rows=200&refine.realisateur='+$scope.realisateur)
    .success(function(data){
      $scope.films=data;
    });
    $scope.rang='fields.rang';
    $scope.titre='fields.titre';
    $scope.nationalite='fields.nationalite';
    $scope.annee='fields.annee_de_sortie';
    $scope.trier=function(ordre){
      if($scope.orderProp===ordre){
        $scope.orderProp='-'+ordre;
      }
      else{
        $scope.orderProp=ordre;
      }
    };
  });


angular.module('tritonCineApp')
  .controller('DescriptionCtrl',function ($scope,$http,$routeParams) {
    $scope.titre=$routeParams.titre;
    var uri = '?format=JSONP&callback=JSON_CALLBACK&title='+$scope.titre;
    var res = encodeURI(uri);
    $http.jsonp('http://www.myapifilms.com/search'+res)
    .success(function(data){
      $scope.informations=data[0];
    });
  });


angular.module('tritonCineApp')
  .controller('ContactCtrl',function ($scope) {

});


angular.module('tritonCineApp')
  .controller('AboutCtrl',function ($scope) {

});
