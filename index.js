const ages    = generateAgeArray(10000);
const pyramid = toPyramid(ages);

console.log(above20(pyramid));

function toPyramid(arr) {
  return arr.reduce((acc, cur) => {
    const { gender, age } = cur;
    const group           = Math.floor(age / 5) * 5;

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
  return Object.keys(pyramid).reduce((sum, key) => {
    (key > 20)
    && pyramid[key]['f']
    && (sum += pyramid[key]['f'].length);
    return sum;
  }, 0);
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
