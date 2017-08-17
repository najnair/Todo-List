//check off specifc to dos
// 
$("ul").on("click", "li",function(){
	$(this).toggleClass("completed");
})

$("ul").on("click", "span",function(event){
	$(this).parent().fadeOut(500,function(){
		$(this).remove();
	event.stopPropagation;
	});

});

$("input[type='text']").keypress(function(event){
	//grabbing a new todo when enter is pressed
	if(event.which === 13){
		var todoText = $(this).val();
		$(this).val("");
		$('ul').append("<li><span><i class='fa fa-trash' aria-hidden='true'></i></span> " + todoText + "</li>");
	}
})

$(".fa-plus").click(function(){
	$("input[type='text']").fadeToggle();
})
