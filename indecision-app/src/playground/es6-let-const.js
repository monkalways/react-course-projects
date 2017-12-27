var nameVar = 'Andrew';
var nameVar = 'Mike';
console.log('nameVar', nameVar);

let nameLet = 'Jen';
nameLet = 'Juelie';
console.log('nameLet', nameLet);

const nameConst = 'Wei';
console.log('nameConst', nameConst);

// Block scoping

const fullName = 'Jen Mead';
let firstName;

if(fullName) {
    firstName = fullName.split(' ')[0];
    console.log(firstName);
}

console.log(firstName);