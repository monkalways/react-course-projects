//
// Object destructuring
//

// const person = {
//     name: 'Andrew',
//     age: 27,
//     location: {
//         city: 'Edmonton',
//         temp: -20
//     }
// };

// const { name = 'Anonymous', age } = person;
// console.log(`${name} is ${age}.`);

// const { city, temp: temperature } = person.location;
// if(city && temperature) {
//     console.log(`It's ${temperature} in ${city}.`)
// }

const book = {
    title: 'Ego is the Enemy',
    author: 'Ryan Holiday',
    publisher: {
        name: 'Penguin'
    }
};

const { name: publisherName = 'Self-Published' } = book.publisher;

console.log(publisherName); // Penguin, Self-Published

//
// Array destructuring
//

// const address = ['1299 S Juniper Street', 'Edmonton', 'AB', 'T6W0P7'];
// const [, city = 'Calgary', province] = address;
// console.log(`You are in ${city} ${province}.`);

const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];
const [itemName, smallSizePrice, mediumSizePrice, largeSizePrice] = item;
console.log(`A medium ${itemName} costs ${mediumSizePrice}.`);