// function targetTerdekat(arr){
//     // you can only write your code here!
//     let j = 0;

//     for(let i =0; i < arr.length; i++){
//         if(arr[i] === 'o'){
//             let arrSlice = arr.slice(i)
//             for(let n = 0; n < arrSlice.length; n++){
//                 if(arrSlice[n] === 'x'){
//                     let result = arrSlice.slice(0, n)
//                     return result.length
//                 }
//             }
//         }else if(arr[i] === 'x'){
//             j = i;
//         }
//     }
//     for(let n=0; n < arr.length; n++){
//         if(arr[n] !== 'x'){
//             return 0
//         }else if(arr[n] === 'x'){
//             return 1
//         }
//     }

// }
// // TEST CASES
// console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
// console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
// console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
// console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
// console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2

// console.log("===== Mengelompokkan Angka =====")
// function mengelompokkanAngka(arr) {
//      // you can only write your code here!
//      let tmp = []
//      let kelipatan = []
//      let ganjil = []
//      let genap = []
//      for(let i =0; i < arr.length; i++){
//         if(arr[i] % 3 == 0){
//             kelipatan.push(arr[i])
//         }else if(arr[i] % 2 == 1){
//             ganjil.push(arr[i])
//         }else if(arr[i] % 2 == 0){
//             genap.push(arr[i])
//         }
//     }
//     tmp.push(genap)
//     tmp.push(ganjil)
//     tmp.push(kelipatan)

//     return tmp
// }
// // TEST CASES
// console.log(mengelompokkanAngka([2, 4, 6])); // [ [2, 4], [], [6] ]
// console.log(mengelompokkanAngka([1, 2, 3, 4, 5, 6, 7, 8, 9])); // [ [ 2, 4, 8 ], [ 1, 5, 7 ], [ 3, 6, 9 ] ]
// console.log(mengelompokkanAngka([100, 151, 122, 99, 111])); // [ [ 100, 122 ], [ 151 ], [ 99, 111 ] ]
// console.log(mengelompokkanAngka([])); // [ [], [], [] ]

console.log("===== Mengelompokkan Hewan ====")
function groupAnimals(animals) {
      // you can only write your code here!
    animals.sort()
    let tmpAnimals = []
    let animalSort = []
    let animalSort2 = []
    let animalSort3 = []
    let animalSort4 = []
    for(let i =0; i < animals.length; i++){
        if(animals[i].split('')[0] == 'a'){
            animalSort.push(animals[i])
        }else if(animals[i].split('')[0] == 'c'){
            animalSort2.push(animals[i])
        }else if(animals[i].split('')[0] == 'k'){
            animalSort3.push(animals[i])
        }else if(animals[i].split('')[0] == 'u'){
            animalSort4.push(animals[i])
        }
    }
    tmpAnimals.push(animalSort)
    tmpAnimals.push(animalSort2)
    tmpAnimals.push(animalSort3)
    tmpAnimals.push(animalSort4)

    return tmpAnimals

}
// TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda'], ['unta'] ]

