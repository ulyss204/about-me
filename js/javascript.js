$(document).ready(function() {
 	$("#slider").owlCarousel({
 	
 		items:1,
 		navigation:true,
 		autoWidth: true,
 		
 	});
 	$('#select').click(function(){
		$('#country').toggle();
	});
 	$('#select__span').click(function(){
		$('#country').toggle();
	});
	$('#country li').each(function(){
		$('#country li').click(function(){
			$('#country').hide();
			c.value = this.innerHTML;
		});
	});

		
	
 })
var c = document.getElementById('select');

var a = document.getElementById("myImage");
var atx = a.getContext("2d");
var img = new Image();   
img.onload = function(){
	atx.drawImage(img,10,10);
};
img.src = 'images/photo.jpg';
