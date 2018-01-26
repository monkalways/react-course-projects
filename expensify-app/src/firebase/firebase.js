import * as firebase from 'firebase';
import { setTimeout } from 'timers';

const config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
};

firebase.initializeApp(config);

const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, googleAuthProvider, database as default };

// database.ref('expenses')
//     .on('value', snapshot => {
//         const expenses = [];
//         snapshot.forEach(childSnapshot => {
//             expenses.push({
//                 id: childSnapshot.key,
//                 ...childSnapshot.val()
//             });
//         })
//         console.log(expenses);
//     });

// setTimeout(() => {
//     database.ref('expenses').push({
//         description: 'expense 4',
//         amount: 40,
//         note: 'this is note',
//         createdAt: 40
//     });
// }, 3000);


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