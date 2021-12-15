$(document).ready(function(){

	var $mainMenuItems = $("#main-menu ul").children("li"),
	totalManiMenuItems = $mainMenuItems.length,
	openedIndex = 2;

	var init = function(){
		bindEvents();
		if(validIndex(openedIndex))
		animateItem($mainMenuItems.eq(openedIndex), true, 800);
	},

	bindEvents = function(){
		$mainMenuItems.children(".images").click(function(){
			var newIndex = $(this).parent().index();
			checkAnimateItem(newIndex);

			
		});

		$(".button").hover(function(){
				$(this).addClass("hovered");
		},
		function(){
				$(this).removeClass("hovered");
		});

		$(".button").click(function(){
				var newIndex = $(this).index();

			checkAnimateItem(newIndex);

		});
	},

	validIndex = function(indexTocheck){
		return(indexTocheck >= 0)&& (indexTocheck <totalManiMenuItems);
	},

	animateItem = function($item, toOpen, speed){
		var	$colorImage = $item.find(".color");
		itemParam = toOpen ? {width:"420px"}: {width:"140px"},

		colorimageParam = toOpen ? {left:"0px"}:{left:"140px"};

		$colorImage.animate(colorimageParam, speed);
		$item.animate(itemParam, speed);
		
	},
	 checkAnimateItem = function(indexTocheckAndAnimate){

			if(openedIndex === indexTocheckAndAnimate)
			{
				animateItem($mainMenuItems.eq(indexTocheckAndAnimate), false, 250);
			    openedIndex = -1;
			}
			else
			{
				if(validIndex(indexTocheckAndAnimate))
				{
					animateItem($mainMenuItems.eq(openedIndex), false,250);
					openedIndex = indexTocheckAndAnimate;
					animateItem($mainMenuItems.eq(openedIndex), true, 250);
				}
			}
	 }

	init();
});