(function() {
	'use strict';
	angular.module('Phoja')
	.controller('MainController', MainController);
	function MainController($http, $state) {

    var vm = this;
    vm.title = "Phoja Unlimited LLC";
		var win      = $(window),
		    fxel     = $('#nav'),
		    eloffset = fxel.offset().top;

		win.scroll(function() {
		    if (eloffset < win.scrollTop()) {
		        fxel.addClass("fixed");
		    } else {
		        fxel.removeClass("fixed");
		    }
		});


		vm.craft = function() {
			document.getElementById("#craft").addClass('active').then(function() {
				$state.go('Craft');

			})
		}



}
})();
