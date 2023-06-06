// How many disks do you want? Select a number from 3 to 8
// create dom element to give an option of 3-8
const noDisks = 8;

// Initialize stacks
const stacks = [[], [], []];

// Add disks to the first stack
for (let i = noDisks; i >= 1; i--) {
  stacks[0].push(i);
}

/// addint kb event listner
document.addEventListener("keydown", function (event) {
  const key = event.key.toUpperCase();

  // reset the gfame bpoard when R pressed
  if (key === "R") {
    init();
    return;
  }
  let stackNo = 0;

  //mapping the KB keys 1,2,and 3 to stack numbers
  if (key === "1") {
    stackNo = 1;
  } else if (key === "2") {
    stackNo = 2;
  } else if (key === "3") {
    stackNo = 3;
  }
  processUserSelection(stackNo);
});

// adding mouse click event lisneter to handle mouse
document.addEventListener("click", function (event) {
  const stackNo = findStackNoXY(event.clientX, event.clientY);
  processUserSelection(stackNo);
});
//  usser selection processing func
const processUserSelection = (stackNo) => {
  if (finisshed) {
    return;
  }

  // if nostack is selected before
  if (selectedStackNo < 1) {
    const stackDisks = getStackDisks(stackNo);
    // ...if the new selection has disks, then this becomes the selection

    if (stackDisks && stackDisks.length > 0) {
      selectedStackNo = stackNo;
    }
    return;
  }
  if (moveDisk(selectedStackNo, stackNo)) {
    // sucsecful move
    moves++;

    if (isFinished()) {
      finished = true;
      // sound ('tadam') // add a sound option for game finish
    }
  }

  selectedStackNo = 0;
};

const moveDisk = (fromStackNo, toStackNo) => {
  const fromStack = stacks[fromStackNo - 1].disks;
  const toStack = stacks[toStackNo - 1].disks;

  if (!fromStack || !toStack) {
    return false;
  }

  const fromDisk = fromStack[fromStack.length - 1];
  const toDisk = toStack[toStack.length - 1];

  if (toDisk && fromDisk > toDisk) {
    return false;
  }
  fromStack.pop();
  toStack.push(fromDisk);
  return true;
};

// Render the game
function renderGame() {
  const gameContainer = document.getElementById("game-container");
  gameContainer.innerHTML = "";

  for (let stack of stacks) {
    const stackElement = document.createElement("div");
    stackElement.className = "stack";

    for (let diskSize of stack) {
      const diskElement = document.createElement("div");
      diskElement.className = "disk";
      diskElement.style.width = `${diskSize * 50}px`;
      stackElement.appendChild(diskElement);
    }

    gameContainer.appendChild(stackElement);
  }
}

// // Move a disk from one stack to another
// function moveDisk(fromStack, toStack) {
//     const disk = stacks[fromStack].pop();
//     stacks[toStack].push(disk);
//     renderGame();
// }

// Initialize the game
function init(numDisks) {
  stacks.forEach((stack) => (stack.length = 0)); // Clear all stacks

  for (let i = numDisks; i >= 1; i--) {
    stacks[0].push(i); // Add disks to the first stack
  }

  renderGame();
}

// Call the init function to start initalise the game with 3 disks in stack
init();

// get the numnber of disks from the usetr and set the game board based choice

const diskSelect = document.getElementById("disk-select");
const startButton = document.getElementById("start-button");

startButton.addEventListener("click", function () {
  const selectedValue = diskSelect.value;
  if (selectedValue >= 3 && selectedValue <= 8) {
    init(selectedValue);
  } else {
    alert("Please select a valid number of disks (3-8).");
  }
});
