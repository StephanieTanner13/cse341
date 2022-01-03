const name = "Luke";
let age = 5;
let hasHobbies = true;

//you can change a function from function functionName and parameters to below
//which is an arrow function
const summarizeUser = (userName, userAge, userHasHobby) =>{
    return (
        'Name is ' + userName + 
        ', age is ' +
        userAge +
        ' and the user has hobbies: ' +
        userHasHobby
    );
}

//other ways to write functions
const add = (a,b) => a + b;
const addOne = a => a + 1;
const addRandom = () => 1 + 2; 

console.log(add(1, 2));
console.log(addOne(1));
console.log(addRandom());

console.log(summarizeUser(name, age, hasHobbies));