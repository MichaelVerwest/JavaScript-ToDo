$(function(){
	var tdList = $("#tdList");
	var inputSmall = $("#input-small");
	var inputBig = $("#input-big");

	var displaytdList = function(){
		if(!tdList.children().length){
			tdList.css("display", "block");
		}else{
			tdList.css("display", "none");
		}
	};

	$("#addButton").on("click", function(){
		if(!inputSmall.val() || !inputBig.val()){
			alert("Заполните все поля!");
			return false;
		}
		tdList.append("<li><div class='nameTask'>" + inputSmall.val() + " " + "<button class='delete'>&#1008;</button></div><hr><div class='descrTask'>" + inputBig.val() + "</div></hr></li>");
		inputBig.val("");
		inputSmall.val("");
		$(".delete").on("click", function(){
			$(this).closest('li').remove();
		});
	});
});