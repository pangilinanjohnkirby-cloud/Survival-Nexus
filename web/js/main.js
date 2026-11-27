// activity-3_WATER_SUPPLIES //
const waterUnits = 18;
const waterSurvivors = 6;
const waterPerSurvivor = 2;
// COMPUTATION OF WATER//
const dailyWaterDemand = waterSurvivors * waterPerSurvivor;
const waterCompleteDays = Math.floor(waterUnits / dailyWaterDemand);
const waterLeftover = waterUnits - (waterCompleteDays * dailyWaterDemand);
// WHAT WILL APPEAR ON WATER //
console.log("==== WATER SUPPLY ====");
console.log("Available water:", waterUnits);
console.log("Number of survivors:", waterSurvivors);
console.log("Daily demand:", dailyWaterDemand);
console.log("Complete days:", waterCompleteDays);
console.log("Leftover water:", waterLeftover);

// activity-3_FOOD_SUPPLIES //
const foodUnits = 25;
const foodSurvivors = 4;
const foodPerSurvivor = 2;
// COMPUTATION OF FOOD //
const dailyFoodDemand = foodSurvivors * foodPerSurvivor;
const foodCompleteDays = Math.floor(foodUnits / dailyFoodDemand);
const foodLeftover = foodUnits - (foodCompleteDays * dailyFoodDemand);
// WHAT WILL APPEAR ON FOOD //
console.log("==== FOOD SUPPLY ====");
console.log("Available food:", foodUnits);
console.log("Number of survivors:", foodSurvivors);
console.log("Daily demand:", dailyFoodDemand);
console.log("Complete days:", foodCompleteDays);
console.log("Leftover food:", foodLeftover);

// ACTIVITY 04 - SUPPLY APPROVAL//
let stock = 5;
let requestedQuantity = 2;
let sourceInfected = false;

function approveSupply(stock, requestedQuantity, sourceInfected) {
    if (
        !Number.isSafeInteger(stock) ||
        stock < 0 ||
        stock > 1000000
    ) {
        return {
            accepted: false,
            message: "Rejected: Invalid stock value.",
            remainingStock: stock
        };
    }
    if (
        !Number.isSafeInteger(requestedQuantity) ||
        requestedQuantity < 1 ||
        requestedQuantity > 1000000
    ) {
        return {
            accepted: false,
            message: "Rejected: Invalid requested quantity.",
            remainingStock: stock
        };
    }
    if (typeof sourceInfected !== "boolean") {
        return {
            accepted: false,
            message: "Rejected: Invalid infection status.",
            remainingStock: stock
        };
    }
    if (sourceInfected === true) {
        return {
            accepted: false,
            message: "Rejected: Source is infected.",
            remainingStock: stock
        };
    }
    if (requestedQuantity > stock) {
        return {
            accepted: false,
            message: "Rejected: Insufficient stock.",
            remainingStock: stock
        };
    }

    // Approve request and subtract supplies//
    const remainingStock = stock - requestedQuantity;

    return {
        accepted: true,
        message: "Approved: Supplies successfully transferred.",
        remainingStock: remainingStock
    };
}

// Display supply approval//
console.log("===== SUPPLY APPROVAL SYSTEM =====");

const supplyResult = approveSupply(
    stock,
    requestedQuantity,
    sourceInfected
);

console.log(supplyResult.message);
console.log("Original stock:", stock);
console.log("Requested quantity:", requestedQuantity);
console.log("Remaining stock:", supplyResult.remainingStock);