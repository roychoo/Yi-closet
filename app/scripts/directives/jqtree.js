angular.module('YiClosetApp')
	.directive('jqtree', function(){
		return {
			restrict: 'E',
			replace: true,
			scope: true,
			template:'<div class="title">{{test}}</div>'
		}
	});