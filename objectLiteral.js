console.log("===== Logic Challenge - Change Me! ====")
function changeMe(arr){
  // return arr
  let Christ = {}
  let Robert = {}
  for(let i =0; i <arr.length; i++){
    Christ.firstName = arr[0][0]
    Christ.lastName = arr[0][1]
    Christ.gender = arr[0][2]
    // let ageResult = 2018 - arr[0][3]
    if(arr[0][3] == '' || arr[0][3] >= 2018 || arr[0][3] == undefined){
      Christ.age = 'Invalid Birth Year'
    }else{
      Christ.age = 2018 - arr[0][3]
    }


    Robert.firstName = arr[1][0]
    Robert.lastName = arr[1][1]
    Robert.gender = arr[1][2]
    if(arr[1][3] == '' || arr[1][3] >= 2018 || arr[1][3] == undefined){
      Robert.age = 'Invalid Birth Year'
    }else{
      Robert.age = arr[1][3]
    }
  }
  console.log('Christ:' ,Christ)
  console.log('Robert Downey:', Robert)
}
changeMe([['Christ', 'Evans', 'Male', 2016], ['Robert', 'Downey', 'Male']])
let test = changeMe([['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male']])
console.log(test)

console.log("======= Logic Challenge - Shopping Time! ======")

function shoppingTime(memberId, money){
  let obj = {}
  if(memberId == ''){
    console.log("Mohon maaf, toko X hanya berlaku untuk member saja")
  }else if(money < 50000){
    console.log("Mohon maaf, uang tidak cukup")
  }else{
    obj.memberId = memberId
    obj.money = money
    obj.listPurchased = []

    if(money > 1500000){
      money -= 1500000
      obj.listPurchased.push('Sepatu Stacattu')

    }
    if(money > 500000){
      money -= 500000
      obj.listPurchased.push('Baju Zoro')
    }
    if(money > 250000){
      money -= 250000
      obj.listPurchased.push('Baju H&N')
    }
    if(money > 175000){
      money -= 175000
      obj.listPurchased.push('Sweater Uniklooh')
    }
    if(money > 50000){
      money -= 50000
      obj.listPurchased.push('Casing Handphone')
    }
    obj.changeMoney = money
  }
    console.log(obj)
}

shoppingTime('1820RzKrnWn08', 2475000)
shoppingTime('82Ku8Ma742', 170000)

console.log("========= Logic Challenge - Toko X ========")

function countProfit(shoppers) {
    let listBarang = [
      ['Sepatu Stacattu', 1500000, 10],
      ['Baju Zoro', 500000, 2],
      ['Sweater Uniklooh', 175000, 1]
      ];
    // console.log(shoppers)
    let tmp = []
    for(let i =0; i < listBarang.length; i++){
        let obj = {}
        let tmp3 = []
        let result = 0
        let result2 = 0 //pp
        for(let j =0; j < shoppers.length; j++){
            // console.log(listBarang[i][2], ' <----- barang')
            result2 = listBarang[i][2]
            if(shoppers[j].product == listBarang[i][0]){
                // result2 += listBarang[i][1] * shoppers[j].amount // pp
                result += shoppers[j].amount
                tmp3.push(shoppers[j].name)
            }

        }
        obj.product = listBarang[i][0]
        obj.shoppers = tmp3
        // console.log(result * listBarang[i][1], ' <----')
        if( 0 < result2 - result ){
            obj.leftOver = result2 - result
        }else{
            obj.leftOver = 1
        }
        obj.totalProfit = result * listBarang[i][1]

        tmp.push(obj)
    }
    console.log(tmp)
    // you can only write your code here!
}
// console.log(countProfit([{name: 'Windi', product: 'Sepatu Stacattu', amount: 2}, {name: 'Vanessa', product: 'Sepatu Stacattu', amount: 3}, {name: 'Rani', product: 'Sweater Uniklooh', amount: 2}]))
countProfit([{name: 'Windi', product: 'Sepatu Stacattu', amount: 2}, {name: 'Vanessa', product: 'Sepatu Stacattu', amount: 3}, {name: 'Rani', product: 'Sweater Uniklooh', amount: 2}])

// countProfit([{name: 'Windi', product: 'Sepatu Naiki', amount: 5}]);