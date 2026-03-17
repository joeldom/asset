//RESPONDIFY SCRIPT
function respondify(){
  $('iframe[src*="embed.spotify.com"]').each( function() {
    $(this).css('width',$(this).parent(1).css('width'));
    $(this).attr('src',$(this).attr('src'));
  });
  }
  $(document).ready(function(){
  respondify();
  });
  $(window).resize(function() {
  respondify();
});
