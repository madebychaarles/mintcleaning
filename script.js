<script type="text/javascript" src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBlIp3BeoXqnT-a9yut9wnHd5tsG-Kvz7I&libraries=places"></script>
<script>
$("#form-next-button, #form-prev-button").click(function() { $(window).scrollTop(0); });
  var gpaInput = document.getElementById("client-address");
  var gpaOutput = document.getElementById("clientaddress-text");
  var aptInput = document.getElementById("aptcode");
  var postal = document.querySelector('#postcode');
	var autocomplete = new google.maps.places.Autocomplete(gpaInput, {
    componentRestrictions: { country: ["us", "ca"] },
    fields: ["address_components", "geometry"],
    types: ["address"],
  });
  autocomplete.addListener("place_changed", filInAddress);
function filInAddress() {
  const place = autocomplete.getPlace();
  let postcode = "";
  for (const component of place.address_components) {
    const componentType = component.types[0];
    switch (componentType) {
      case "postal_code": {
        postcode = `${component.long_name}${postcode}`;
        break;
      }
      case "postal_code_suffix": {
        postcode = `${postcode}-${component.long_name}`;
        break;
      } } }
  postal.value = postcode;
}
	const inputHandler = function(e) {
  		document.getElementById('zipcode').innerHTML = e.target.value;
	}
  const myScript = function(e) {
  		gpaOutput.innerHTML = gpaInput.value + " " + aptInput.value;
	}
  	gpaInput.addEventListener("focusout", myScript);
    aptInput.addEventListener('input', myScript);
		aptInput.addEventListener('propertychange', myScript);
		postal.addEventListener('input', inputHandler);
		postal.addEventListener('propertychange', inputHandler);
</script>
<script>

</script>