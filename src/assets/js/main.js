'use strict';

$(function () {
  /*
      https://www.jqueryscript.net/animation/Smooth-Mouse-Wheel-Scrolling-Plugin-With-jQuery-easeScroll.html
      ===========================*/
	$("html").easeScroll({
		frameRate: 60,
		animationTime: 1000,
		stepSize: 90,
		pulseAlgorithm: 1,
		pulseScale: 8,
		pulseNormalize: 1,
		accelerationDelta: 20,
		accelerationMax: 1,
		keyboardSupport: true,
		arrowScroll: 50,
		touchpadSupport: true,
		fixedBackground: true
	});

	//drop down menu

	let mainNavDropdowItemHover = () => {
		$('.main-nav-dropdown__item').hover(function (e) {
			// Получаем родителя
			let parentList = $(this).closest('.main-nav-dropdown__list');
			let childrenList = $(this).children('.main-nav-dropdown__list-sub');

			if (childrenList.length) {
				parentList.css('width', '720px');

				if (parentList.outerHeight() < childrenList.outerHeight()) {
					parentList.css('height', childrenList.outerHeight());
				}
			}
		}, function () {
			let parentList = $(this).closest('.main-nav-dropdown__list');
			parentList.css('width', 'auto');
			parentList.css('height', 'auto');
		});
	}

	//show search form
	let searchForm = () => {
		let headerSearchIcon = $('.header-search-icon');

		headerSearchIcon.on('click', function () {
			$(this).parent().addClass('search--open');
		});
	}

	let clearSearchForm = () => {
		$('#js-search__clear .search__icon').on('click', function () {
			$('#js-search__input').val('');
		});
	}

	let closeSearchForm = () => {
		$('.search__form').on('submit', function () {
			$('.main-nav__search').removeClass('search--open');
		});
	}

	mainNavDropdowItemHover();
	searchForm();
	clearSearchForm();

});



