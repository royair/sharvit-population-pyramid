const ages     = generateAgeArray(1000);
const pyramid1 = toPyramid(ages);
const pyramid2 = toPyramidWithReduce1(ages);
const pyramid3 = toPyramidWithReduce2(ages);

console.log(above20(pyramid1));
console.log(above20(pyramid2));
console.log(above20(pyramid3));

function toPyramid(arr) {
  let pyramid = {};

  for (let i = 0; i < arr.length; i++) {
    const { age, gender } = arr[i];
    const group           = Math.floor(age / 5) * 5;

    // init pyramid's group of age
    pyramid[group] = pyramid[group] || {};

    //init array by gender in group of age
    pyramid[group][gender] = pyramid[group][gender] || [];

    //push a person to its place
    pyramid[group][gender].push(arr[i]);
  }

  return pyramid;
}

function toPyramidWithReduce1(arr) {
  let pyramid = {};

  for (let i = 0; i <= 120; i += 5) {
    const min = i;
    const max = i + 5;

    const reducedByGroupOfAges = arr.reduce((acc, cur) => {
      const { gender, age } = cur;

      (age >= min && age < max) ? (acc[gender] = acc[gender] || []).push(cur) : undefined;

      return acc;
    }, {});

    pyramid[min] = reducedByGroupOfAges;
  }

  return pyramid;
}

function toPyramidWithReduce2(arr) {
  return arr.reduce((acc, cur) => {
    const { gender, age } = cur;
    const group = Math.floor(age / 5) * 5;

    // init pyramid's group of age
    acc[group] = acc[group] || {};

    //init array by gender in group of age
    acc[group][gender] = acc[group][gender] || [];

    //push a person to its place
    acc[group][gender].push(cur);

    return acc;
  }, {});
}

function above20(pyramid) {
  let sum = 0;

  for (let key in pyramid) {
    if (key > 20) {
      pyramid[key]['f'] && (sum += pyramid[key]['f'].length);
    }
  }

  return sum;
}

function generateAgeArray(numOfAges) {
  const agesArray = [];

  for (let i = 0; i < numOfAges; i++) {
    const gender = Math.floor((Math.random() * 2) + 1) === 1 ? 'm' : 'f';
    const age    = Math.floor((Math.random() * 120) + 1);
    const person = { gender, age };

    agesArray.push(person);
  }

  return agesArray;
}