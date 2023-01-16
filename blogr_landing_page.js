
$(document).ready(function(){
    $('.business > div').click(function(){
      if($(this).children('.drop').css('display') === 'block') {
        $(this).children('.drop').css('display','none');
        $(this).find('img').css('transform','none');
        return;
      }
      $('.business > div .drop').css('display','none');
      $('.business > div img').css('transform','none');
      $(this).children('.drop').css('display','block');
      $(this).find('img').css('transform','rotate(180deg)');
    });
  $('nav.mob #op').click(function(){
    $('#clo').css('display','block');
    $(this).css('display','none');
    $('nav.mob .menu').css('display','flex');
  });
  $('nav.mob #clo').click(function(){
    $('#op').css('display','block');
    $(this).css('display','none');
    $('nav.mob .menu').css('display','none');
  });
  $('nav.mob .menu span').click(function(){
    if($(this).nextAll('.dropm').css('display') === 'block') {
        $(this).nextAll('.dropm').css('display','none');
        $(this).next().css('transform','none');
        return;   
    }
    $('nav.mob .menu span').nextAll('.dropm').css('display','none');
    $('nav.mob .menu span').next().css('transform','none');
    $(this).nextAll('.dropm').css('display','block');
    $(this).next().css('transform','rotate(180deg)');
  });  
});