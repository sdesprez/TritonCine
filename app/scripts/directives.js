'use strict';

angular.module('tritonCineApp')
	.directive('filmDisplay',function(){
		return{
			scope : {
				film:'=',
				show:'='
			},
			restrict: 'AEC',
			templateUrl: 'views/film.html'
		};
	});

angular.module('tritonCineApp')
	.directive('colonnesDisplay',function(){
		return{
			scope : {
				show:'='
			},
			restrict: 'AEC',
			templateUrl: 'views/nomColonnes.html'
		};
	});

angular.module('tritonCineApp')
	.directive('footerDisplay',function(){
		return{
			scope : {
				page:'='
			},
			restrict: 'AEC',
			templateUrl: 'views/footer.html'
		};
	});