function CreateBank() {
    let balance = 5000;
    const user = {
        deposit: function(amount) {
            if (typeof amount == Number && amount > 0) {
                balance += amount;
                return balance;
            }
        },
        withdraw: function(amount) {
            if (typeof amount == Number && amount > 0 && balance >= amount) {
                balance -= amount;
                return balance;
            }
        },
        get_balance: function(amount) {

            return balance;

        },

    }
    return user;
}

const customer = CreateBank();