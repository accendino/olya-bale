$(document).ready(function(){
	console.log("User JS");

	var emailField = $("input[name ='email']");
	var emailErrorMessage = $('div[data-error-message="email"]');
	var passwordField = $("input[name ='password']");
	var passwordErrorMessage = $('div[data-error-message="password"]');

	var requiredClass = 'hidden';	

	//---------------------------------------------------------------------
	// FORM SUBMIT ACTION
	$("#authenticate-form").on("submit", function(e){

		var emailFieldValue = $("input[name ='email']").val(); // ""
		var passwordFieldValue = $("input[name ='password']").val(); // ""

		// *  *  *  *  *  *
		e.preventDefault();
		// *  *  *  *  *  *

		var isValid = false;

		// E-MAIL CHECK
		if ( emailFieldValue == "" ){
			isValid = false;
			emailErrorMessage.addClass("visible");
		} else {
			isValid = true;
		}
		// *  *  *  *  *  *

		// PASSWORD CHECK
		isValid = false;
		if ( passwordFieldValue == "" ){
			isValid = false;
			passwordErrorMessage.addClass("visible");
		} else {
			isValid = true;
		}
		// *  *  *  *  *  *

	});
	//     *     *     *     *     * 

	      // HIDE ERRORS ON KEYUP

	emailField.on("keyup", function() {
		if ( emailErrorMessage.hasClass("visible")) {
		 	emailErrorMessage.removeClass("visible");
		}
	});

	passwordField.on("keyup", function() {
		if ( passwordErrorMessage.hasClass("visible")) {
 			passwordErrorMessage.removeClass("visible");
		}
	});

	//---------------------------------------------------------------------
	// REVIEW SUBMIT ACTION

	var writeReview = $("form[id = 'writeReview']");
	var writeReviewTextarea = $("form[id = 'writeReview'] textarea");
	var writeReviewError = $("form[id = 'writeReview'] .error");


	$(writeReview).on("submit", function(e){

		var reviewFieldValue = $(writeReviewTextarea).val();
		e.preventDefault();

		// REVIEW CHECK
		var isValid = false;
		if ( reviewFieldValue == "" ){
			isValid = false;
			$(writeReviewError).removeClass("hidden");
		} else {
			isValid = true;
		}
	});
	//     *     *     *     *     *

	      // HIDE ERROR ON KEYUP

	$(writeReviewTextarea).on("keyup", function() {
 		$(writeReviewError).addClass("hidden");
	});

	//---------------------------------------------------------------------
	// PLACEHOLDERS / get better!!! :)
/*
	$(emailField).on('focus', function(){
		$(this).attr('placeholder', '');
	});
	$(emailField).on('blur', function(){
		$(this).attr('placeholder', 'E-mail');
	});

	//     *     *     *     *     * 
	$(passwordField).on('focus', function(){
		$(this).attr('placeholder', '');
	});
	$(passwordField).on('blur', function(){
		$(this).attr('placeholder', 'Пароль');
	});

	//     *     *     *     *     * 
	$('textarea').on('focus', function(){
		$(this).attr('placeholder', '');
	});
	$('textarea').on('blur', function(){
		$(this).attr('placeholder', 'Присоединиться к обсуждению...');
	});
*/

    
    // Improved placeholders Handler
	var placeHolderSave;
	
	$('input, textarea').on('focus', function(){
		placeHolderSave = $(this).attr('placeholder');
		$(this).attr('placeholder', '');
	});

	$('input, textarea').on('blur', function(){
		$(this).attr('placeholder', placeHolderSave);
	});
	
	//---------------------------------------------------------------------
	// ADMIN PANNEL SMALL SCREEN -- ADMIN TABS

	var adminNavOne = $(".admin-tab[id='admin-nav-1']");
	var adminNavTwo = $(".admin-tab[id='admin-nav-2']");

	var adminNavBlockOne = $(".admin-nav-single-block[id='admin-nav-block-1']");
	var adminNavBlockTwo = $(".admin-nav-single-block[id='admin-nav-block-2']");

	//$(adminNavOne).focus();

	$(adminNavTwo).on('click', function(){
		if ($(adminNavBlockTwo).hasClass(requiredClass) ){
			$(adminNavBlockTwo).removeClass(requiredClass);
		    $(adminNavBlockOne).addClass(requiredClass);
		}				
	});

	$(adminNavOne).on('click', function(){
		if ($(adminNavBlockOne).hasClass(requiredClass) ){
			$(adminNavBlockOne).removeClass(requiredClass);
		    $(adminNavBlockTwo).addClass(requiredClass);
		}		
	});
	//---------------------------------------------------------------------
	// ADMIN PANNEL SMALL SCREEN -- MAIN NAVIGATION BUTTON

	var buttonForOpen = $(".fa-bars[id='open__navigation__button']");
	var buttonForClose = $(".fa-times[id='close__navigation__button']");

	var navigationSmallSlide = $(".navigation__slide[id='navigation__slide']");

	$(buttonForOpen).on('click', function(){
		if ($(navigationSmallSlide).hasClass(requiredClass) ){
			$(navigationSmallSlide).removeClass(requiredClass);
		}
		$(buttonForOpen).addClass(requiredClass);
	    $(adminNavOne).focus();
	});

	$(buttonForClose).on('click', function(){
		$(navigationSmallSlide).addClass(requiredClass);
		$(buttonForOpen).removeClass(requiredClass);
			
	});
	//---------------------------------------------------------------------


});