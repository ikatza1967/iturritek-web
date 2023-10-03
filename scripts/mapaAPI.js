(function () {
  var setting = {
    query: "Belategi Plaza, 1, 48002 Bilbao, Spain",
    width: 555,
    height: 237,
    satellite: false,
    zoom: 12,
    placeId: "ChIJwbqKJNJRTg0Rte8aqoDXl1c",
    cid: "0x5797d780aa1aefb5",
    coords: [43.24863670000001, -2.9459227],
    lang: "en",
    queryString: "Belategi Plaza, 1, 48002 Bilbao, Spain",
    centerCoord: [43.24863670000001, -2.9459227],
    id: "map-9cd199b9cc5410cd3b1ad21cab2e54d3",
    embed_id: "1004505",
  };
  var d = document;
  var s = d.createElement("script");
  s.src = "https://1map.com/js/script-for-user.js?embed_id=1004505";
  s.async = true;
  s.onload = function (e) {
    window.OneMap.initMap(setting);
  };
  var to = d.getElementsByTagName("script")[0];
  to.parentNode.insertBefore(s, to);
})();

