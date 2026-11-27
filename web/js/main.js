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

// ===== ACTIVITY 05: SHELTER WATER REPORT =====
const MAX_SHELTER_STOCK = 1000000;

function shelterReport(counts, dailyRequirement) {
    // Step 1: validate the daily requirement
    if (!Number.isSafeInteger(dailyRequirement) || dailyRequirement < 1) {
        return { valid: false, message: "Rejected: Daily requirement must be a positive safe integer." };
    }

    if (!Array.isArray(counts)) {
        return { valid: false, message: "Rejected: Water counts must be an array." };
    }

    // Step 5: validate EVERY count before calculating anything
    for (let i = 0; i < counts.length; i++) {
        const count = counts[i];
        if (!Number.isSafeInteger(count) || count < 0 || count > MAX_SHELTER_STOCK) {
            return {
                valid: false,
                message: `Rejected: Invalid stock at position ${i} (shelter ${i + 1}): ${count}`
            };
        }
    }

    // Steps 2-4: only runs when all data is valid
    const coverage = [];
    let totalWater = 0;
    let shortCoverageCount = 0;

    for (const count of counts) {
        const days = Math.floor(count / dailyRequirement);
        coverage.push(days);
        totalWater += count;
        if (days < 2) {
            shortCoverageCount++;
        }
    }

    return {
        valid: true,
        coverage: coverage,
        totalWater: totalWater,
        shelterCount: counts.length,
        shortCoverageCount: shortCoverageCount
    };
}

function showShelterReport(label, counts, dailyRequirement) {
    console.log(`===== ${label} =====`);
    const y = shelterReport(counts, dailyRequirement);

    if (!y.valid) {
        console.log(y.message);
        return;
    }

    console.log("Coverage (days):", y.coverage);
    console.log("Total water:", y.totalWater);
    console.log("Number of shelters:", y.shelterCount);
    console.log("Shelters below 2 days:", y.shortCoverageCount);
}
showShelterReport("SHELTERS A", [12, 9, 0], 3);
showShelterReport("SHELTERS B", [6, 3, 15, 1], 3);
showShelterReport("EMPTY DATASET", [], 3);
showShelterReport("ZERO DAILY REQUIREMENT", [12, 9, 0], 0);
showShelterReport("INVALID DATA", [3, -1, 6], 3);