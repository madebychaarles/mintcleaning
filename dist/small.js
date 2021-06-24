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