const account = createAccount()

function createAccount() {

  const transactions = []

  return {
    deposit: (amount) => {
      transactions.push({type: 'deposit', amount: amount})
    },
    withdraw: (amount) => {
      transactions.push({type: 'withdrawal', amount: amount})
    },
    getBalance: () => {
      let balance = 0
      transactions.map(obj => {
        if (obj.type === 'deposit') {
          balance += obj.amount
        }
        else {
          balance -= obj.amount
        }
      })
      return balance
    },
    getHistory: () => {
      return transactions2 = JSON.parse(JSON.stringify(transactions))
    }
  }
}
