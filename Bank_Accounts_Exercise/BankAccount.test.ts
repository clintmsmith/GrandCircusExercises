import { BankAccount } from "./BankAccount"

describe('Bank Account Tests', () => {
    test('Add 10% interest to $100 balance', () => {
        // arrange
        // instantiate your objects and setup you dependencies
        let testBankAccount = new BankAccount(100, 0.1);

        // You don't necessarily have to do this, but here we did an 'expect'
        // to confirm that our initial balance is correct
        expect(testBankAccount.balance).toBe(100);

        // Called the function
        testBankAccount.addInterest();

        // Did it work?
        expect(testBankAccount.balance).toBe(110);
    })
})