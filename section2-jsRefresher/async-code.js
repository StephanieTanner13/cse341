//this code is asyncronous code (it doesn't happen immediately)
setTimeout(() => {
    console.log('Timer is done!');
}, 2000);

//syncronous code all happens at the same time
console.log('Hello!');
console.log('Hi!');