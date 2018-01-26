
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import { addExpense, editExpense, removeExpense, startAddExpense, startRemoveExpense } from '../../actions/expenses';
import expenses from '../fixtures/expenses';
import { setTimeout } from 'timers';

const globalTunnel = require('global-tunnel');

globalTunnel.initialize({
  host: 'epsvc%5Cweiw:!Edmonton3@proxy.police.edmonton.ab.ca',
  port: 8080
});

const createMockStore = configureMockStore([thunk]);

test('should setup remove expense action object', () => {
    const id = '123abc';
    const action = removeExpense({ id });
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '123abc'
    });
});

test('should setup update expense action object', () => {
    const id = '123abc';
    const updates = {
        description: 'Rent',
        amount: 100
    };
    const action = editExpense(id, updates);
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: '123abc',
        updates: {
            description: 'Rent',
            amount: 100
        }
    });
});

test('should setup add expense action object with provided values', () => {
    const action = addExpense(expenses[2]);
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            ...expenses[2]
        }
    });
});

// test('should add expense to database and store', (done) => {
//     const store = createMockStore({});
//     const expenseData = {
//         description: 'Mouse',
//         amount: 3000,
//         note: 'This one is better',
//         createdAt: 1000
//     };

//     store.dispatch(startAddExpense(expenseData)).then(() => {
//         const actions = store.getActions();
//         expect(actions[0]).toEqual({
//             type: 'ADD_EXPENSE',
//             expense: {
//                 id: expect.any(String),
//                 ...expenseData
//             }
//         });
//         done();

//     });
// });

test('should add expense with defaults to database and store', () => {

});

// test('should remove expense from firebase', (done) => {
//     const store = createMockStore({});
//     const id = expenses[2].id;
//     store.dispatch(startRemoveExpense({ id })).then(() => {
//       const actions = store.getActions();
//       expect(actions[0]).toEqual({
//         type: 'REMOVE_EXPENSE',
//         id
//       });
//       done();
//     });
//   });

// test('should setup add expense action object with default values', () => {
//     const action = addExpense();
//     expect(action).toEqual({
//         type: 'ADD_EXPENSE',
//         expense: {
//             id: expect.any(String),
//             description: '',
//             note: '',
//             amount: 0,
//             createdAt: 0
//         }
//     });
// });