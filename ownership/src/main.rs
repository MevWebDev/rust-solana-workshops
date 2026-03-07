fn main() {
    let s1 = String::from("String 1");
    // let s2 = s1;
    // println!("{}", s1) - nie zadziała bo s1 juz zniknal

    let s2 = s1.clone();
    println!("{}", s1)

}
