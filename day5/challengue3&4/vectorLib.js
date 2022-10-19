const makeVector = (n, max) => {
  let vector = [];
  for (let i = 0; i < n; i++) {
    vector.push(Math.round(Math.random() * max));
  }
  return vector;
};
// only works with the same length
const addTwoVectors = (v1, v2) => {
  if (v1.length === v2.length) {
    let addedVectors = [];
    for (let i = 0; i < v1.length; i++) {
      addedVectors.push(v1[i] + v2[i]);
    }
    return addedVectors;
  } else {
    console.log(`ERROR: ${v1} and ${v2} must have the same length`);
  }
};


// convertido a forEach

const addTwoVectorsForEach = (v1,v2) => {
  let addedVectors = []
  v1.forEach((number, i) => {
    addedVectors.push(number + v2[i])
  })
  return addedVectors
}


// convertido a map

const addTwoVectorsMap = (v1,v2) => {
  let addedVectors = v1.map((number, i) =>number + v2[i])
  return addedVectors
}


const multiplyVectorNumber = (mult, v) => {
  let multipliedVector = [];
  for (num of v) {
    multipliedVector.push(num * mult);
  }
  return multipliedVector;
};

// only works with the same length
const subtractTwoVectors = (v1, v2) => {
  if (v1.length === v2.length) {
    let subtractedVectors = [];
    for (let i = 0; i < v1.length; i++) {
      subtractedVectors.push(v1[i] - v2[i]);
    }
    return subtractedVectors;
  }else {
    console.log(`ERROR: ${v1} and ${v2} must have the same length`);
  }
};

// only works with the same length
const multiplyTwoVectors = (v1,v2) => {
  if(v1.length === v2.length){
    let multipliedVectors = []
    for (let i = 0; i < v1.length; i++) {
      multipliedVectors.push(v1[i] * v2[i]);
    }
    return multipliedVectors
  }else {
    console.log(`ERROR: ${v1} and ${v2} must have the same length`);
  }
}

const evenFilter = (v) => {
  let vectorFiltered = v.filter(number => number % 2 === 0)
  return vectorFiltered
}

const summation = (v) => {
  let vectorSummation = v.reduce((prevValue, currentValue) => prevValue + currentValue)
  return vectorSummation
}



module.exports = {makeVector, addTwoVectors, multiplyVectorNumber, subtractTwoVectors, multiplyTwoVectors, evenFilter, summation}