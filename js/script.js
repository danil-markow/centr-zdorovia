$(document).ready(function () {
	if (document.querySelector('.slider-result')) {
		$('.slider-result').slick({
			infinite: true,
			slidesToShow: 3,
			arrows: true,
			slidesToScroll: 1,
			prevArrow: document.querySelector('.result__btn_prev'),
			nextArrow: document.querySelector('.result__btn_next'),

			responsive: [
				{
					breakpoint: 950,
					settings: {
						slidesToShow: 2,
					}
				},
				{
					breakpoint: 670,
					settings: {
						slidesToShow: 1,
						arrows: false,
					}
				},
				{
					breakpoint: 470,
					settings: {
						slidesToShow: 1,
						arrows: false,
						dots: true,
					}
				},
			],
		});
	}
});