//OVERLAY SEARCH
$(document).ready(function(){
  var $overlay = $('#overlay-search');
  $('#search, #nav-search').click(function(){
    if ( $overlay.is(':visible') ) {
        $overlay.fadeOut();
    } else {
        $overlay.fadeIn();
    }
  });
  $('#close').click(function(){
    $overlay.fadeOut();
  });
});
//////////////////////////////////////////////////////////////////
//focus search input
$(document).on('keydown', function(){
  var input = $('input[name="Search"]');
  if(!input.is(':focus')) {
    input.focus();
  }
});
//////////////////////////////////////////////////////////////////
  //Element State Change for Inputs
  // Compare the textbox's current and last value.  Report a change to the console.
// function watchTextbox() {
// var txtInput = $('#Search');
// var lastValue = txtInput.data('lastValue');
// var currentValue = txtInput.val();
// if (lastValue != currentValue) {
// console.log('Value changed from ' + lastValue + ' to ' + currentValue);
// txtInput.data('lastValue', currentValue);
// }
// }
//
// // Record the initial value of the textbox.
// $('#Search').data('lastValue', $('#Search').val());
//
// // Bind to the keypress and user-defined set event.
// $('#Search').bind('keypress set', null, watchTextbox);
//
// // Example of JS code triggering the user event
// $('#btnSetText').click(function (ev) {
// $('#Search').val('abc def').trigger('set');
// }); 100);

//////////////////////////////////////////////////////////////////
// $.event.special.inputchange = {
//     setup: function() {
//         var self = this, val;
//         $.data(this, 'timer', window.setInterval(function() {
//             val = self.value;
//             if ( $.data( self, 'cache') != val ) {
//                 $.data( self, 'cache', val );
//                 $( self ).trigger( 'inputchange' );
//             }
//         }, 20));
//     },
//     teardown: function() {
//         window.clearInterval( $.data(this, 'timer') );
//     },
//     add: function() {
//         $.data(this, 'cache', this.value);
//     }
// };
//
// $('#Search').on('inputchange', function() {
//     $('p').text(this.value);
// });
//////////////////////////////////////////////////////////////////
//focus search input
// $('body').on('keydown', function() {
//   var input = $('input[name="Search"]');
//
//   if(!input.is(':focus')) {
//     input.focus();
//   }
// });
//$(document).on('keydown', function(){
//	var input = $('input[name="Search"]');
//	$('#search').click(function(){
//    if ( $overlay.is(':visible') ) {
//        $overlay.fadeOut();
//    } else {
//        $overlay.fadeIn();
//    }
//	});
//////////////////////////////////////////////////////////////////
