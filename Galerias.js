/*
Navegacion con Jquery

<script src="https://code.jquery.com/jquery-3.2.1.min.js"></script>


$(document).ready(function(){
	$('ul.tabs li a:first').addClass('active');
	$('.galerias article').hide();
	$('.galerias article:first').show();
	
	$('ul.tabs li a').click(function(){
		$('ul.tabs li a').removeClass('active');
        $(this).addClass('active');
		$('.galerias article').hide();

    var activeTab = $(this).attr('href');
    $(activeTab).show();	
	return false;
	}); 
});

$(document).ready(function(){
		
	$('.galerias article').hide();
	$('.galerias article:first').show();
	
	$('.ventanas').click(function(){
		
        $(this).addClass('activeMovil');
		$('.galerias article').hide();

    var activeTab = $(this).attr('href');
    $(activeTab).show();	
	return false;
	}); 
});

