// 父类
class Person {
    constructor(name, age) {
        this.name = name
        this.age = age
    }
    sayHi() {
        console.log('大家好');
    }
}

// 子类 Ameriacn
class Ameriacn extends Person {
    constructor(name, age) {
        super(name, age)
    }
}
const a1 = new Ameriacn('Jack', 20)
console.log(a1);
a1.sayHi()

// 子类 Chinses
class Chinses extends Person {
    constructor(name, age, IDNumber) {
        super(name, age)
        this.IDNumber = IDNumber
    }
}
const c1 = new Chinses('张三', 22, '421302............')
console.log(c1)
c1.sayHi()