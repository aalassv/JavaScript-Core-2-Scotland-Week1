
// Write an "if" statement inside the withdrawFunds function
// If the accountBalance is equal to or greater than the amount,
// deduct the amount from accountBalance and return the String 
// "Success, balance is now " + the account balance

// Otherwise don't change accountBalance and return the String 
// "Failed, balance is now " + the account balance

let account1 = {
    customerName: "Satya Nadella",
    accountBalance: 120
};

function withdrawFunds(customerAccount, amount) {
  if (customerAccount.accountBalance >= amount) {
      customerAccount.accountBalance -= amount;
      return `Success, balance is now ${customerAccount.accountBalance}`;
  }
  return `Failed, balance is now ${customerAccount.accountBalance}`;
}

let result1 = withdrawFunds(account1, 50);
console.log(result1);

let result2 = withdrawFunds(account1, 50);
console.log(result2);

let result3 = withdrawFunds(account1, 50);
console.log(result3);