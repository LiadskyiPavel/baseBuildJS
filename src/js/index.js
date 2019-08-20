// import $ from 'jquery';
$(document).ready(function() {

	$('.navbar input').addClass('searchEngine');

	$('.searchEngine').hide();

	$('.navbar button').addClass('searchButton');

	$('.searchButton').on('click', () => {
		$('.searchEngine').show(500).toggleClass('open')
	});

	let search = $('.searchEngine');
	let btn = $('searchButton');

	$(document).mouseup( function(e) {

		if (!search.is(e.target)) {
				search.hide(500).removeClass('open')
		};
			
	});

	search.focus( function() {
		if ($(this).val() === 'Search') {
			console.log(this.val())
		} else {
			btn.off()
		}
	});
		// if ($('.open'))  {
		// 	$('.serchButton').off('click');
			// btn.submit()
		// }
			// .submit()




});