// // nemo array
// const nemo = ["nemo"];
// // creating new array of 1000 items and adding nemo
// const larger = new Array(1000).fill("nemo");
// // find nemo function
// const findNemo = array => {
//     // checking performance
//     let t0 = performance.now();
//     // loop through the array
//     for (let i = 0; i < array.length; i++){
//         // check if array contains nemo
//         if(array[i] === "nemo"){
//             console.log("Found NEMO!");
//         }
//     }
//     let t1 = performance.now()
//     let time = t1 - t0;
//     console.log(`Call to find nemo took ${time} milliseconds`);
// }

// findNemo(larger);

const name = "";
const age = 29;

// age >= 3123
//   ? console.log(`${name} is old enough to drink!`)
//   : console.log(`${name} is to young to drink!`);

// switch (name) {
//   case "Ale":
//     console.log("Case number 1");
//     break;

//   case "Nonnie":
//     console.log("Case number 2");
//     break;

//   default:
//     console.log("This is the default");
// }

const john = {
  gameOne: 89,
  gameTwo: 120,
  gameThree: 103,
};

const mike = {
  gameOne: 36,
  gameTwo: 50,
  gameThree: 121,
};

const average = (gameOne, gameTwo, gameThree) => {
  return (gameOne + gameTwo + gameThree) / 3;
};

const johnAve = average(john.gameOne, john.gameTwo, john.gameThree);
const mikeAve = average(mike.gameOne, mike.gameTwo, mike.gameThree);

console.log("John Team: " + johnAve);
console.log("Mike Team: " + mikeAve);

const winner = (teamOne, teamTwo) => {
  teamOne > teamTwo
    ? console.log(`John\'s team is the winner! average score: ${johnAve}`)
    : console.log(`Mike\'s team is the winner! average score: ${mikeAve}`);
};

winner(johnAve, mikeAve);
