/*
Theme Name: Ace
Author URI: http://mishostudio.com
Description: Coming soon web page.
Author: @Shamanet
Version: 1.0
License: 
Copyright: (c) 2014 MISHO STUDIO
*/

//Responsive madness. Set values and sizes
var resizeData = function(){
	
	//Get Samsung Galaxy ilustration height
	var heightGalaxy = $('.samsung-galaxy').height();
	
	//Set screen capture height	
	$('.container-phone').css('height', heightGalaxy);	

	//Get size
	var clockHeight = $('section.clock .container').height();
	var windowHeight = $(window).height();
	var mapHeight = $('.map').outerHeight();
	
	//Set styles according to height
	if (clockHeight >= windowHeight) {
		
		//Modify HTML tags
		$('section.clock').css('height', 'auto');
		$('div.content').css('margin-top', 0);	
		$('section.clock').addClass('relative').removeClass('overlay');
		$('div.content').addClass('relative no-margin');
	
	} else {
			
		//Get margin size
		var marginClock = (windowHeight - clockHeight)/2;
		
		//Modify HTML tags
		$('section.clock').css('height', windowHeight);
		//$('div.content').css('margin-top', windowHeight);
		//$('section.clock .container').css('margin-top', marginClock );
		$('section.clock').removeClass('relative').addClass('overlay');
		$('div.content').removeClass('relative no-margin');
		}
	}
	
	//Call on resize and when the document it's ready
	$(document).on('ready', resizeData);
	$(window).on('resize', resizeData);

	//Set on resize.
	$(window).on('resize', function(){
		$('.screen-galaxy').css('top', '0px');
	});

//All the other stuff
$(document).on('ready', function(){
	
	//Samsung Galaxy effect
	$('.container-screen').on('click', function(){
		
		//Get some numbers and do some math
		var screenGalaxy = $('.screen-galaxy').height();
		var containerScreen = $('.container-screen').height();
		var scope = (Math.round(screenGalaxy/containerScreen))-(screenGalaxy/containerScreen);
		var finalScope = screenGalaxy-containerScreen;
		
		//Bye-bye lock screen simulator
		$('.click-me').fadeOut();
		
		//Important: Don't change this value to 0 or something on the CSS file
		if($('.screen-galaxy').css('top') === '0px'){
		
			//Move up
			$('.screen-galaxy').stop().animate({'top':'-='+finalScope+'px'},2000);
		
		}else{
		
			//Move down
			$('.screen-galaxy').stop().animate({'top':'0px'},2000);
		
		}
	});
	
	//Set styles only when javascript is ready
	$('.container-phone').css('margin-right', '-100px');
	$('.icon img').css('margin-top', '-30px');
	$('.photo img').css('margin-right', '-640px');
	$('.map .container').css('opacity', '0');
	
	//Logo setup
	$('#logo').attr('src', 'img/' + logoFileName);
	$('#logo').attr('alt', companyName);
	
	//MailChimp
	$('#emailist').attr('action', mailChimpUrl);

	//Modify when scroll 
	$('section.about').waypoint(function(){ 
		$('.container-phone').animate({ marginRight: '0' }, 500);
		
		
	});
	$('section.services').waypoint(function(){ $('.icon img').animate({ marginTop: '0' }, 500); });
	$('section.team').waypoint(function(){ $('.photo img').animate({ marginRight: '0' }, 500); });
	$('section.contact').waypoint(function(){ $('.map .container').css('opacity', '1').addClass('fade-in'); });
	
	//Set background slider
	$.supersized({
		slide_interval: bigPicInterval,
		transition: 1,
		transition_speed: bigPicSpeed,
		slide_links: 'blank',
		slides: [
			{image: './img/slider/' + bigPic01, title : '', thumb : '', url : ''},
			{image: './img/slider/' + bigPic02, title : '', thumb : '', url : ''},  
			{image: './img/slider/' + bigPic03, title : '', thumb : '', url : ''}
		]
	});
	
	//Set countdown
	$('#countdown').countDown({
		targetDate:{
			'day': countDownDay,
			'month': countDownMonth,
			'year': countDownYear,
			'hour': countDownHour,
			'min': 	countDownMinute,
			'sec': countDownSecond
		}
	});

	//Set slider
	$('.carousel').carousel();
	
	//Contact form validation
	$('#contact').validate({
		//Validation rules
		rules:{
			name:{
				required:true,
				maxlength: 50
			},
			email:{
				required:true,
				email:true,
				maxlength: 50
			},
			message:{
				required:true,
				maxlength: 5000
			}
		},
		//Submit form						
		submitHandler:function(form) {
			//Submit button disabled after submission
			$("button[type='submit']").prop('disabled', true);
			//Use ajax to send data
			$.ajax({
   				type: 'post',
   				url: 'contact.php',
            	data: $('#contact').serialize(),
   				success: function(result){
					//Delete data after submission
	 				$('form').find('input, textarea').val('');
					//Success message
	 				$('#contact').append('<label class="sent">Your message has been sent, thanks.</label>');
	 				//Delete success message
					$('.sent').show().delay(5000).fadeOut(function(){ $(this).remove(); });
	 				//Submit button enablen after submission
					setTimeout(function(){ $("button[type='submit']").prop('disabled', false); },5000);
   				},
  
			});
		}			
	});	
});

//Google Maps API
function initialize(){
	var mapOptions = {    	
		zoom: 8,
    	center: new google.maps.LatLng(mapLatitude, mapLongitude),
    	mapTypeId: google.maps.MapTypeId.ROADMAP,
		disableDefaultUI: true,
		scrollwheel: false,
		styles: [{
    		"stylers": [
				{ "hue": mapHue },
				{ "lightness": mapLight },
				{ "saturation": mapSaturation }
			]
  		}]
  	};
	var map = new google.maps.Map(document.getElementById('map'), mapOptions);
}

function loadScript(){
	var script = document.createElement('script');
  	script.type = 'text/javascript';
  	script.src = 'https://maps.googleapis.com/maps/api/js?v=3.exp&sensor=false&' + 'callback=initialize';
  	document.body.appendChild(script);
}
window.onload = loadScript;	