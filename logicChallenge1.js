// Bandingkan Angka

function bandingkanAngka(angka1, angka2){
    if(angka2 > angka1){
        return true
    }else if(angka1 > angka2){
        return false
    }else{
        return -1
    }
}

console.log(bandingkanAngka(5, 8)); // true
console.log(bandingkanAngka(5, 3)); // false
console.log(bandingkanAngka(4, 4)); // -1
console.log(bandingkanAngka(3, 3)); // -1
console.log(bandingkanAngka(17, 2)); // false
console.log('=========')
// Balik Kata
function balikKata(kata) {
      // you can only write your code here!
    let splitkata = kata.split('')
    splitkata.reverse()

    return splitkata.join('')

}
// TEST CASES
console.log(balikKata('Hello World and Coders')); // sredoC dna dlroW olleH
console.log(balikKata('John Doe')); // eoD nhoJ
console.log(balikKata('I am a bookworm')); // mrowkoob a ma I
console.log(balikKata('Coding is my hobby')); // ybboh ym si gnidoC
console.log(balikKata('Super')); // repuS



