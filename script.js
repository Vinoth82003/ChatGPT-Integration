// Function to handle getting the user's location
function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showLocation, handleLocationError);
  } else {
    // Geolocation is not supported by this browser
    handleLocationError("Geolocation is not supported by this browser.");
  }
}

// Function to handle displaying the user's location
function showLocation(position) {
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;

  // Use reverse geocoding to get the place name
  fetch(
    `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`
  )
    .then((response) => response.json())
    .then((data) => {
      const placeName = data.address.state_district;
      const locationResultElement = document.getElementById("locationResult");
      locationResultElement.innerHTML = `Place: ${placeName}`;
      getNavigationByDistrictName(placeName);
    })
    .catch((error) => {
      // If there's an error with reverse geocoding, display the error message
      handleLocationError(`Reverse geocoding error: ${error.message}`);
    });
}

// Function to handle errors when getting the user's location
function handleLocationError(error) {
  // You can handle different types of errors here
  const locationResultElement = document.getElementById("locationResult");
  locationResultElement.innerHTML = `Error: ${error}`;
}

// Attach an event listener to the button to trigger location retrieval on click
document
  .getElementById("getLocationBtn")
  .addEventListener("click", getLocation);

// Function to get Google Maps navigation by district name
function getNavigationByDistrictName(value) {
  const districtName = value;

  // Use Geocoding API to get the latitude and longitude for the district name
  const geocoder = new google.maps.Geocoder();
  geocoder.geocode({ address: districtName }, (results, status) => {
    if (status === google.maps.GeocoderStatus.OK) {
      const latitude = results[0].geometry.location.lat();
      const longitude = results[0].geometry.location.lng();

      // Get the user's current location (assuming you already have a function to get user's location)
      const userLatitude = USER_CURRENT_LATITUDE;
      const userLongitude = USER_CURRENT_LONGITUDE;

      // Redirect the user to Google Maps with the directions
      window.open(
        `https://www.google.com/maps/dir/${userLatitude},${userLongitude}/${latitude},${longitude}`
      );
    } else {
      alert("District name not found or geocoding error occurred.");
    }
  });
}

// Attach an event listener to the button to trigger navigation on click
// document
//   .getElementById("navigateBtn")
//   .addEventListener("click", getNavigationByDistrictName);
