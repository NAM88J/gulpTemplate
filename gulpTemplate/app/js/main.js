$('.tab-nav').on('click', function(){
	var tabs = $(this).attr('data-tab');
	var tabfamily = $(this).attr('data-family');
	$('.tab-nav[data-family=' + tabfamily  + ']').removeClass('active');
	$(this).addClass('active');
	$('.tab[data-family=' + tabfamily  + ']').removeClass('active');
	$('.tab[data-tab=' + tabs  + '][data-family=' + tabfamily  + ']').addClass('active');
})
$('.tab-nav-fix').on('click', function(){
	var tabs = $(this).attr('data-tab');
	var tabfamily = $(this).attr('data-family');
	$(this).toggleClass('active');
	$('.tab[data-tab=' + tabs  + '][data-family=' + tabfamily  + ']').toggleClass('active');
})

$('.butnumber1tab').on('click', function(){
	$('.butnumber1tab').toggleClass('active');
	$('.tabss1').toggleClass('active');
	$('.butnumber2tab').removeClass('active');
	$('.tabss2').removeClass('active');
})
$('.butnumber2tab').on('click', function(){
	$('.butnumber2tab').toggleClass('active');
	$('.tabss2').toggleClass('active');
	$('.butnumber1tab').removeClass('active');
	$('.tabss1').removeClass('active');
})

$('.remember, .item-have, .checed-product, .pravila p').on('click', function(){
	$(this).toggleClass('active');
})
$('.forjqeryshop').on('click', function(){
	$('.forjqeryshop').removeClass('active');
	$(this).addClass('active');
})

$('.next-step').on('click', function(){
	$('.hiden-step').addClass('active');
	$('.order-final').addClass('active');
})
$('.slider-brend-home').slick({
	slidesToShow: 4,
	slidesToScroll: 1,
	responsive: [
		{
			breakpoint: 719,
				settings: {
					slidesToShow: 2
			}
		},
	]
});

$('.slider-product').slick({
	slidesToShow: 3,
	slidesToScroll: 1,
	responsive: [
		{
			breakpoint: 719,
				settings: {
					slidesToShow: 1,
					centerMode: true,
			}
		},
	]
});
$('.slider-recomend').slick({
	slidesToShow: 3,
	slidesToScroll: 1,
	centerMode: true,
	responsive: [
		{
			breakpoint: 1200,
				settings: {
					centerMode: false
			}
		},
		{
			breakpoint: 719,
				settings: {
					slidesToShow: 1,
			}
		},
	]
});
$('.slider-thumb-midle').slick({
	slidesToShow: 1,
	slidesToScroll: 1,
	arrows: false,
	fade: true,
	asNavFor: '.slider-thumb-nav'
});
$('.slider-thumb-nav').slick({
	slidesToShow: 2,
	slidesToScroll: 1,
	asNavFor: '.slider-thumb-midle',
	dots: false,
	vertical: true,
	focusOnSelect: true
});
$('.baner-slider').slick({
	dots:true
});

$('.increase').on('click', function(){
	var quantity = $(this).parent().find('.quantity').val();
	$(this).parent().find('.quantity').val(+quantity + 1)
});
$('.decrease').on('click', function(){
	var quantity = $(this).parent().find('.quantity').val();
	if (quantity > 1 ) {
		$(this).parent().find('.quantity').val(quantity - 1)
	} else {}
});

$('.incart').on('click', function(){
	var quantitiCart = $(this).parent().parent().find('.quantity').val()
	var cartNumber = $('#number-tov').text();
	var calc = Number(quantitiCart) + Number(cartNumber);
	$('.number-item-order').text(calc);
	console.log(calc)
})

$('.name-drop-block').on('click', function(){
	$(this).toggleClass('active');
	$(this).parent().find('.drop-area').toggleClass('active');
})
$('.fix-title-filter-mob').on('click', function(){
	$('.mobile-filter').fadeIn(500);
})
$(document).ready(function(){
	var wd = screen.width;
	$(window).resize(function(){
		var wd = screen.width;
		if (wd < 1200) {
			$('.cut-blok-brend, .filter-full').appendTo($('.fix-mobile-past'));
		} else {
			$('.cut-blok-brend, .filter-full').appendTo($('.fix-mobile-return'));
		}
	})
	if (wd < 1200) {
		$('.cut-blok-brend, .filter-full').appendTo($('.fix-mobile-past'));
	} else {
		$('.cut-blok-brend, .filter-full').appendTo($('.fix-mobile-return'));
	}
})
$('.open-input p').on('click', function(){
	$(this).parent().find('input, button, span').toggle();
})
$( function() {
	$('#slider-range').slider({
		range: true,
		min: 0,
		max: 100000,
		values: [ 10000, 90000 ],
		slide: function( event, ui ) {
			$('#minCost').val(ui.values[ 0 ]);
			$('#maxCost').val(ui.values[ 1 ]);
		}
});
$('#minCost').val($('#slider-range').slider('values', 0 ));
$('#maxCost').val($('#slider-range').slider('values', 1 ));
$('#slider-range span').last().addClass('rotate');
});

$('.mob-menu').on('click', function(){
	$('header, .podlojka').fadeIn(500);
})

$('header .closed').on('click', function(){
	$('header, .podlojka').fadeOut(500);
})
$('.fix-title-filter-mob').on('click', function(){
	$('.filter-full, .podlojka').fadeIn(500);
})
$('.filter-full .closed').on('click', function(){
	$('.filter-full, .podlojka').fadeOut(500);
})


$('.modal-but-vxod, .checinpanel').on('click', function(){
	$('.vxod').fadeIn(500);
})
$('.vxod .closvxod').on('click', function(){
	$('.vxod').fadeOut(500);
})

$('.gootzuv').on('click', function(){
	$('.otzuvmod, .podlojka').fadeIn(500);
})
$('.otzuvmod .closvxod, .thank-you').on('click', function(){
	$('.otzuvmod, .podlojka').fadeOut(500);
})
$('.otzuvmod .sent-testi').on('click', function(){
	$('.otzuvmod').fadeOut(200);
	$('.thank-you').fadeIn(1000);
	setTimeout(function() {
	  $('.thank-you, .podlojka').fadeOut(1000);
	}, 1600);
	return false;
})

$('.login-link .checinpanel').on('click', function(){
	$('header, .podlojka').fadeOut(500);
	$('.vxod').fadeIn(500);
})


$('.phone-button, .order-call, .phone-ordery').on('click', function(){
	$('.zvonok, .podlojka').fadeIn(500);
})
$('.zvonok .closvxod').on('click', function(){
	$('.zvonok, .podlojka').fadeOut(500);
})
$('.file-ordery').on('click', function(){
	$('.file-send, .podlojka').fadeIn(500);
})
$('.file-send .closvxod').on('click', function(){
	$('.file-send, .podlojka').fadeOut(500);
})

$('.local').on('click', function(){
	$('.gorod-dost, .podlojka').fadeIn(500);
})
$('.gorod-dost .closvxod').on('click', function(){
	$('.gorod-dost, .podlojka').fadeOut(500);
})

$('.baner-slider').on('click', function(){
	$('.presents, .podlojka').fadeIn(500);
})
$('.presents .closvxod').on('click', function(){
	$('.presents, .podlojka').fadeOut(500);
})
$('.sersh-button').on('click', function(){
	$('.container-sersh').toggle();
})

$('.cat-nav li.unit').on('click', function(){
	var brend = $(this).attr('data-bfend')
	if (brend == 'all') {
		$('.catalog > div').removeClass('hiden');
	} else {
		$('.catalog > div').addClass('hiden');
		$('.catalog > div[data-bfend=' + brend  + ']').removeClass('hiden');
	}
});
$('.chnge').on('click', function(){
	$('.change').toggle();
})
jQuery("document").ready(function($){
	var nav = $('.fixedmenu');
	$(window).scroll(function () {
		if ($(this).scrollTop() > 61) {
			$('.fixed-top').addClass("f-nav");
		} else {
			$('.fixed-top').removeClass("f-nav");
		}
	});
});

$('.optionthis, .brends-nav ul li').on('click', function(){
	$('.optionthis, .brends-nav ul li').removeClass('active');
	$(this).addClass('active');
})