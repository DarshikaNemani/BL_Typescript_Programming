type CarYear = number
type CarType = string
type CarModel = string
type Car = {
  year: CarYear,
  type: CarType,
  model: CarModel
}

const car: Car = {
  year: 2010,
  type: "Toyota",
  model: "Corolla"
};

console.log(car);