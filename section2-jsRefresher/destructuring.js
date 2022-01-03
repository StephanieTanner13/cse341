const person = {
    name: 'Luke',
    age: 5,
    //special function in an object
    greet() {
        console.log('Hi, I am ' + this.name);
    }
};

// const printName = (personData) => {
//     console.log(personData.name);
// }

//destructuring
const printName = ({ name }) => {
    console.log(name);
}

printName(person);