import authReducer from '../../reducers/auth';

test('should login with redirect', () => {
    const initialState = {
        history: {
            push: jest.fn(),
            location: {
                pathname: '/'
            }
        },
        uid: undefined
    };
    const loginAction = {
        type: 'LOGIN',
        uid: '123'
    };
    const result = authReducer(initialState, loginAction);
    expect(result).toEqual({
        history,
        uid: '123'
    });
});