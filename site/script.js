$(document).ready(function(){
	$('.BoutonMenu').click(function(){
		$('.navbar .menu').toggleClass("active");
		$('.BoutonMenu i').toggleClass("active");
		$('.Accueil button').toggleClass("active");
	});
});