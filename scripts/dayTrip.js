//destinations = ["Bora Bora", "Japan", "Houston", "UAE", "Africa", "Hawaii", "Brazil"];

boraRestaurants = ["La Matira","La villa Mahana", "Bora Bora Yacht Club"];
japanRestaurants = ["Gyu-kaku", "CoCo's", "Yakiniku"];
houstonRestaurants = ["Houston's", "Kata-robata", "Steak48"];
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

function randomBoraRestaurant(){
  let boraRestaurants = ["La Matira","La villa Mahana", "Bora Bora Yacht Club"];
  let random = Math.floor((Math.random() * 3) + 0);
  let restaurant = boraRestaurants[random];
  return restaurant;
}

function randomJapanRestaurant(){
  let japanRestaurants = ["Gyu-kaku", "CoCo's", "Yakiniku"];
  let random = Math.floor((Math.random() * 3) + 0);
  let restaurant = japanRestaurants[random];
  return restaurant;
}

function randomHoustonRestaurant(){
  let houstonRestaurants = ["Houston's", "Kata-robata", "Steak48"];
  let random = Math.floor((Math.random() * 3) + 0);
  let restaurant = houstonRestaurants[random];
  return restaurant;
}

function randomUaeRestaurant(){
  let uaeRestaurants = ["Hakkasen", "Villa Toscana", "Twin Tavern"];
  let random = Math.floor((Math.random() * 3) + 0);
  let restaurant = uaeRestaurants[random];
  return restaurant;
}

function randomAfricaRestaurant(){
  let africaRestaurants = ["L'orange Bleue", "The Phatt Chef", "Reuben's"];
  let random = Math.floor((Math.random() * 3) + 0);
  let restaurant = africaRestaurants[random];
  return restaurant;
}

function randomHawaiiRestaurant(){
  let hawaiiRestaurants = ["The Original Roy's", "Alan Wong's Honolulu", "Senia"];
  let random = Math.floor((Math.random() * 3) + 0);
  let restaurant = hawaiiRestaurants[random];
  return restaurant;
}

function randomBrazilRestaurant(){
  let brazilRestaurants = ["Sushi Leblon", "Mani", "CT Boucherie"];
  let random = Math.floor((Math.random() * 3) + 0);
  let restaurant = brazilRestaurants[random];
  return restaurant;
}

