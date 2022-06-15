// introduction to arrays

let array = ['a string', 10, true];
//          ^start    ^items      ^end

let value = true; // Boolean, data type

let myNumber = 42; //Number, data type

let myArray = []; //Array, Object, data type

myArray = [
    1,
    'some string here',
    true,
    false,
    [
        'look, another array',
        'can we have another?',
        [
            'another array inside an array'
        ]
    ],
    function hello (message) {

    }
];

console.log('The array is: ', myArray);

let fruits = ['apple,', 'banana', 'cherry'] // start

// ['apple', 'banana', 'cherry', 'blueberry', 'pineapple']

//How do we do this?

// Insert at Index
// fruits[4] = 'blueberry'
// fruits[5] = 'pineapple'
// fruits[42] = 'peach'

fruits[fruits.length] = 'Item for end of array';

fruitLength = fruits.length;

fruits[fruitLength] = 'Add item to end' //this should work also because the length of fruits is REFERENCED at the time fruitLength is used

fruits.push("I guess we push");
fruits.push("Push to the end");
fruits.unshift('Houses'); // add item to beginning
fruits.unshift('1st item');
console.log(fruits);

console.log(fruits[fruits.length - 1]);

fruits[0] = 'apricot'

console.log(fruits);

fruits[0][0] = 'B' // String cannot be altered in this way

fruits.push("Pop this");
console.log(fruits);


let lastFruit = fruits.pop(); //REMOVES last element AND returns it

console.log(fruits);




let phrase = 'all dogs are good dogs';

let phraseWords = phrase.split(' '); //split phrase into array

console.log(phraseWords);

let reassemble = phraseWords.join(' ');

console.log(reassemble);

fruits.shift(phraseWords);

