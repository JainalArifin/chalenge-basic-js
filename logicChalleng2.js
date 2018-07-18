// console.log("==== Palindrome =====")
// function palindrome(kata) {
//       // you can only write your code here!
//     let splitKata = kata.split('')
//     splitKata.reverse()
//     let tesPalindrom = splitKata.join('')
//     if(kata == tesPalindrom){
//         return true
//     }else{
//         return false
//     }
// }
// // TEST CASES
// console.log(palindrome('katak')); // true
// console.log(palindrome('blanket')); // false
// console.log(palindrome('civic')); // true
// console.log(palindrome('kasur rusak')); // true
// console.log(palindrome('mister')); // false

// console.log("======== Menghitung Jumlah Kata ======")
// function hitungJumlahKata(kalimat) {
//      // you can only write your code here!
//      let lengKalimat = kalimat.split(' ')
//      return lengKalimat.length
// }
// // TEST CASES
// console.log(hitungJumlahKata('I have a dream')); // 4
// console.log(hitungJumlahKata('Never eat shredded wheat or cake')); // 6
// console.log(hitungJumlahKata('A song to sing')); // 4
// console.log(hitungJumlahKata('I')); // 1
// console.log(hitungJumlahKata('I believe I can code')); // 5

console.log("===== Pasangan Angka Terbesar ====")
function pasanganTerbesar(num) {
    // you can only write your code here!
    let numString = num.toString()
    // for(let i =0; i < numString.length; i++){
    //     // console.log(numString[i])
    //     if(numString[i] > numString[i]){
    //         console.log(numString[i])
    //     }
    // }
    return Math.max(...numString.slice(-2))
}
// TEST CASES
console.log(pasanganTerbesar(641573)); // 73
// console.log(pasanganTerbesar(12783456)); // 83
// console.log(pasanganTerbesar(910233)); // 91
// console.log(pasanganTerbesar(71856421)); // 85
// console.log(pasanganTerbesar(79918293)); // 99