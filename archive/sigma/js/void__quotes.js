
//jQuery: Shuffle Plugin
(function($){

    $.fn.shuffle = function() {

        var allElems = this.get(),
            getRandom = function(max) {
                return Math.floor(Math.random() * max);
            },
            shuffled = $.map(allElems, function(){
                var random = getRandom(allElems.length),
                    randEl = $(allElems[random]).clone(true)[0];
                allElems.splice(random, 1);
                return randEl;
           });

        this.each(function(i){
            $(this).replaceWith($(shuffled[i]));
        });

        return $(shuffled);
        var color = ["navy","teal","mustard"];
        var color = colors[Math.floor(colors.length * Math.random())];
        $(function(){
          $("#dump").append(color[i]);
          console.log(color);
        });

    };

})(jQuery);

// Shuffle all list items within a list:
$('ul#cyclelist li').shuffle();


//Cycle Through a List
$(document).ready(function() {
	var j = 0;
	var delay = 10000; //millisecond delay between cycles
	function cycleThru(){
		var jmax = $("ul#cyclelist li").length -1;
		$("ul#cyclelist li:eq(" + j + ")")
			.animate({"opacity" : "1"}, 900)
			.animate({"opacity" : "1"}, delay)
			.animate({"opacity" : "0"}, 400, function(){
				(j == jmax) ? j=0 : j++;
				cycleThru();
			});
		};
	cycleThru();
});




// http://api.jquery.com/slideToggle/
$('.quote-toggle').click(function(){
  //get collapse content selector
  var collapse_content_selector = $(this).attr('href');

  //make the collapse content to be shown or hide
  var toggle_switch = $(this);
    $(collapse_content_selector).slideToggle(function(){
      if($(this).css('display')==='none'){
        toggle_switch.html('<i class="material-icons">add</i>');
      }else{
        toggle_switch.html('<i class="material-icons">clear</i>');
      }
    });
  });


$(document).ready(function() {
//    var quotes = new Array("navy", "teal", "mustard", "orange", "grey90", "passion", "purple", "blush", "gold"),
//    var quotes = new Array("brandblue", "brandred","brandgreen"),
//    var quotes = new Array("brandblue", "brandred","brandgreen"),
      var quotes = new Array("brandblue", "brandblue-cool"),
    randno = quotes[Math.floor( Math.random() * quotes.length )];
    $('.stats-hero').addClass( randno );
});

$(document).ready(function() {
var leadBG = new Array("palette-brandblue palette-inverse cool", "palette-brandblue palette-inverse warm"),
    randno = leadBG[Math.floor( Math.random() * leadBG.length )];
    $('.home-lead__background').addClass( randno );
});

$(document).ready(function(){

	// hide #back-top first
	$("#back-top").hide();

	// fade in #back-top
	$(function () {
		$(window).scroll(function () {
			if ($(this).scrollTop() > 450) {
				$('#back-top').fadeIn();
			} else {
				$('#back-top').fadeOut();
			}
		});

    // scroll body to 0px on click
    $('#back-top a').click(function () {
			$('body,html').animate({
				scrollTop: 0
			}, 800);
			return false;
		});

    $('#back-top2 a').click(function () {
			$('body,html').animate({
				scrollTop: 0
			}, 800);
			return false;
		});
	});

});
