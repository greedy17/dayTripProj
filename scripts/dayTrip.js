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

let dayTrip = alert("Welcome to the day trip generator! Today you are going to " + selectedLocation + ". While you're there you'll only be allowed to travel on a " + randomModeOfTransportation() + ". You're going to eat a delicious meal from " + randomRestaurant(selectedLocation) + ", and you'll finish the day with an exciting activity: " + randomFormOfEntertainment() + "!!");

let satisfaction = prompt("Are you satisfied with your trip details ? Yes or No");

/*if (satisfaction.toLowerCase() === "yes") {
  let haveFun;
  haveFun = alert("Enjoy your day! Have fun!");
}else if (satisfaction.toLowerCase() === "no"){
  let makeAChange;
  makeAChange = prompt("What would you like to change ? Location and food, ride, event, or all ? ");
  if (makeAChange.toLowerCase() === "location and food"){
    dayTrip.selectedLocation = randomDestination();
    dayTrip;
  }
}else {
  alert("invalid selection, please say yes or no.");
  randomReselection;
}*/