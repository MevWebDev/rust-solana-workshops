const LAMPORTS_PER_SOL: f64 = 1_000_000_000.0;

fn lamports_to_printable_sol(lamports:u32) -> String {
    let lamports: f64 = lamports.into();
    let sol = lamports / LAMPORTS_PER_SOL;
    sol.to_string()

    
}

fn main() {
    // from / into
    let x: u64 = 5;
    let big_x: u128 = x.into();
    let big_x2: u128 = u128::from(x);

    // try_from, try_into

    let x: u64 = 5;
    let small_x: u32 = x.try_into().unwrap();
    let small_xw: u32 = u32::try_from(x).unwrap();

    println!("1000 lamports is  {} SOL", lamports_to_printable_sol(1000000000));
}
