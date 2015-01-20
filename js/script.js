$(document).ready(function() {
	var infoCarouselPosition;
	var iconCarouselPosition;
	var carouselInfo = 60;
	var carouselIcon = 64;
	var carouselLength = 300;
	var spectrumCount = 0;

	var carouselInterval = setInterval(function(){

		infoCarouselPosition = parseInt($('#cover-info-carousel').css('margin-top').replace("px", ""));
	    iconCarouselPosition = parseInt($('#cover-info-icons').css('margin-top').replace("px", ""));

	    if (infoCarouselPosition < 0){
	      var updatedInfo = infoCarouselPosition + carouselInfo;
	      var updatedIcon = iconCarouselPosition - carouselIcon;
	      
	      $('#cover-info-carousel').css({'margin-top': updatedInfo+'px'});
	      $('#cover-info-icons').css({'margin-top': updatedIcon+'px'});
	      
	    } else {
	      	
	    	$('#cover-info-carousel').css({'margin-top': '-300px'});
	      	$('#cover-info-icons').css({'margin-top': '0px'});
	    }
	}, 3000);

	var sidebar;

	$('#sidebar-button').click(function(){
		sidebar = $('.sidebar-container').hasClass('sidebar-active');
		if (sidebar){
			$('#sidebar-button').removeClass('button-active');
			$('.sidebar-container').removeClass('sidebar-active');
		} else {
			$('#sidebar-button').addClass('button-active');
			$('.sidebar-container').addClass('sidebar-active');
		}
	});

	$('.wrapper').click(function(){
		sidebar = $('.sidebar-container').hasClass('sidebar-active');
		if (sidebar){
			$('#sidebar-button').removeClass('button-active');
			$('.sidebar-container').removeClass('sidebar-active');
		}
	});

	var offset = -6;
	var idToPosition = {
		'nav-top': 0,
		'nav-about': $('#about-wrapper').position().top,
		'nav-web': $('#portfolio-web-wrapper').position().top - offset,
		'nav-prog': $('#portfolio-programming-wrapper').position().top - offset,
		'nav-contact': $('#contact-wrapper').position().top,
	}
	$('.nav-item').click(function(){
		var id = $(this).attr('id');
		var pos = parseInt(idToPosition[id]);

		$("html, body").animate({ scrollTop: pos }, "slow");
	});

	$('.exhibit-link').hover(function(){
			var $this = $(this);
			$this.next().css('background-color', 'rgba(0, 0, 0, 0.8)');
			$this.next().text('View');
			$this.next().next().addClass('photo-zoom-hover');
		}, function(){
			var $this = $(this);
			$this.next().css('background-color', 'rgba(0, 0, 0, 0)');
			$this.next().text('');
			$this.next().next().removeClass('photo-zoom-hover');
		}

	);

	$('.covervid-video').coverVid(1920, 1080);
});