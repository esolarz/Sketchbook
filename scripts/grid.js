var num = 16;

$(document).ready(function(){
	var myDiv = $("<div></div>");
	fillGrid(num);
	hover_action();
});

function fillGrid(num){
	for(var i = 0; i<num*num; ++i)
		$('.container').append("<div></div>");
	var h = $('.container').height();
	var dim= h/num;
	$(".container div").height(dim);
	$(".container div").width(dim);
}

function clear_grid(){
	$(".container").empty();
	fillGrid(num);
	hover_action();
}

function resize_grid(){
	$(".container").empty();
	num = prompt("How large should the new grid be?"); 
	fillGrid(num);
	hover_action();
}

function hover_action(){
	$(".container div").hover(
		function(){
			if($(this).attr('class') === "hover"){
				var op = parseFloat($(this).css("opacity")) + 0.1;
				$(this).css('opacity',op);
			}else{
				$(this).addClass('hover');		
				var r = Math.random() * 255;
				r = Math.trunc(r);
				var g = Math.random() * 255;
				g = Math.trunc(g);
				var b = Math.random() * 255;
				b = Math.trunc(b);
				$(this).css("opacity",.10);
				$(this).css("background-color","rgb(" + r + "," + g + "," + b + ")");

			}
		},function(){}	
	);
}

