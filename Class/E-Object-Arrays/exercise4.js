let restaurant1 = {
  name: "Paesano",
  totalSeats: 10,
  numberOfCustomers: 8,
  address: {
    city: "Glasgow",
    area: "center",
  },
  menu: ["pizza", "calzone", "salad"],
};

let restaurant2 = {
  name: "Ubiquitous Chip",
  totalSeats: 20,
  numberOfCustomers: 10,
  address: {
    city: "Glasgow",
    area: "west",
  },
  menu: ["salad", "chocolate cake", "roast lamb"],
};

let restaurant3 = {
  name: "Monkeyz",
  totalSeats: 15,
  numberOfCustomers: 8,
  address: {
    city: "Glasgow",
    area: "center",
  },
  menu: ["stew", "chocolate cake", "panini"],
};

let restaurants = [restaurant1, restaurant2, restaurant3];

/*
  DO NOT EDIT ANYTHING ABOVE THIS LINE
  WRITE YOUR CODE BELOW
  */

let restaurantFinderApplication = {
  applicationName: "Restaurant Finder",
  applicationVersion: "1.0",
  restaurants: restaurants,
  findAvailableRestaurants: function (numberOfPeople) {
    let seatsAvailables = restaurants
      .filter(
        (restaurant) =>
          restaurant.totalSeats - restaurant.numberOfCustomers >= numberOfPeople
      )
      .map((restaurant) => restaurant.name);
    return seatsAvailables;

    // 1. Complete this method findAvailableRestaurants which takes a number of people in parameter
    // and returns all the restaurant names which have the required number of seats available at the moment.
  },
  findRestaurantServingDish: function (dishName) {
    let filterDish = restaurants.filter((dishNameServe) =>
      dishNameServe.menu.includes(dishName)
    );
    let mappingName = filterDish.map((restaurantName) => restaurantName.name);
    return mappingName;
  },
  countNumberOfRestaurantsInArea: function (area) {
    let amount = restaurants.filter((areasAvailable) =>
      areasAvailable.address.area.includes("center")
    ).length;
    return amount;
  },
};

/*
  DO NOT EDIT ANYTHING BELOW THIS LINE
  */

let restaurantsAvailableFor5People =
  restaurantFinderApplication.findAvailableRestaurants(5);
console.log(
  `Find available restaurants for 5 people: Expected result: Ubiquitous Chip,Monkeyz, actual result: ${restaurantsAvailableFor5People}`
);

let restaurantsServingSalad =
  restaurantFinderApplication.findRestaurantServingDish("salad");
console.log(
  `Find restaurants serving salad: Expected result: Paesano,Ubiquitous Chip, actual result: ${restaurantsServingSalad}`
);

let numberOfRestaurantsInCityCentre =
  restaurantFinderApplication.countNumberOfRestaurantsInArea("center");
console.log(
  `Number of restaurants in city centre: Expected result: 2, actual result: ${numberOfRestaurantsInCityCentre}`
);
