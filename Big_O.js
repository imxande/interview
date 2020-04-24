// nemo array
const nemo = ["nemo"];

// find nemo function
const findNemo = array => {
    // loop through the array
    for (let i = 0; i < array.length; i++){
        // check if array contains nemo
        if(array[i] === "nemo"){
            console.log("Found NEMO!");
        }
    }
}

findNemo(nemo);