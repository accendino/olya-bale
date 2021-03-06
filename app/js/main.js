$(document).ready(function(){
	console.log("User JS");

	// 1. SUBMIT ACTION: show and hide ERRORS
	var submitAction = function(submitObject, field, error) {
	    var requiredClass = 'hidden';

		// 1.1 FIELD CHECK, SHOW ERROR IF EMPTY
	    $(submitObject).on("submit", function(e){

		    var fieldValue = $(field).val();
		    e.preventDefault();

		    var isValid = false;
		    if ( fieldValue == "" ){
			    isValid = false;
			    $(error).removeClass(requiredClass);
		    } else {
			    isValid = true;
		    }
	    });

	    // 1.2 HIDE ERROR ON KEYUP
	    $(field).on("keyup", function() {
 		    $(error).addClass(requiredClass);
	    });
    
    };


    //CALL FUNCTION FOR E-MAIL FIELD
    submitAction($("#authenticate-form"), 
        	     $("input[name ='email']"), 
        	     $("#authenticate-form div[data-error-message='email']"));
    
    //CALL FUNCTION FOR PASSWORD FIELD
    submitAction($("#authenticate-form"), 
        	     $("input[name ='password']"), 
        	     $("#authenticate-form div[data-error-message='password']"));

    //CALL FUNCTION FOR REVIEW FIELD
    submitAction($("#writeReview"), 
        	     $("#writeReview textarea"), 
        	     $("#writeReview .error"));


	//--------------------------------------------------------------------- 

    // 2. PLACEHOLDERS HANDLE PATTERN MODULE
	(function(){

		var placeholdersHandler = {

			init: function(){
				// вызов внутренних функций
				this._setUpListeners();
			},

			_setUpListeners: function(){
				$('input, textarea').focus(placeholdersHandler._placeholdersRemoveMethod);
				$('input, textarea').blur(placeholdersHandler._placeholdersAddMethod);
			},

			_placeholdersRemoveMethod: function(){
				placeHolderSave = $(this).attr('placeholder');
		        $(this).attr('placeholder', '');
			},

			_placeholdersAddMethod: function(){
				$(this).attr('placeholder', placeHolderSave);
			},

		};

		placeholdersHandler.init();

	}());
	
	//---------------------------------------------------------------------
	
    // 3. SMALL SCREEN NAVIGATION PATTERN MODULE
    (function(){
	    var requiredClass = 'hidden';

	    // NAVIGATION SMALL SCREEN -- NAVIGATION MAIN BUTTONS

	    var buttonForOpen = $("#open__navigation__button");
	    var buttonForClose = $("#close__navigation__button");

	    var navigationSmallSlide = $("#navigation__slide");

	    // ADMIN PANNEL SMALL SCREEN -- ADMIN TABS

	    //var adminNavOne = $('#admin-nav-1');
	    //var adminNavTwo = $('#admin-nav-1');


	    var adminNavOne = $(".admin-tab[id='admin-nav-1']");
	    var adminNavTwo = $(".admin-tab[id='admin-nav-2']");

	    var adminNavBlockOne = $("#admin-nav-block-1");
	    var adminNavBlockTwo = $("#admin-nav-block-2");


		var navigationSmallScreen = {

			init: function(){
				// вызов внутренних функций
				this._setUpListeners();
			},

			_setUpListeners: function(){
				$(adminNavTwo).click(navigationSmallScreen._adminNavTwoMethod);
				$(adminNavOne).click(navigationSmallScreen._adminNavOneMethod);
				$(buttonForOpen).click(navigationSmallScreen._buttonForOpenMethod);
				$(buttonForClose).click(navigationSmallScreen._buttonForCloseMethod);				
			},

			_adminNavTwoMethod: function(){
				if ($(adminNavBlockTwo).hasClass(requiredClass) ){
			        $(adminNavBlockTwo).removeClass(requiredClass);
		            $(adminNavBlockOne).addClass(requiredClass);
		        }				
			},

			_adminNavOneMethod: function(){
				if ($(adminNavBlockOne).hasClass(requiredClass) ){
			        $(adminNavBlockOne).removeClass(requiredClass);
		            $(adminNavBlockTwo).addClass(requiredClass);
		        }				
			},

			_buttonForOpenMethod: function(){
				if ($(navigationSmallSlide).hasClass(requiredClass) ){
			        $(navigationSmallSlide).removeClass(requiredClass);
		        }
		        $(buttonForOpen).addClass(requiredClass);
	            $(adminNavOne).focus();				
			},

			_buttonForCloseMethod: function(){
				$(navigationSmallSlide).addClass(requiredClass);
		        $(buttonForOpen).removeClass(requiredClass);
			},

		};

		navigationSmallScreen.init();

	}());


});