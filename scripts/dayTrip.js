//destinations = ["Bora Bora", "Japan", "Houston", "UAE", "Africa", "Hawaii", "Brazil"];

boraRestaurants = ["La Matira","La villa Mahana", "Bora Bora Yacht Club"];
japanRestaurants = ["Gyu-kaku", "CoCo's", "Yakiniku"];
houstonRestaurants = ["Houston's", "Kata-robata", "Steak48"]
uaeRestaurants = ["Hakkasen", "Villa Toscana", "Twin Tavern"];
africaRestaurants = ["L'orange Bleue", "The Phatt Chef", "Reuben's"];
hawaiiRestaurants = ["The Original Roy's", "Alan Wong's Honolulu", "Senia"];
brazilRestaurants = ["Sushi Leblon", "Mani", "CT Boucherie"];

modeOfTransportation = ["4 wheeler", "Bike", "SkateBoard", "Scooter"];

formOfEntertainment = ["Horse-back Riding", "Watch a movie", "Jet ski's", "Laser tag"];

function randomDestination () {
  let listOfdestinations = ["Bora Bora", "Japan", "Houston", "UAE", "Africa", "Hawaii", "Brazil"];
  let random = Math.floor((Math.random()* 7) + 0);
  let destination = listOfdestinations[random];
  return destination;
}

console.log(randomDestination());