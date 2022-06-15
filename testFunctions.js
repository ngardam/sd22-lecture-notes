function includes(someArray, someItem) {
    // loop over every item in someArray
    let index = 0;
    while (index < someArray.length) {
      //   check if the item is equal to someItem
      //     return true if the item is equal
      let item = someArray[index];
      if (item === someItem) return true;
      //   keep checking the rest of the items
      index = index + 1;
    }
    // return false
    return false;
  }
  
  module.exports = { includes };
  
  let myArray = [123, 'whistle', false, 42, 'canary'];
  
  function assert(message, thingToRun, expectedValue) {
    if (thingToRun === expectedValue) {
      console.log(`Ok: ${message}`, `${thingToRun} === ${expectedValue}`);
    } else {
      console.log(`Fail: ${message}`, `${thingToRun} !== ${expectedValue}`);
    }
  }
  
  assert('Includes: 123', includes(myArray, 123), true); // true
  assert('Includes: 321', includes(myArray, 321), false); // false
  assert('Includes: 42', includes(myArray, 42), true); // true
  assert('Includes: "cat"', includes(myArray, 'cat'), false); // false
  assert('Includes: "whistle"', includes(myArray, 'whistle'), true); // true