const storedEmail = window.localStorage.getItem("sqfoot");
const storedLoc = window.localStorage.getItem("lction");
const storedCln = window.localStorage.getItem("clntyp");
var x = document.getElementById("Square-Foot");
x.addEventListener("focusin", FocusIn);
x.addEventListener("focusout", FocusOut);

let sum, total = 0;
var n, multi = 0;
$(document).ready(function(){
 const rbs = document.querySelectorAll('input[name="Location"]');
 let selectedValue;
 for (const rb of rbs) {
   if (rb.value == storedLoc) {
    	$('#'+rb.value).click();
      break;
	 }
}
const cts = document.querySelectorAll('input[name="CleanType"]');
 let cleanValue;
 for (const ct of cts) {
   if (ct.value == storedCln) {
    	$('#'+ct.value).click();
      break;
	 }
}
   if(storedEmail) {
	x.value = Number(storedEmail);
  valueCheck();
	}
	sum = n;
	$('input[type="radio"]#disable-event, .past-event').attr('disabled', 'disabled');
  $('.mc-check-label').prev().each((i, checkbox)=>{
    if($('input[checkbox]').is(':checked')){
      sum += parseInt($(checkbox).attr('add-value'));
    }
	});
  $( "#bedroom-number" ).html($('input[name="Bedroom"]:checked').val());
  $( "#bathroom-number" ).html($('input[name="Bathroom"]:checked').val());
  $( "#cleantype-text" ).html($('input[name="CleanType"]:checked').attr('add-string'));
  $( "#cleantype-hour" ).html($('input[name="CleanType"]:checked').attr('add-hour'));
  sum += (Number($('input[name=Location]:checked').attr('add-value')) || 0)+
  (Number($('input[name=CleanType]:checked').attr('add-value')) || 0)+
  (Number($('input[name=Bathroom]:checked').attr('add-value')) || 0)+
  (Number($('input[name=Bedroom]:checked').attr('add-value')) || 0)+
  (Number($('input[name=How-Do-We-Get-In]:checked').attr('add-value')) || 0);
  sum = sum + ( sum * Number($('input[name=Recurring]:checked').attr('add-value')) );
  formatNDisplay(sum);
});

$('.mc-check-label').click(function(){
  const $totalVal = $('.add-num'), $checkbox = $(this).prev();
  if(!$checkbox.is(':checked')){
    sum = Number($totalVal.text().replace(/[\$,]/g,'')) + Number($checkbox.attr('add-value'));
  }
  else{ 
    sum = Number($totalVal.text().replace(/[\$,]/g,'')) - Number($checkbox.attr('add-value'));
  }
 	FocusIn();
});
$('.mc-date-label').click(function(){
   if($(this).prev().is('[name="Clean-Date"]')){
   	 $( "#cleandate-text" ).html($(this).prev().val());
   }
});

var clickCount = 0;
$('.mc-radio-label').click(function(){
  if($(this).prev().is('[name="Location"]')){
    sum = Number($(this).prev().attr('add-value')) +
    (Number($('input[name=CleanType]:checked').attr('add-value')) || 0) +
    (Number($('input[name=Bedroom]:checked').attr('add-value')) || 0) +
    (Number($('input[name=Bathroom]:checked').attr('add-value')) || 0) +
    (Number($('input[name=How-Do-We-Get-In]:checked').attr('add-value')) || 0);
     sum += n;
     sum = sum + ( sum * Number($('input[name=Recurring]:checked').attr('add-value')) );
  } else if($(this).prev().is('[name="Bedroom"]')) {
		 $( "#bedroom-number" ).html($(this).prev().val());
    sum = Number($(this).prev().attr('add-value')) +
    (Number($('input[name=Location]:checked').attr('add-value')) || 0) +
    (Number($('input[name=CleanType]:checked').attr('add-value')) || 0) +
    (Number($('input[name=Bathroom]:checked').attr('add-value')) || 0)  +
    (Number($('input[name=How-Do-We-Get-In]:checked').attr('add-value')) || 0);
     sum += n;
     sum = sum + ( sum * Number($('input[name=Recurring]:checked').attr('add-value')) );
  } else if($(this).prev().is('[name="Bathroom"]')) {
		 $( "#bathroom-number" ).html($(this).prev().val());
    sum = Number($(this).prev().attr('add-value')) +
    (Number($('input[name=Location]:checked').attr('add-value')) || 0) +
    (Number($('input[name=CleanType]:checked').attr('add-value')) || 0) +
    (Number($('input[name=Bedroom]:checked').attr('add-value')) || 0) +
    (Number($('input[name=How-Do-We-Get-In]:checked').attr('add-value')) || 0);
	 sum += n;
   sum = sum + ( sum * Number($('input[name=Recurring]:checked').attr('add-value')) );
  } else if($(this).prev().is('[name="CleanType"]')) { 
   $( "#cleantype-text" ).html($(this).prev().attr('add-string'));
   $( "#cleantype-hour" ).html($(this).prev().attr('add-hour'));

    sum = Number($(this).prev().attr('add-value')) +
    (Number($('input[name=Location]:checked').attr('add-value')) || 0) +
    (Number($('input[name=Bathroom]:checked').attr('add-value')) || 0) +
    (Number($('input[name=Bedroom]:checked').attr('add-value')) || 0) +
    (Number($('input[name=How-Do-We-Get-In]:checked').attr('add-value')) || 0);
     sum += n;
     sum = sum + ( sum * Number($('input[name=Recurring]:checked').attr('add-value')) );

   } else if($(this).prev().is('[name="How-Do-We-Get-In"]')) {  
   if (!$(this).prev().is('[value="Hidden-Key"]') || !$(this).prev().is('[value="Others"]')){ $('.mc-text-area.is--hiddenkey').css({ 'display': 'none' }); $('.mc-text-area.is--othergetin').css({ 'display': 'none' }); }
    sum = Number($(this).prev().attr('add-value')) +
    (Number($('input[name=Location]:checked').attr('add-value')) || 0) +
    (Number($('input[name=CleanType]:checked').attr('add-value')) || 0) +
    (Number($('input[name=Bedroom]:checked').attr('add-value')) || 0) +
    (Number($('input[name=Bathroom]:checked').attr('add-value')) || 0);
     sum += n;
     sum = sum + ( sum * Number($('input[name=Recurring]:checked').attr('add-value')) );
   } else if($(this).prev().is('[name="Recurring"]')) {
    sum =  ( n + (Number($('input[name=Location]:checked').attr('add-value')) || 0)+
  (Number($('input[name=CleanType]:checked').attr('add-value')) || 0)+
  (Number($('input[name=Bathroom]:checked').attr('add-value')) || 0)+
  (Number($('input[name=Bedroom]:checked').attr('add-value')) || 0)+
  (Number($('input[name=How-Do-We-Get-In]:checked').attr('add-value')) || 0) ); 
  sum = sum + ( Number($(this).prev().attr('add-value')) * sum );
   	formatNDisplay(sum);
    return;
   }
  
	$('.mc-check-label').prev().each((i, checkbox)=>{
    if($(checkbox).is(':checked')){  
      sum += Number($(checkbox).attr('add-value'));
       sum += n;
    }
  });
  
  FocusIn();
});
$('#hidden-key').click(function(){
	$('.mc-text-area.is--hiddenkey').css({ 'display': 'block' });
    $('.mc-text-area.is--othergetin').css({ 'display': 'none' });
});
$('#other-getin').click(function(){
	$('.mc-text-area.is--othergetin').css({ 'display': 'block' });
    $('.mc-text-area.is--hiddenkey').css({ 'display': 'none' });
});
$('.form-time-dropdown').change(function(){
  $('.form-time-dropdown').each((i, select)=>{
    $('#cleanhour-text').html($(select).val());
  });
});

function formatNDisplay(sum){
	var markup = sum.toFixed(0);
  const formattedSum = new Intl.NumberFormat().format(markup);
  $('.add-num').text(formattedSum);
  $('.send-value').val(formattedSum);
}

function FocusIn(){
	valueCheck();
  total = sum - n;
  FocusOut();
}

function valueCheck(){
	if(isNaN(x.value) || x.value <= 1600){
  n = Number(32);
  } else if(isNaN(x.value) || x.value <= 2100){
  n  = Number(52);
  } else if(isNaN(x.value) || x.value <= 2300){
  n = Number(74);
  } else if(isNaN(x.value) || x.value <= 2700){
  n = Number(116);
  }else if(isNaN(x.value) || x.value <= 3100){
  n = Number(129);
  }else if(isNaN(x.value) || x.value <= 3500){
  n = Number(150);
  }else if(isNaN(x.value) || x.value <= 3900){
  n = Number(160);
  }else if(isNaN(x.value) || x.value <= 4400){
  n = Number(173);
  }else if(isNaN(x.value) || x.value <= 5000){
  n = Number(184);
  } else {
  n = Number(226);
  }
}

function FocusOut(){
 	valueCheck();
  if (x.value > 6500){
  	alert("We're sorry, but right now we only cover for max 6500 sqft");
    $('#Square-Foot').val("6500");
   	 n = Number(226);
  }
  if(x.value < 0){
  	alert("Please enter sqft from 0 to 6500 ");
    $('#Square-Foot').val("1600");
   	 n = Number(32);
  }
  sum =  sum + (sum * Number($('input[name="Recurring"]:checked').attr('add-value')));
  sum = total + n;
  formatNDisplay(sum);
}