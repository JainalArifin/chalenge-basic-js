console.log("===== Melakukan Looping Data Array ====")
var input1 = [["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"]]
input1.forEach((value)=>{
  console.log("Nomor ID: ", value[0])
  console.log("Nama Lengkap: ", value[1])
  console.log("TTL: ",value[2])
  console.log("Hobi", value[3])
})

console.log("==== Menggunakan Built-in Function pada Array ====")
let input = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"];
input.splice(1, 1, "Roman Alamsyah Elsharawy")
input.splice(2, 1, "Provinsi Bandar Lampung")
input.splice(4, 0, 'Pria')
input.splice(5, 1, "SMA Internasional Metro")
console.log(input);
console.log("=============")
let inputSplit = input[3].split("/")
let tmp = []
tmp.push(inputSplit[2])
tmp.push(inputSplit[1])
tmp.push(inputSplit[0])
console.log(tmp)
console.log("===========")
switch(Number(inputSplit[1])){
  case 01:
    console.log('january')
  break;
  case 02:
    console.log('february')
  break;
  case 03:
    console.log('maret')
  break;
  case 04:
    console.log('april')
  break;
  case 05:
    console.log('mei')
  break;
  case 06:
    console.log('juni')
  break;
  case 07:
    console.log('july')
  break;
  case 08:
    console.log('agustus')
  break;
  case 09:
    console.log('september')
  break;
  case 10:
    console.log('oktober')
  break;
  case 11:
    console.log('November')
  break;
  case 12:
    console.log('Desember')
  break;
  default:
    console.log('maaf yang anda masukan salah')
}
console.log('======')
let splitInput1 = input[3].split('/')
console.log(splitInput1.join('-'))
console.log("============")
input.splice(1, 1, "Roman Alamsyah")
console.log(input[1])
/** * keluaran yang diharapkan (pada console)
 * * * ["0001", "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung","21/05/1989", "Pria", "SMA Internasional Metro"]
 * * Mei
 * * ["1989", "21", "05"]
 * * 21-05-1989
 * * Roman Alamsyah
 * */