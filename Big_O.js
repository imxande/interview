// nemo array
const nemo = ["nemo"];
// creating new array of 1000 items and adding nemo
const larger = new Array(1000).fill("nemo");
// find nemo function
const findNemo = array => {
    // checking performance
    let t0 = performance.now();
    // loop through the array
    for (let i = 0; i < array.length; i++){
        // check if array contains nemo
        if(array[i] === "nemo"){
            console.log("Found NEMO!");
        }
    }
    let t1 = performance.now()
    let time = t1 - t0;
    console.log(`Call to find nemo took ${time} milliseconds`);
}

findNemo(larger);