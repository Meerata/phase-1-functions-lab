// Returns the number of blocks from Scuber's headquarters to the pickup location
function distanceFromHqInBlocks(pickupLocation) {
  const hqLocation = 42;
  return Math.abs(hqLocation - pickupLocation);
}

// Returns the number of feet from Scuber's headquarters to the pickup location
function distanceFromHqInFeet(pickupLocation) {
  const blocks = distanceFromHqInBlocks(pickupLocation);
  return blocks * 264;
}

// Calculates the number of feet a passenger travels given a starting block and an ending block
function distanceTravelledInFeet(startBlock, endBlock) {
  const distance = Math.abs(endBlock - startBlock);
  return distance * 264;
}

// Returns the fare for the customer based on the distance travelled
function calculatesFarePrice(startBlock, endBlock) {
  const distance = distanceTravelledInFeet(startBlock, endBlock);

  // First 400 feet are free
  if (distance <= 400) {
    return 0;
  }
  // Distance between 400 and 2000 feet
  else if (distance <= 2000) {
    return (distance - 400) * 0.02;
  }
  // Flat fare for a distance over 2000 feet and under 2500 feet
  else if (distance < 2500) {
    return 25;
  }
  // Scuber does not allow any rides over 2500 feet
  else {
    return "cannot travel that far";
  }
}

module.exports = {
  distanceFromHqInBlocks,
  distanceFromHqInFeet,
  distanceTravelledInFeet,
  calculatesFarePrice,
};
