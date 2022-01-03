
//object
const person = {
    name: 'Luke',
    age: 5,
    //special function in an object
    greet() {
        console.log('Hi, I am ' + this.name);
    }
};

person.greet();

//array
const hobbies = ['Sports', 'Cooking'];
// for ( let hobby of hobbies){
//     console.log(hobby);
// }

//map creates a new array with your additions in the function
console.log(hobbies.map(hobby => 'Hobby: ' + hobby));
//this one shows the original array unaltered by the map above
console.log(hobbies);

//copy an array using the spread operator
const copiedArray = [...hobbies];
console.log(copiedArray);

//array with unlimited arguments (rest operator)
const toArray = (...args) => {
    return args;
};

console.log(toArray(1, 2, 3, 4, 5));