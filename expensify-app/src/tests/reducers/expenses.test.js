import expensesReducer from '../../reducers/expenses';

test('should return default state with @@init action ', () => {
    const state = expensesReducer(undefined, { type: '@@INIT' });
    expect(state).toEqual([]);
});

test('should add expense', () => {
    const action = {
        type: 'ADD_EXPENSE',
        expense: {
            description: 'Rent',
            amount: 109500,
            createdAt: 1000
        }
    };
    const state = expensesReducer(undefined, action);
    expect(state).toEqual([
        {
            description: 'Rent',
            amount: 109500,
            createdAt: 1000
        }
    ]);
});

test('should edit expense', () => {
    const initialState = [
        {
            id: '1',
            description: 'Rent',
            amount: 109500,
            createdAt: 1000,
            note: 'Last months rent'
        }
    ];
    const action = {
        type: 'EDIT_EXPENSE',
        id: '1',
        updates: {
            description: 'UPDATED_DESC',
            amount: 999,
            note: 'UPDATED_NOTE',
            createdAt: 999
        }
    };
    const state = expensesReducer(initialState, action);
    expect(state).toEqual([
        {
            id: '1',
            description: 'UPDATED_DESC',
            amount: 999,
            note: 'UPDATED_NOTE',
            createdAt: 999
        }
    ]);
});

test('should not edit expense if id is not found', () => {
    const initialState = [
        {
            id: '1',
            description: 'Rent',
            amount: 109500,
            createdAt: 1000,
            note: 'Last months rent'
        }
    ];
    const action = {
        type: 'EDIT_EXPENSE',
        id: '-1',
        updates: {
            description: 'UPDATED_DESC',
            amount: 999,
            note: 'UPDATED_NOTE',
            createdAt: 999
        }
    };
    const state = expensesReducer(initialState, action);
    expect(state).toEqual([
        {
            id: '1',
            description: 'Rent',
            amount: 109500,
            createdAt: 1000,
            note: 'Last months rent'
        }
    ]);
});

test('should remove expense if id is found', () => {
    const initialState = [
        {
            id: '1',
            description: 'Rent',
            amount: 109500,
            createdAt: 1000,
            note: 'Last months rent'
        }
    ];
    const action = {
        type: 'REMOVE_EXPENSE',
        id: '1'
    };
    const state = expensesReducer(initialState, action);
    expect(state).toEqual([]);
});

test('should note remove expense if id is not found', () => {
    const initialState = [
        {
            id: '1',
            description: 'Rent',
            amount: 109500,
            createdAt: 1000,
            note: 'Last months rent'
        }
    ];
    const action = {
        type: 'REMOVE_EXPENSE',
        id: '-1'
    };
    const state = expensesReducer(initialState, action);
    expect(state).toEqual(initialState);
});