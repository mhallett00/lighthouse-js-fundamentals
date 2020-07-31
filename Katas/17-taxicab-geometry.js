const blocksAway = function (directions) {
  // Put your solution here
  const blocksAway = { east: 0, north: 0 };
  const blocksMoved = { north: 0, east: 0, south: 0, west: 0 };
  let currentDirection = null;

  for (let i = 0; i < directions.length; i += 2) {
    if (currentDirection) {
      switch (currentDirection) {
        case "north":
          directions[i] === "left"
            ? (currentDirection = "west")
            : (currentDirection = "east");
          blocksMoved[currentDirection] += directions[i + 1];
          break;
        case "east":
          directions[i] === "left"
            ? (currentDirection = "north")
            : (currentDirection = "south");
          blocksMoved[currentDirection] += directions[i + 1];
          break;
        case "south":
          directions[i] === "left"
            ? (currentDirection = "east")
            : (currentDirection = "west");
          blocksMoved[currentDirection] += directions[i + 1];
          break;
        case "west":
          directions[i] === "left"
            ? (currentDirection = "south")
            : (currentDirection = "north");
          blocksMoved[currentDirection] += directions[i + 1];
          break;
      }
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
