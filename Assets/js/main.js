/** @format */

function main() {
	(function () {
		'use strict';

		$('a.page-scroll').click(function () {
			if (
				location.pathname.replace(/^\//, '') ==
					this.pathname.replace(/^\//, '') &&
				location.hostname == this.hostname
			) {
				var target = $(this.hash);
				target = target.length
					? target
					: $('[name=' + this.hash.slice(1) + ']');
				if (target.length) {
					$('html,body').animate(
						{
							scrollTop: target.offset().top - 40,
						},
						900
					);
					return false;
				}
			}
		});

		// Show Menu on Book
		$(window).bind('scroll', function () {
			var navHeight = $(window).height() - 500;
			if ($(window).scrollTop() > navHeight) {
				$('.navbar-default').addClass('on');
			} else {
				$('.navbar-default').removeClass('on');
			}
		});

		$('body').scrollspy({
			target: '.navbar-default',
			offset: 80,
		});

		// Hide nav on click
		$('.navbar-nav li a').click(function (event) {
			// check if window is small enough so dropdown is created
			var toggle = $('.navbar-toggle').is(':visible');
			if (toggle) {
				$('.navbar-collapse').collapse('hide');
			}
		});

		// Nivo Lightbox
		$('.portfolio-item a').nivoLightbox({
			effect: 'slideDown',
			keyboardNav: true,
		});
	})();

	$(
		'#inline-popups,#inline-popups-2,#inline-popups-3,#inline-popups-4,#inline-popups-5,#inline-popups-6'
	).magnificPopup({
		delegate: 'a',
		removalDelay: 400, //delay removal by X to allow out-animation
		callbacks: {
			beforeOpen: function () {
				this.st.mainClass = this.st.el.attr('data-effect');
			},
		},
		midClick: true,
	});
}
main();
