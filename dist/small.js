$('.mc-date-label').click(function(){
    if($(this).prev().is('[name="Clean-Date"]')){
         $( "#cleandate-text" ).html($(this).prev().val());
    }
 });

 $('.form-time-dropdown').change(function(){
    $('.form-time-dropdown').each((i, select)=>{
      $('#cleanhour-text').html($(select).val());
    });
  });

$('#hidden-key').click(function(){
	$('.mc-text-area.is--hiddenkey').show();
    $('.mc-text-area.is--othergetin').hide();
});

$('#other-getin').click(function(){
	$('.mc-text-area.is--othergetin').show();
    $('.mc-text-area.is--hiddenkey').hide();
});