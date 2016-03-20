$(document).ready(function() {
 $("#slider").owlCarousel({
 	
 	items:1,
 	navigation:true,
 });
})

var a = document.getElementById("myImage");
var atx = a.getContext("2d");
var img = new Image();   
img.onload = function(){
	atx.drawImage(img,10,10);
};
img.src = 'images/photo.jpg';