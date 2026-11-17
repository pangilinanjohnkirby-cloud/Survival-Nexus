
// WATER SUPPLY CALCULATION

const waterUnits = 18;
const waterSurvivors = 6;
const waterPerSurvivor = 2;

const dailyWaterDemand = waterSurvivors * waterPerSurvivor;
const waterCompleteDays = Math.floor(waterUnits / dailyWaterDemand);
const waterLeftover = waterUnits - (waterCompleteDays * dailyWaterDemand);

console.log("===== WATER SUPPLY =====");
console.log("Available water:", waterUnits);
console.log("Number of survivors:", waterSurvivors);
console.log("Daily demand:", dailyWaterDemand);
console.log("Complete days:", waterCompleteDays);
console.log("Leftover water:", waterLeftover);


// FOOD SUPPLY CALCULATION

const foodUnits = 25;
const foodSurvivors = 4;
const foodPerSurvivor = 2;

const dailyFoodDemand = foodSurvivors * foodPerSurvivor;
const foodCompleteDays = Math.floor(foodUnits / dailyFoodDemand);
const foodLeftover = foodUnits - (foodCompleteDays * dailyFoodDemand);

console.log("===== FOOD SUPPLY =====");
console.log("Available food:", foodUnits);
console.log("Number of survivors:", foodSurvivors);
console.log("Daily demand:", dailyFoodDemand);
console.log("Complete days:", foodCompleteDays);
console.log("Leftover food:", foodLeftover);
