import * as firebase from 'firebase';
import { setTimeout } from 'timers';

const config = {
    apiKey: 'AIzaSyBrRuyRX8NqBmJ1q-9Fu2Bn2BkiULvEi3c',
    authDomain: 'expensify-5eafe.firebaseapp.com',
    databaseURL: 'https://expensify-5eafe.firebaseio.com',
    projectId: 'expensify-5eafe',
    storageBucket: 'expensify-5eafe.appspot.com',
    messagingSenderId: '433937990867'
};

firebase.initializeApp(config);

const database = firebase.database();

database.ref('expenses')
    .on('value', snapshot => {
        const expenses = [];
        snapshot.forEach(childSnapshot => {
            expenses.push({
                id: childSnapshot.key,
                ...childSnapshot.val()
            });
        })
        console.log(expenses);
    });

setTimeout(() => {
    database.ref('expenses').push({
        description: 'expense 4',
        amount: 40,
        note: 'this is note',
        createdAt: 40
    });
}, 3000);


// database.ref('location/city')
//     .once('value')
//     .then(snapshot => {
//         const val = snapshot.val();
//         console.log(val);
//     })
//     .catch(error => {
//         console.log('Error fetching data', error);
//     });

// database.ref().set({
//     name: 'Wei Wei',
//     age: 26,
//     stressLevel: 6,
//     job: {
//         title: 'Software Developer',
//         company: 'Google'
//     },
//     isSingle: false,
//     location: {
//         city: 'Edmonton',
//         country: 'Canada'
//     }
// }).then(() => {
//     console.log('Data is saved.');
// }, error => {
//     console.log('Error occurred', error);
// });

// // database.ref('isSingle').set(null).then(() => { console.log('isSingle is removed'); } );

// database.ref().update({
//     stressLevel: 9,
//     'job/company': 'Amazon',
//     'location/city': 'Seattle'
// });