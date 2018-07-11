
console.log("====== if else ======")
const nama = "Mikael"
const peran = ""

if(nama == '' || peran == ''){
  if(peran !== ''){
    console.log("Nama harus di isi!")
  }else if(nama !== ''){
    console.log("Peran harus di isi!")
  }else{
    console.log("Nama dan Peran harus di isi!")
  }
}
else if(nama == "Mikael" && peran == ""){
  console.log(`Halo ${nama}, Pilih peranmu untuk memulai game!`)
}
else if(nama == "Nina" && peran == "Kesatria"){
  console.log("Selamat datang di Dunia Proxytia, ${nama}")
  console.log("Halo ${peran} ${nama}, kamu dapat menyerang dengan senjatamu!")
}else if(nama == "zero" && peran == "penyihir"){
  console.log("Selamat datang di Dunia Proxytia, ${nama}")
  console.log("Halo ${peran} ${nama}, ciptakan keajaiban yang membantu kemenanganmu!")
}else{
  console.log("nama dan peran tidak tersedia")
}

console.log("====== switch case ======")
// switch
const hari = 31;
const bulan = 12;
const tahun = 2200;

if(hari <= 31 && bulan <= 12 && tahun >= 1900){
  if(tahun <= 2200){
    // console.log(tahun)
    switch(bulan){
      case 1:
        console.log(`${hari} Januari ${tahun}`)
      break;
      case 2:
        console.log(`${hari} Februari ${tahun}`)
      break;
      case 3:
        console.log(`${hari} Maret ${tahun}`)
      break;
      case 4:
        console.log(`${hari} April ${tahun}`)
      break;
      case 5:
        console.log(`${hari} Mei ${tahun}`)
      break;
      case 6:
        console.log(`${hari} Juni ${tahun}`)
      break;
      case 7:
        console.log(`${hari} Juli ${tahun}`)
      break;
      case 8:
        console.log(`${hari} Agustus ${tahun}`)
      break;
      case 9:
        console.log(`${hari} September ${tahun}`)
      break;
      case 10:
        console.log(`${hari} Oktober ${tahun}`)
      break;
      case 11:
        console.log(`${hari} November ${tahun}`)
      break;
      default:
        console.log(`${hari} Desember ${tahun}`)

    }
  }
}