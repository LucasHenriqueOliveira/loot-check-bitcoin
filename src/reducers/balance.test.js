import balanceReducer from './balance';
import * as constants from '../actions/constants';

describe('Balance Reducer', () => {
    it('Sets a balance', () => {
        const balance = 10;
        
        expect(balanceReducer(undefined, { type: constants.SET_BALANCE, balance})).toEqual(balance);
    });

    it('Deposits into the balance', () => {
        const deposit = 10;
        const initialState = 5;

        expect(balanceReducer(initialState, { type: constants.DEPOSIT, deposit})).toEqual(initialState + deposit);
    });

    it('Withdraws from the balance', () => {
        const withdraw = 10;
        const initialState = 15;

        expect(balanceReducer(initialState, { type: constants.WITHDRAW, withdraw})).toEqual(initialState - withdraw);
    });
});