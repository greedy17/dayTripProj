function randomDestination () {
  let listOfdestinations = ["Bora Bora", "Japan", "Houston", "UAE", "Africa", "Hawaii", "Brazil"];
  let random = Math.floor((Math.random()* 7) + 0);
  let destination = listOfdestinations[random];
  return destination;
}

var selectedLocation = randomDestination();

function randomRestaurant(location) {
  if(location === "Bora Bora"){
      let boraRestaurants = ["La Matira","La villa Mahana", "Bora Bora Yacht Club"];
      let random = Math.floor((Math.random() * 3) + 0);
      let restaurant = boraRestaurants[random];
      return restaurant;
  }else if (location === "Japan"){
    let japanRestaurants = ["Gyu-kaku", "CoCo's", "Yakiniku"];
    let random = Math.floor((Math.random() * 3) + 0);
    let restaurant = japanRestaurants[random];
    return restaurant;
  }else if (location === "Houston"){
    let houstonRestaurants = ["Houston's", "Kata-robata", "Steak48"];
    let random = Math.floor((Math.random() * 3) + 0);
    let restaurant = houstonRestaurants[random];
    return restaurant;
  }else if(location === "UAE"){
    let uaeRestaurants = ["Hakkasen", "Villa Toscana", "Twin Tavern"];
    let random = Math.floor((Math.random() * 3) + 0);
    let restaurant = uaeRestaurants[random];
    return restaurant;
  }else if(location === "Africa"){
    let africaRestaurants = ["L'orange Bleue", "The Phatt Chef", "Reuben's"];
    let random = Math.floor((Math.random() * 3) + 0);
    let restaurant = africaRestaurants[random];
    return restaurant;
  }else if(location === "Hawaii"){
    let hawaiiRestaurants = ["The Original Roy's", "Alan Wong's Honolulu", "Senia"];
    let random = Math.floor((Math.random() * 3) + 0);
    let restaurant = hawaiiRestaurants[random];
    return restaurant;
  }else if(location === "Brazil"){
    let brazilRestaurants = ["Sushi Leblon", "Mani", "CT Boucherie"];
    let random = Math.floor((Math.random() * 3) + 0);
    let restaurant = brazilRestaurants[random];
    return restaurant;
  }
}

function randomModeOfTransportation(){
  let modeOfTransportation = ["4 wheeler", "Bike", "SkateBoard", "Scooter"];
  let random = Math.floor((Math.random() * 4) + 0);
  let transportation = modeOfTransportation[random];
  return transportation;
}

function randomFormOfEntertainment(){
  formOfEntertainment = ["Horse-back Riding", "Watching a movie", "Jet ski's", "Laser tag"];
  let random = Math.floor((Math.random() * 4) + 0);
  let entertainment = formOfEntertainment[random];
  return entertainment;
}

function dayTrip(location = selectedLocation, food = randomRestaurant(selectedLocation), activity = randomFormOfEntertainment(), transportation = randomModeOfTransportation()){
let initialTrip;
initialTrip = prompt(`Welcome to the day trip generator! Today you are going to ${location}! While you're there you'll only be allowed to travel on a ${transportation}. You're going to eat a delicious meal from ${food}, and you'll finish the day with an exciting activity: ${activity}!!
If you are satisfied with the details of your day, type yes. If not, tell me what you would like to change (Location and food, activity, or transportation) ?`);
if (initialTrip.toLowerCase() === "yes"){
  alert("Awesome! Enjoy your trip!");
 }else if(initialTrip.toLowerCase() === "location and food"){
   let diffLocation = randomDestination();
  alert("Your new location is " + diffLocation + ", and you're going to eat at " + randomRestaurant(diffLocation) + ". Your transportation is still " + transportation + ", and your activity is still " + activity + ".");
 }else if(initialTrip.toLowerCase() === "activity"){
   let diffActivity = randomFormOfEntertainment();
  alert("Your new activity is " + diffActivity + ". Your location is still " + location + ", you're still eating at " + food + ", and you're still traveling on a " + transportation + ".");
 }else if(initialTrip.toLowerCase() === "transportation"){
   let diffRide = randomModeOfTransportation();
  alert("Your new mode of transportation is " + diffRide + ". Your location is still " + location + ", you're still eating at " + food + ", and your activity is still " + activity + ".");
 } 
}

dayTrip();