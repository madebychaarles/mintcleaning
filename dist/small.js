function moveCheck(){
    sum = mv + n;
    CBox();
    formatNDisplay(sum);
}
function RecurringPrice(){
	sum += ( sum * Number($('input[name=Recurring]:checked').attr('add-value')) );
  CBox();
  formatNDisplay(sum);
}
function formatNDisplay(sum){
	var markup = sum.toFixed(0);
  const formattedSum = new Intl.NumberFormat().format(markup);
  $('.add-num').text(formattedSum);
  $('.send-value').val(formattedSum);
}
function valueCheck(){
	if(isNaN(x.value) || x.value <= 1600){
  n = Number(23);
  mv = Number(295);
  } else if(isNaN(x.value) || x.value <= 2100){
  n  = Number(46);
  mv = Number(305);
  } else if(isNaN(x.value) || x.value <= 2300){
  n = Number(69);
  mv = Number(315);
  } else if(isNaN(x.value) || x.value <= 2700){
  n = Number(113);
  mv = Number(325);
  }else if(isNaN(x.value) || x.value <= 3100){
  n = Number(128);
  mv = Number(335);
  }else if(isNaN(x.value) || x.value <= 3500){
  n = Number(151);
  mv = Number(345);
  }else if(isNaN(x.value) || x.value <= 3900){
  n = Number(164);
  mv = Number(355);
  }else if(isNaN(x.value) || x.value <= 4400){
  n = Number(179);
  mv = Number(365);
  }else if(isNaN(x.value) || x.value <= 5000){
  n = Number(191);
  mv = Number(375);
  } else {
  n = Number(235);
  mv = Number(385);
  }
}