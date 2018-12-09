function Person(name, age) {
    this.name = name
    this.age = age
}

// info 属性，直接挂载给了构造函数，所以它是静态属性
Person.info = 'aaaa'

// 实例方法
Person.prototype.say = function () {
    console.log('这是 Person 的实例方法')
}

// 静态方法
Person.show = function () {
    console.log('这是 Person 的静态 show 方法')
}

const p1 = new Person('王多多', 18)
console.log(p1)
p1.say() // 这是 实例方法
Person.show()


console.log('-------------------------------------------------------');

// 创建一个动物类
class Animal {
    // 类中的构造器
    constructor(name, age) {
        // 实例属性
        this.name = name,
            this.age = age
    }

    // 在 class 内部，通过 static 修饰的属性，就是静态属性
    static info = 'eeee' // 静态属性

    jiao() {
        console.log('动物的实例方法');
    }

    static show() {
        console.log('Animal的静态show方法');
    }
}

const a1 = new Animal('小黑', 4)

console.log(a1)
// console.log(a1.name)
// console.log(a1.age)
// console.log(Animal.info)
a1.jiao()
Animal.show()