# awsome-knowledge-front-end
## 目录
什么是声明式编程
声明式编程 vs 命令式编程
什么是函数式编程
什么是组件设计模式
React 是什么
React 和 Angular 有什么不同
什么是虚拟DOM及其工作原理
什么是JSX
组件和不同类型
Props 和 State
什么是 PropTypes
如何更新状态和不更新状态
组件生命周期方法
超越继承的组合
如何在React中应用样式
什么是Redux及其工作原理
什么是React路由器及其工作原理
什么是错误边界
什么是 Fragments
什么是传送门(Portals)
什么是 Context
什么是 Hooks
如何提高性能
如何在重新加载页面时保留数据
如何从React中调用API

## 题目

### react

1. #### 什么是声明式编程
声明式编程是一种编程范式，它关注的是你要做什么，而不是如何做。它表达逻辑而不显示地定义步骤。这意味着我们需要根据逻辑的计算来声明要显示的组件。他没有描述控制流步骤。声明式编程的里自由HTML、SQL等。

HTML file
```
// HTML
<div>
  <p>Declarative Programming</p>
</div>
```
SQL file
```
select * from studens where firstName = 'declarative';
```

---

[[↑] 回到顶部](#awsome-knowledge-front-end)


2. #### 声明式编程 vs 命令式编程
声明式编程的编写方式描述了应该做什么，而命令式编程描述了如何做。在声明式编程中，让编译器决定如何做事情。声明性程序很容易推理，因为代码本身描述了它在做什么。

下面是一个例子，数组中的每个元素都乘以 2，我们使用声明式map函数，让编译器来完成其余的工作，而使用命令式，需要编写所有的流程步骤。

```js
const numbers = [1,2,3,4,5];
​
// 声明式
const doubleWithDec = numbers.map(number => number * 2);
​
console.log(doubleWithDec)
​
// 命令式
const doubleWithImp = [];
for(let i=0; i<numbers.length; i++) {
    const numberdouble = numbers[i] * 2;
    doubleWithImp.push(numberdouble)
}
​
console.log(doubleWithImp)
```

#### 什么是函数式编程
函数式编程是声明式编程的一部分。javascript中的函数是第一类公民，这意味着函数是数据，你可以像保存变量一样在应用程序中保存、检索和传递这些函数。

函数式编程有些核心的概念，如下：

- 不可变性(Immutability)
- 纯函数(Pure Functions)
- 数据转换(Data Transformations)
- 高阶函数 (Higher-Order Functions)
- 递归
- 组合


##### 不可变性(Immutability)
不可变性意味着不可改变。 在函数式编程中，你无法更改数据，也不能更改。 如果要改变或更改数据，则必须复制数据副本来更改。

例如，这是一个student对象和changeName函数，如果要更改学生的名称，则需要先复制　student　对象，然后返回新对象。

在javascript中，函数参数是对实际数据的引用，你不应该使用　student.firstName =“testing11”，这会改变实际的student 对象，应该使用Object.assign复制对象并返回新对象。

```js
let student = {
    firstName: "testing",
    lastName: "testing",
    marks: 500
}
​
function changeName(student) {
    // student.firstName = "testing11" //should not do it
    let copiedStudent = Object.assign({}, student);
    copiedStudent.firstName = "testing11";
    return copiedStudent;
}
​
console.log(changeName(student));
​
console.log(student);
```
##### 纯函数
纯函数是始终接受一个或多个参数并计算参数并返回数据或函数的函数。 它没有副作用，例如设置全局状态，更改应用程序状态，它总是将参数视为不可变数据。

我想使用 appendAddress 的函数向student对象添加一个地址。 如果使用非纯函数，它没有参数，直接更改 student 对象来更改全局状态。

使用纯函数，它接受参数，基于参数计算，返回一个新对象而不修改参数。
```js
let student = {
    firstName: "testing",
    lastName: "testing",
    marks: 500
}
​
// 非纯函数
function appendAddress() {
    student.address = {streetNumber:"0000", streetName: "first", city:"somecity"};
}
​
console.log(appendAddress());
​
// 纯函数
function appendAddress(student) {
    let copystudent = Object.assign({}, student);
    copystudent.address = {streetNumber:"0000", streetName: "first", city:"somecity"};
    return copystudent;
}
​
console.log(appendAddress(student));
​
console.log(student);

```

##### 数据转换
我们讲了很多关于不可变性的内容，如果数据是不可变的，我们如何改变数据。如上所述，我们总是生成原始数据的转换副本，而不是直接更改原始数据。

再介绍一些 javascript内置函数，当然还有很多其他的函数，这里有一些例子。所有这些函数都不改变现有的数据，而是返回新的数组或对象。

```js
let cities = ["irving", "lowell", "houston"];
​
// we can get the comma separated list
console.log(cities.join(','))
// irving,lowell,houston
​
// if we want to get cities start with i
const citiesI = cities.filter(city => city[0] === "i");
console.log(citiesI)
// [ 'irving' ]
​
// if we want to capitalize all the cities
const citiesC = cities.map(city => city.toUpperCase());
console.log(citiesC)
// [ 'IRVING', 'LOWELL', 'HOUSTON' ]
```

##### 高阶函数
高阶函数是将函数作为参数或返回函数的函数，或者有时它们都有。 这些高阶函数可以操纵其他函数。
```js
Array.map，Array.filter和Array.reduce是高阶函数，因为它们将函数作为参数。

const numbers = [10,20,40,50,60,70,80]
​
const out1 = numbers.map(num => num * 100);
console.log(out1);
// [ 1000, 2000, 4000, 5000, 6000, 7000, 8000 ]
​
const out2 = numbers.filter(num => num > 50);
console.log(out2);
// [ 60, 70, 80 ]
​
const out3 = numbers.reduce((out,num) => out + num);
console.log(out3);
// 330
```
下面是另一个名为isPersonOld的高阶函数示例，该函数接受另外两个函数，分别是 message和isYoung 。
```js
const isYoung = age => age < 25;
​
const message = msg => "He is "+ msg;
​
function isPersonOld(age, isYoung, message) {
    const returnMessage = isYoung(age)?message("young"):message("old");
    return returnMessage;
}
​
// passing functions as an arguments
console.log(isPersonOld(13,isYoung,message))
// He is young
```
##### 递归
递归是一种函数在满足一定条件之前调用自身的技术。只要可能，最好使用递归而不是循环。你必须注意这一点，浏览器不能处理太多递归和抛出错误。

下面是一个演示递归的例子，在这个递归中，打印一个类似于楼梯的名称。我们也可以使用for循环，但只要可能，我们更喜欢递归。
```js
function printMyName(name, count) {
    if(count <= name.length) {
        console.log(name.substring(0,count));
        printMyName(name, ++count);
    }
}
​
console.log(printMyName("Bhargav", 1));
​
/*
B
Bh
Bha
Bhar
Bharg
Bharga
Bhargav
*/
​
// withotu recursion
var name = "Bhargav"
var output = "";
for(let i=0; i<name.length; i++) {
    output = output + name[i];
    console.log(output);
}
```
##### 组合
在React中，我们将功能划分为小型可重用的纯函数，我们必须将所有这些可重用的函数放在一起，最终使其成为产品。 将所有较小的函数组合成更大的函数，最终，得到一个应用程序，这称为组合。

实现组合有许多不同方法。 我们从Javascript中了解到的一种常见方法是链接。 链接是一种使用点表示法调用前一个函数的返回值的函数的方法。

这是一个例子。 我们有一个name，如果firstName和lastName大于5个单词的大写字母，刚返回，并且打印名称的名称和长度。

```js
const name = "Bhargav Bachina";
​
const output = name.split(" ")
    .filter(name => name.length > 5)
    .map(val => {
    val = val.toUpperCase();
    console.log("Name:::::"+val);
    console.log("Count::::"+val.length);
    return val;
});
​
console.log(output)
/*
Name:::::BHARGAV
Count::::7
Name:::::BACHINA
Count::::7
[ 'BHARGAV', 'BACHINA' ]
*/
```
在React中，我们使用了不同于链接的方法，因为如果有30个这样的函数，就很难进行链接。这里的目的是将所有更简单的函数组合起来生成一个更高阶的函数。
```js
const name = compose(
    splitmyName,
    countEachName,
    comvertUpperCase,
    returnName
)
​
console.log(name);
```

####
####
####

####
####
####

####
####
####

####
####
####
---

[[↑] 回到顶部](#awsome-knowledge-front-end)
