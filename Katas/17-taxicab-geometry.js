const blocksAway = function (directions) {
  // Put your solution here
  const blocksAway = { east: 0, north: 0 };
  const blocksMoved = { north: 0, east: 0, south: 0, west: 0 };
  let currentDirection = null;

  const cardinalObj = {
    north: ["west", "east"],
    east: ["north", "south"],
    south: ["east", "west"],
    west: ["south", "north"],
  };

  for (let i = 0; i < directions.length; i += 2) {
    if (currentDirection) {
      directions[i] === "left"
        ? (currentDirection = cardinalObj[currentDirection][0])
        : (currentDirection = cardinalObj[currentDirection][1]);
      blocksMoved[currentDirection] += directions[i + 1];
    } else {
      directions[i] === "left"
        ? (currentDirection = "north")
        : (currentDirection = "east");
      blocksMoved[currentDirection] += directions[i + 1];
    }
  }

  blocksAway.east = Math.abs(blocksMoved.east - blocksMoved.west);
  blocksAway.north = Math.abs(blocksMoved.north - blocksMoved.south);
  return blocksAway;
};

console.log(blocksAway(["right", 2, "left", 3, "left", 1]));
console.log(
  blocksAway([
    "left",
    1,
    "right",
    1,
    "left",
    1,
    "right",
    1,
    "left",
    1,
    "right",
    1,
  ])
);
console.log(blocksAway(["left", 3, "right", 1, "right", 3, "right", 1]));
