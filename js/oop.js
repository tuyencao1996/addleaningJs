
class MotoBike {
    constructor(name, brand, maxSpeed, color, cc) {
        this.name = name;
        this.brand = brand;
        this.maxSpeed = maxSpeed;
        this.color = color;
        this.cc = cc;
    }
    netbo(){
        console.log('khói trắng')
    }
}

class Motohonda extends MotoBike {
    constructor(proce, name, brand, maxSpeed, color, cc) {
        super(name,proce, brand, maxSpeed, color, cc);
        this.price = price
    }

    dongCo = ''
    hopSo = ''

    netbo(){
        console.log('phum lua')
    }

    setDongco() {
        this.dongCo = dongCo
    }

    sethopSo() {
        this.hopSo = hopSo
    }
}

const airBlade = new Motohonda('', '', '', '','', '')
