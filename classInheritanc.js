class Handphone{
    constructor(name, color, price){
        this.name = name,
        this.color = color,
        this.price = price
    }

    diskon(){
        return this.price - 50000;
    }
}

class Xiaomi extends Handphone{
    constructor(name, color, price){
        super(name, color, price)
        this.madein = ''
    }

    pembuatanLocal(){
        return this.madein = 'indonesia'
    }

    pembuatanLuar(){
        return this.madein = 'chinese'
    }
}

class Oppo extends Handphone{
    constructor(name, color, price){
        super(name, color, price)
        this.orginal = false
    }

    productOrginal(){
        return this.orginal = 'original'
    }

    productBajakan(){
        return this.orginal = 'bajakan dari sukabumi'
    }
}

const xiomi = new Xiaomi('xiomi redmi 4', 'gold', 2000000)
console.log(xiomi)
console.log('dapet diskon menjadi : ', xiomi.diskon()) // mengambil method dari induknya
console.log('Made in :', xiomi.pembuatanLocal())

console.log("================")
const oppo = new Oppo('oppo A7', 'white', 1500000)
console.log(oppo)
console.log('dapat diskon menjadi : ', oppo.diskon())
console.log('jenis product : ', oppo.productOrginal())

