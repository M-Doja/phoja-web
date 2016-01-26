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
		
		 vm.openNav = function() {
				document.getElementById("mySidenav").style.width = "250px";
		}
		vm.closeNav = function() {
				document.getElementById("mySidenav").style.width = "0";
		}




}
})();
