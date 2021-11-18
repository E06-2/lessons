let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 52.511761, lng: 13.455870  },
    zoom: 11,
  });
  const marker1 = new google.maps.Marker({
    position: { lat: 52.511761, lng: 13.455870 },
    map: map,
    draggable: true,
    animation: google.maps.Animation.DROP,
  });

  const marker2 = new google.maps.Marker({
    position: { lat: 52.523740, lng: 13.486080 },
    map: map,
    draggable: true,
    animation: google.maps.Animation.DROP,
  });

  // event lister for markers
  marker1.addListener("click", () => {
      alert("You clicked marker 1");
  })
  marker2.addListener("click", () => {
    alert("You clicked marker 2");
})
}