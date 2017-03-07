$("#navigation").addClass("js");
$("#navigation").addClass("js").before('<div id="menu">☰</div>');
$("#menu").click(function(){
	$("#navigation").toggle();
});
