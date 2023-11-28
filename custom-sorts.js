function ageSort(users) {
  // Your code here
  return users.sort((u1, u2) => u1.age - u2.age);
}

function oddEvenSort(arr) {
  // Your code here
  return arr.sort((a, b) => {
    if (a % 2 === 1 && b % 2 === 0) return -1;
    if (a % 2 === 0 && b % 2 === 1) return 1;
    return a - b;
  });
}

function validAnagrams(s, t) {
  // Your code here
  let sorted1 = s.split('').sort();
  let sorted2 = s.split('').sort();
  for (let i = 0; i < sorted1.length; i++) {
    if (sorted1[i] !== sorted2[i]) {
      return false;
    }
  }
  return true;
}

function reverseBaseSort(arr) {
  // Your code here
  return arr.sort((a, b) => {
    let strA = '' + a;
    let strB = '' + b;
    if (strA.length > strB.length) {
      return -1;
    } else if (strB.length > strA.length) {
      return 1;
    } else {
      return a - b;
    }
  });
}

function frequencySort(arr) {
  // Your code here
  let counts = {};
  for (let val of arr) {
    if (counts[val]) {
      counts[val]++;
    } else {
      counts[val] = 1;
    }
  }
  return arr.sort((a, b) => {
    if (counts[a] != counts[b]) {
      return counts[a] - counts[b];
    } else {
      return b - a;
    }
  });
}

module.exports = [
  oddEvenSort,
  validAnagrams,
  reverseBaseSort,
  frequencySort,
  ageSort,
];
