/*=================================================
true = yes/enable
false = no/disable
1000 = 1 seconds
=================================================*/

/*=================================================
preloader
=================================================*/
var __preloaderFadeOut = 1200; // fadeout
var __preloaderDelay = 100; // delay

/*=================================================
color
=================================================*/
var __color = 'blue'; // red, blue, green, pink, brown

/*=================================================
bg style
=================================================*/
var __bgStyle = 4; // 1 = single image, 2 = static image, 3 = slideshow, 4 = youtube video

/*=================================================
slideshow
=================================================*/
var __imageAmount = 3; // image amount
var __slideshowDuration = 5000; // duration
var __slideshowDelay = 800; // delay

/*=================================================
youtube video
=================================================*/
var __youtubeUrl = 'https://www.youtube.com/watch?v=Pa-EOdsV7bE'; // youtube video url
var __videoStart = 0; // start time (seconds)
var __videoEnd = 16; // end time (seconds)
var __videoLoop = true; // loop
var __videoMute = false; // mute

/*=================================================
countdown
=================================================*/
var __countdown = true; // countdown toggle
var __countdownDate = "03/28/2016 23:59:59"; // 2015-12-24 23:59:59
var __countdownTimezone = "-7"; // timezone

/*=================================================
contact
=================================================*/
var __contactEmail = 'nick@scifindr.com'; // contact email address
var __contactSuccess = '<i class="icons fa fa-check valid"></i> message has been sent'; // success submit message
var __contactInputError = '<i class="icons fa fa-close error"></i> all fields are required'; // input error message
var __contactEmailError = '<i class="icons fa fa-close error"></i> email address is invalid'; // email error message

/*=================================================
subscribe
=================================================*/
var __subscribeEmail = 'nick@scifindr.com'; // subscribe email address
var __subscribeSuccess = '<i class="icons fa fa-check valid"></i> thank you for subscribing'; // subscribe success message
var __subscribeError = '<i class="icons fa fa-close error"></i> email address is invalid'; // subscribe error message

/* mailchimp */
var __mailChimp = false; // true = mailchimp form, false = php subscribe form
var __mailChimpUrl = 'http://totalpctuneup.us7.list-manage1.com/subscribe/post?u=655ef6606d3fdf211ebbf9abf&amp;id=0c51c6bc23'; // mailchimp post url

$.ajaxChimp.translations.eng = { // custom mailchimp message
  'submit': 'please wait',
  0: '<i class="icons fa fa-check"></i> we have sent you a confirmation email',
  1: '<i class="icons fa fa-close"></i> enter a valid e-mail address',
  2: '<i class="icons fa fa-close"></i> e-mail address is not valid',
  3: '<i class="icons fa fa-close"></i> e-mail address is not valid',
  4: '<i class="icons fa fa-close"></i> e-mail address is not valid',
  5: '<i class="icons fa fa-close"></i> e-mail address is not valid'
}

// dedault message for reference

// Submit Message
// 'submit': 'Submitting...'
// Mailchimp Responses
// 0: 'We have sent you a confirmation email'
// 1: 'Please enter a value'
// 2: 'An email address must contain a single @'
// 3: 'The domain portion of the email address is invalid (the portion after the @: )'
// 4: 'The username portion of the email address is invalid (the portion before the @: )'
// 5: 'This email address looks fake or invalid. Please enter a real email address'

/*=================================================
disable section, true = disable, false = enable
last value without comma
=================================================*/
var __disableSection = {
  about : false, // about
  services : false, // service
  contact : false // contact
};