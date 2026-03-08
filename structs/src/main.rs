#[derive(Debug)]
struct Wallet {
    owner: String,
    balance: u64,

}

impl Wallet {
    fn new(owner: String, initial_balance: u64) -> Wallet {
        Wallet {
            owner,
            balance: initial_balance,
        }
    }

    fn deposit(&mut self, amount: u64) -> Result<(), String>{
        let result: Option<u64> = self.balance.checked_add(amount);
        
        match result {
            Some(new_balance) => self.balance = new_balance,
            None => return Err("overflox detected".to_string())
        }
        
        Ok(())
    }

    fn withdraw(&mut self, amount: u64) -> Result<(), String> {
        if amount > self.balance {
            return Err("not enough funds".to_string())
        }
        self.balance -= amount;
        
        Ok(())
    }
}


fn main() {
    let mut my_wallet: Wallet = Wallet::new("2137".to_string(), 1000000);

    my_wallet.deposit(2137).unwrap();
    my_wallet.withdraw(100).unwrap();

    println!("Portfel: {:?}", my_wallet)
}
