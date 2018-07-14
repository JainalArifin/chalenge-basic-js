console.log("=====1. melakukan looping while ======")
let angka = 0;
console.log('Looping pertama')
while(angka < 20){
  angka++;
  if(angka % 2 == 0){
    console.log(angka, "I love Coding")
  }
}
console.log("Looping Kedua")
let angka2 = 21;
while(angka2 >= 0){
  angka2--;
  if(angka2 % 2 == 0 && angka2 > 0){
    console.log(angka2, " I will become developer")
  }
}
console.log("=====2. melakukan looping for ======")
console.log("==== Looping pertama =====")
for(let i=1; i <= 20; i++){
  console.log(i, " I Love Coding")
}
console.log("==== Looping Kedua =====")
for(let i=20; i >= 1; i--){
  console.log(i, " I will become developer")
}

console.log("====3.angka GANJIL GENAP =====")
for(let i=1; i <= 100; i++){
  // console.log(i)
  if(i % 2 == 0){
    console.log(i, " GENAP")
  }else{
    console.log(i, " GANJIL")
  }
}
console.log("==== counter 2")
for(let i = 1; i <= 100; i += 2){
  if(i % 3 == 0){
    console.log(i, " kelipatan ", i)
  }else{
    console.log("")
  }
}
console.log("==== counter 5")
for(let i = 1; i <= 100; i += 5){
  if(i % 6 == 0){
    console.log(i, " kelipatan ", i)
  }else{
    console.log("")
  }
}
console.log("==== counter 9")
for(let i = 1; i <= 100; i += 9){
  if(i % 10 == 0){
    console.log(i, " kelipatan ", i)
  }else{
    console.log("")
  }
}

console.log("===== Menyusun Barisan Bintang ====")
var rows = 2;
for(let i = 1; i <= rows; i++){
  console.log("*")
}

console.log(" ========= Menyusun Barisan Bintang Dengan Nested Looping =======")
let rows2 = 5;
let tmp = ''
for(let i = 0; i <rows2; i++){
    for(let j= 0; j < rows2; j++ ){
      tmp += '*'
    }
      tmp +='\n'
}
console.log(tmp)

console.log("===== Menyusun Barisan Tangga Bintang Dengan Nested Looping ======")
let row3 = 5;
let tmp2 = '';

for(let i =0; i < row3; i++){
  for(let j=0; j <= i; j++){
    tmp2 += '*'
  }
    tmp2 += '\n'
}

console.log(tmp2)
