function navigate(){
	$('html, body').animate({scrollTop: $("#content").offset().top}, 500);
};

function show_services(){
	$('#pos_loan').hide();
	$('#pos_deposit').hide();
	$('#first').show(1000);
	$('#deposits').hide(1000);
	$('#loans').hide(1000);
	$('#Dbanks').hide(1000);
	$('#banks').hide(1000);
	$('#pos_bank').hide();
};

function show_loans(){
	$('#first').hide(1000);
	$('#loans').show(1000);
	$('#pos_loan').show();
	$('#banks').hide(1000);
	$('#Dbanks').hide(1000);
	$('#pos_bank').hide();
};

function show_deposits(){
	$('#first').hide(1000);
	$('#deposits').show(1000);
	$('#pos_deposit').show();
	$('#banks').hide(1000);
	$('#Dbanks').hide(1000);
	$('#pos_bank').hide();
};

function show_banks(){
	$('#deposits').hide(1000);
	$('#loans').hide(1000);
	$('#banks').show(500);
	$('#pos_bank').show();
};

function show_Dbanks(){
	$('#deposits').hide(1000);
	$('#loans').hide(1000);
	$('#Dbanks').show(1000);
	$('#pos_bank').show();
};
	
/*-----for responsive nav menu bar----*/
function slidemenu(){
    $("p.menu").stop(true,true).slideToggle();
};	


$(window).scroll(function() { 

	if ($(document).scrollTop() > 150) { /*-----If the user scrolls more than 150px----*/

		/*-----If the user hovers over menu items----*/
		$("p.menu" ).hover(function() {		
	          $(this).css("color", "#769CFB");
		} , function(){
			if($(window).width() > 768){ /*-----for responsive----*/
				$(this).css("color", "#383838");
			} else {
				$(this).css("color", "white");
			};
		});
			
		if($(window).width() > 768){ /*-----for responsive----*/
			$("p.menu").css("color", "#383838");
		} else {
			 $("p.menu").css("color", "white");
		};
				
		$("#menu2").fadeIn(500);

	} else { /*-----If the user scroll is not more than 150px----*/
		$("p.menu").css("color", "white"); 
		$("#menu2").fadeOut(250)
		$("#header").css("position", "absolute").css("margin-top","-0px");
		$("#line").css("background-color", "white");
		$("#menu").css("border-bottom", "none");

		$("p.menu" ).hover(function() {		
	          $(this).css("color", "#769CFB");
		} , function(){
				$(this).css("color", "white");
		});

	};

	if ($(document).scrollTop() > 250) { 
		$("#header").css("position","fixed").css("margin-top","-250px");
	}
	else{
		$("#header").css("position","absolute").css("margin-top","0px");  
	};

});
