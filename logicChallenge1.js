console.log("===== Bandingkan Angka =====")
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
// console.log(bandingkanAngka(17, 2)); // false

console.log('========= Balik Kata =====')
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

console.log('======= Konversi Menit =====')
function konversiMenit(menit) {
      // you can only write your code here!
    let menitString =  menit.toString()
    menitString.split('')
    if(menitString.length == 2){
        if(menitString[0] == 6){
            return `1:0${menitString[1]}`
        }else if(menitString[0] > 6){
            let result = menitString[0] - 6
            return `1:${result}${menitString[1]}`
        }else if(menitString[0] < 6){
            return `0:${menitString[0]}${menitString[1]}`
        }
    }else if(menitString.length == 3){
        if(menitString[1] == 2 && menitString[2] !== 0){
            return `${menitString[1]}:0${menitString[2]}`
        }else if(menitString[1] == 2){
            return `${menitString[1]}:00`
        }
    }
    return false
    //   if(meni)
}
// TEST CASES
console.log(konversiMenit(63)); // 1:03
console.log(konversiMenit(124)); // 2:04
console.log(konversiMenit(53)); // 0:53
console.log(konversiMenit(88)); // 1:28
console.log(konversiMenit(120)); // 2:00
console.log("==== X dan o ======")
function xo(str) {
    // you can only write your code here!
    let x = []
    let o = []
    for(let i =0; i<str.length; i++){
        // console.log(str[i])
        if(str[i] == 'x'){
            x.push(str[i])
        }else if(str[i] == 'o'){
            o.push(str[i])
        }
    }
    if(x.length == o.length){
        return true
    }else{
        return false
    }
}
// TEST CASES
console.log(xo('xoxoxo')); // true
console.log(xo('oxooxo')); // false
console.log(xo('oxo')); // false
console.log(xo('xxxooo')); // true
console.log(xo('xoxooxxo')); // true



