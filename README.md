# awsome-interview-front-end

- 欢迎大家将所有面试题都可以放进来，方便总结和反思。

- 欢迎大家都来看看，提供各个阶段的前端爱好者学习和面试的必备题库。

- 欢迎大家将自己面过的题目或看到比较经典的贡献出来，众人拾柴火焰高，相信有很多人都会受到影响和帮助。


## 面试题

### JavaScript

1. [为什么["1","2","3"].map(parseInt) 返回[1,NaN,NaN]](https://github.com/awsome-interview/awsome-interview-front-end/blob/master/javascript/javascript1.md)

2. [手写节流和防抖](https://github.com/awsome-interview/awsome-interview-front-end/blob/master/javascript/javascript2.md)

3. [介绍下 Set、Map、WeakSet 和 WeakMap 的区别？](https://github.com/awsome-interview/awsome-interview-front-end/blob/master/javascript/javascript3.md)

4. [JavaScript包括哪些数据类型，请分别编写3种以上类型的判断函数如：isString()？](https://github.com/awsome-interview/awsome-interview-front-end/blob/master/javascript/javascript4.md)

5. [编写一个JavaScript函数，实时显示当前时间，格式‘年-月-日 时：分：秒’?](https://github.com/awsome-interview/awsome-interview-front-end/blob/master/javascript/javascript5.md)

6. [如何显示/隐藏一个DOM元素？](https://github.com/awsome-interview/awsome-interview-front-end/blob/master/javascript/javascript6.md)

7. [如何添加html元素的事件处理，有几种方法。](https://github.com/awsome-interview/awsome-interview-front-end/blob/master/javascript/javascript7.md)

8. [如何控制alert中的换行。](https://github.com/awsome-interview/awsome-interview-front-end/blob/master/javascript/javascript8.md)

9. [判断一个字符串中出现次数最多的字符，统计这个次数。](https://github.com/awsome-interview/awsome-interview-front-end/blob/master/javascript/javascript9.md)

10. [判断字符串是否是这样组成的，第一个必须是字母，后面可以是字母、数字、下划线，总长度为5-20](https://github.com/awsome-interview/awsome-interview-front-end/blob/master/javascript/javascript10.md)

11. [请编写一个JavaScript函数parseQueryString，他的用途是把URL参数解析为一个对象，如：var url=“http://witmax.cn/index.php?key0=0&key1=1&key2=2”；](https://github.com/awsome-interview/awsome-interview-front-end/blob/master/javascript/javascript11.md)

12. [在页面中有如下html：<div id="field"><input type="text" value="User Name"/></div><span class="red"></span>要求用闭包方式写一个JS从文本框中取出值并在标签span中显示出来。](https://github.com/awsome-interview/awsome-interview-front-end/blob/master/javascript/javascript12.md)

13. [在IE6.0下面是不支持position：fixed的，请写一个JS使用<div id="box"></div>固定在页面的右下角。](https://github.com/awsome-interview/awsome-interview-front-end/blob/master/javascript/javascript13.md)

14. [请实现，鼠标移到页面中的任意标签，显示出这个标签的基本矩形轮廓。](https://github.com/awsome-interview/awsome-interview-front-end/blob/master/javascript/javascript14.md)

15. [js的基础对象有哪些，window和document的常用的方法和属性列出来](https://github.com/awsome-interview/awsome-interview-front-end/blob/master/javascript/javascript15.md)

16. [ JavaScript中如何对一个对象进行深度clone](https://github.com/awsome-interview/awsome-interview-front-end/blob/master/javascript/javascript16.md)

17. [ js中如何定义class，如何扩展protope？](https://github.com/awsome-interview/awsome-interview-front-end/blob/master/javascript/javascript17.md)

18. [ ajax是什么？ajax的交互模型？同步和异步的区别？如何解决跨域问题？](https://github.com/awsome-interview/awsome-interview-front-end/blob/master/javascript/javascript18.md)

19. [ 请给出异步加载js方案，不少于两种？](https://github.com/awsome-interview/awsome-interview-front-end/blob/master/javascript/javascript19.md)

20. [ 多浏览器检测通过什么？](https://github.com/awsome-interview/awsome-interview-front-end/blob/master/javascript/javascript20.md)

21. [ window.onload()在哪个周期中？](https://github.com/awsome-interview/awsome-interview-front-end/blob/master/javascript/javascript21.md)

22. [generator如何执行？如何让generator自动next（不通过next.next.next）？](https://github.com/awsome-interview/awsome-interview-front-end/blob/master/javascript/javascript22.md)

23. [promise原理？](https://github.com/awsome-interview/awsome-interview-front-end/blob/master/javascript/javascript23.md)

24. [输出是什么？](https://github.com/awsome-interview/awsome-interview-front-end/blob/master/javascript/javascript24.md)
```javascript
function sayHi() {
  console.log(name);
  console.log(age);
  var name = "Lydia";
  let age = 21;
}
sayHi();

A: Lydia and undefined
B: Lydia and ReferenceError
C: ReferenceError and 21
D: undefined and ReferenceError
```
---


25. [输出是什么？](https://github.com/awsome-interview/awsome-interview-front-end/blob/master/javascript/javascript25.md)
```javascript
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1);
}

for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1);
}
A: 0 1 2 and 0 1 2
B: 0 1 2 and 3 3 3
C: 3 3 3 and 0 1 2
```
---

26. [输出是什么？](https://github.com/awsome-interview/awsome-interview-front-end/blob/master/javascript/javascript26.md)
```javascript
const shape = {
  radius: 10,
  diameter() {
    return this.radius * 2;
  },
  perimeter: () => 2 * Math.PI * this.radius
};

shape.diameter();
shape.perimeter();
A: 20 and 62.83185307179586
B: 20 and NaN
C: 20 and 63
D: NaN and 63
```
---

27. [Which one is true?](https://github.com/awsome-interview/awsome-interview-front-end/blob/master/javascript/javascript27.md)
```javascript
const bird = {
  size: "small"
};

const mouse = {
  name: "Mickey",
  small: true
};
A: mouse.bird.size is not valid
B: mouse[bird.size] is not valid
C: mouse[bird["size"]] is not valid
D: All of them are valid
```
---

28. [输出是什么？](https://github.com/awsome-interview/awsome-interview-front-end/blob/master/javascript/javascript28.md)
```javascript
let c = { greeting: "Hey!" };
let d;

d = c;
c.greeting = "Hello";
console.log(d.greeting);
A: Hello
B: Hey
C: undefined
D: ReferenceError
E: TypeError
```
---

29. [输出是什么？](https://github.com/awsome-interview/awsome-interview-front-end/blob/master/javascript/javascript29.md)
```javascript
let a = 3;
let b = new Number(3);
let c = 3;

console.log(a == b);
console.log(a === b);
console.log(b === c);
A: true false true
B: false false true
C: true false false
D: false true true
```
---

30. [输出是什么？](https://github.com/awsome-interview/awsome-interview-front-end/blob/master/javascript/javascript30.md)
```javascript
class Chameleon {
  static colorChange(newColor) {
    this.newColor = newColor;
    return this.newColor;
  }

  constructor({ newColor = "green" } = {}) {
    this.newColor = newColor;
  }
}

const freddie = new Chameleon({ newColor: "purple" });
freddie.colorChange("orange");
A: orange
B: purple
C: green
D: TypeError
```
---

31. [输出是什么？](https://github.com/awsome-interview/awsome-interview-front-end/blob/master/javascript/javascript31.md)
```javascript
let greeting;
greetign = {}; // Typo!
console.log(greetign);
A: {}
B: ReferenceError: greetign is not defined
C: undefined
```
---


32. [What happens when we do this?](https://github.com/awsome-interview/awsome-interview-front-end/blob/master/javascript/javascript32.md)
```javascript
function bark() {
  console.log("Woof!");
}

bark.animal = "dog";
A: Nothing, this is totally fine!
B: SyntaxError. You cannot add properties to a function this way.
C: undefined
D: ReferenceError
```
---

33. [输出是什么？](https://github.com/awsome-interview/awsome-interview-front-end/blob/master/javascript/javascript33.md)
```javascript
function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

const member = new Person("Lydia", "Hallie");
Person.getFullName = function() {
  return `${this.firstName} ${this.lastName}`;
};

console.log(member.getFullName());
A: TypeError
B: SyntaxError
C: Lydia Hallie
D: undefined undefined
```
---

34. [输出是什么？](https://github.com/awsome-interview/awsome-interview-front-end/blob/master/javascript/javascript34.md)
```javascript
function Person(firstName, lastName) {
  this.firstName = firstName
  this.lastName = lastName
}

const lydia = new Person('Lydia', 'Hallie')
const sarah = Person('Sarah', 'Smith')

console.log(lydia)
console.log(sarah)
A: Person {firstName: "Lydia", lastName: "Hallie"} and undefined
B: Person {firstName: "Lydia", lastName: "Hallie"} and Person {firstName: "Sarah", lastName: "Smith"}
C: Person {firstName: "Lydia", lastName: "Hallie"} and {}
D:Person {firstName: "Lydia", lastName: "Hallie"} and ReferenceError
```
---

35. [事件传播的三个阶段是什么？](https://github.com/awsome-interview/awsome-interview-front-end/blob/master/javascript/javascript35.md)
```javascript
A: Target > Capturing > Bubbling
B: Bubbling > Target > Capturing
C: Target > Bubbling > Capturing
D: Capturing > Target > Bubbling
```
---

36. [输出是什么？](https://github.com/awsome-interview/awsome-interview-front-end/blob/master/javascript/javascript36.md)
```javascript
function sum(a, b) {
  return a + b
}

sum(1, '2')
A: NaN
B: TypeError
C: "12"
D: 3
```
---

37. [输出是什么？](https://github.com/awsome-interview/awsome-interview-front-end/blob/master/javascript/javascript37.md)
```javascript
let number = 0
console.log(number++)
console.log(++number)
console.log(number)
A: 1 1 2
B: 1 2 2
C: 0 2 2
D: 0 1 2
```
---

38. [输出是什么？](https://github.com/awsome-interview/awsome-interview-front-end/blob/master/javascript/javascript38.md)
```javascript
function getPersonInfo(one, two, three) {
  console.log(one)
  console.log(two)
  console.log(three)
}

const person = 'Lydia'
const age = 21

getPersonInfo`${person} is ${age} years old`
A: "Lydia" 21 ["", " is ", " years old"]
B: ["", " is ", " years old"] "Lydia" 21
C: "Lydia" ["", " is ", " years old"] 21
```
---

39. [输出是什么？](https://github.com/awsome-interview/awsome-interview-front-end/blob/master/javascript/javascript39.md)
```javascript
function checkAge(data) {
  if (data === { age: 18 }) {
    console.log('You are an adult!')
  } else if (data == { age: 18 }) {
    console.log('You are still an adult.')
  } else {
    console.log(`Hmm.. You don't have an age I guess`)
  }
}

checkAge({ age: 18 })
A: You are an adult!
B: You are still an adult.
C: Hmm.. You don't have an age I guess
```
---

40. [输出是什么？](https://github.com/awsome-interview/awsome-interview-front-end/blob/master/javascript/javascript40.md)
```javascript
function getAge(...args) {
  console.log(typeof args)
}

getAge(21)
A: "number"
B: "array"
C: "object"
D: "NaN"
```
---

41. [所有对象都有原型？](https://github.com/awsome-interview/awsome-interview-front-end/blob/master/javascript/javascript41.md)
```javascript
A: true
B: false
```
---

42. [输出是什么？](https://github.com/awsome-interview/awsome-interview-front-end/blob/master/javascript/javascript42.md)
```javascript
function getAge() {
  'use strict'
  age = 21
  console.log(age)
}

getAge()
A: 21
B: undefined
C: ReferenceError
D: TypeError
```
---

43. [输出是什么？](https://github.com/awsome-interview/awsome-interview-front-end/blob/master/javascript/javascript43.md)
```javascript
const sum = eval('10*10+5')
A: 105
B: "105"
C: TypeError
D: "10*10+5"
```
---

44. [cool_secret 可访问多长时间？](https://github.com/awsome-interview/awsome-interview-front-end/blob/master/javascript/javascript44.md)
```javascript
sessionStorage.setItem('cool_secret', 123)
A: 永远，数据不会丢失。
B: 当用户关掉标签页时。
C: 当用户关掉整个浏览器，而不只是关掉标签页。
D: 当用户关闭电脑时。
```
---

45. [输出是什么？](https://github.com/awsome-interview/awsome-interview-front-end/blob/master/javascript/javascript45.md)
```javascript
var num = 8
var num = 10

console.log(num)
A: 8
B: 10
C: SyntaxError
D: ReferenceError
```
---

46. [输出是什么？](https://github.com/awsome-interview/awsome-interview-front-end/blob/master/javascript/javascript46.md)
```javascript
const obj = { 1: 'a', 2: 'b', 3: 'c' }
const set = new Set([1, 2, 3, 4, 5])

obj.hasOwnProperty('1')
obj.hasOwnProperty(1)
set.has('1')
set.has(1)
A: false true false true
B: false true true true
C: true true false true
D: true true true true
```
---

47. 输出是什么？

```javascript
const obj = { a: 'one', b: 'two', a: 'three' }
console.log(obj)
```

- A: `{ a: "one", b: "two" }`
- B: `{ b: "two", a: "three" }`
- C: `{ a: "three", b: "two" }`
- D: `SyntaxError`

<details><summary><b>答案</b></summary>
<p>

#### 答案: C

如果你有两个名称相同的键，则键会被替换掉。它仍然位于第一个键出现的位置，但是值是最后出现那个键的值。

</p>
</details>

---

48. JavaScript 全局执行上下文为你做了两件事：全局对象和 this 关键字。

- A: true
- B: false
- C: it depends

<details><summary><b>答案</b></summary>
<p>

#### 答案: A

基本执行上下文是全局执行上下文：它是代码中随处可访问的内容。

</p>
</details>

---

49. 输出是什么？

```javascript
for (let i = 1; i < 5; i++) {
  if (i === 3) continue
  console.log(i)
}
```

- A: `1` `2`
- B: `1` `2` `3`
- C: `1` `2` `4`
- D: `1` `3` `4`

<details><summary><b>答案</b></summary>
<p>

#### 答案: C

如果某个条件返回 `true`，则 `continue` 语句跳过本次迭代。

</p>
</details>

---

50. 输出是什么？

```javascript
String.prototype.giveLydiaPizza = () => {
  return 'Just give Lydia pizza already!'
}

const name = 'Lydia'

name.giveLydiaPizza()
```

- A: `"Just give Lydia pizza already!"`
- B: `TypeError: not a function`
- C: `SyntaxError`
- D: `undefined`

<details><summary><b>答案</b></summary>
<p>

#### 答案: A

`String` 是内置的构造函数，我们可以向它添加属性。我只是在它的原型中添加了一个方法。基本类型字符串被自动转换为字符串对象，由字符串原型函数生成。因此，所有 string(string 对象)都可以访问该方法！

</p>
</details>

---

51. 输出是什么？

```javascript
const a = {}
const b = { key: 'b' }
const c = { key: 'c' }

a[b] = 123
a[c] = 456

console.log(a[b])
```

- A: `123`
- B: `456`
- C: `undefined`
- D: `ReferenceError`

<details><summary><b>答案</b></summary>
<p>

#### 答案: B

对象的键被自动转换为字符串。我们试图将一个对象 `b` 设置为对象 `a` 的键，且相应的值为 `123`。

然而，当字符串化一个对象时，它会变成 `"[object Object]"`。因此这里说的是，`a["[object Object]"] = 123`。然后，我们再一次做了同样的事情，`c` 是另外一个对象，这里也有隐式字符串化，于是，`a["[object Object]"] = 456`。

然后，我们打印 `a[b]`，也就是 `a["[object Object]"]`。之前刚设置为 `456`，因此返回的是 `456`。

</p>
</details>

---

52. 输出是什么？

```javascript
const foo = () => console.log('First')
const bar = () => setTimeout(() => console.log('Second'))
const baz = () => console.log('Third')

bar()
foo()
baz()
```

- A: `First` `Second` `Third`
- B: `First` `Third` `Second`
- C: `Second` `First` `Third`
- D: `Second` `Third` `First`

<details><summary><b>答案</b></summary>
<p>

#### 答案: B

我们有一个 `setTimeout` 函数，并首先调用它。然而，它是最后打印日志的。

这是因为在浏览器中，我们不仅有运行时引擎，还有一个叫做 `WebAPI` 的东西。`WebAPI` 提供了 `setTimeout` 函数，也包含其他的，例如 DOM。

将 _callback_ 推送到 WebAPI 后，`setTimeout` 函数本身(但不是回调！)将从栈中弹出。

<img src="https://i.imgur.com/X5wsHOg.png" width="200">

现在，`foo` 被调用，打印 `"First"`。

<img src="https://i.imgur.com/Pvc0dGq.png" width="200">

`foo` 从栈中弹出，`baz` 被调用. 打印 `"Third"`。

<img src="https://i.imgur.com/WhA2bCP.png" width="200">

WebAPI 不能随时向栈内添加内容。相反，它将回调函数推到名为 _queue_ 的地方。

<img src="https://i.imgur.com/NSnDZmU.png" width="200">

这就是事件循环开始工作的地方。一个**事件循环**查看栈和任务队列。如果栈是空的，它接受队列上的第一个元素并将其推入栈。

<img src="https://i.imgur.com/uyiScAI.png" width="200">

`bar` 被调用，打印 `"Second"`，然后它被栈弹出。

</p>
</details>

---

53. 当点击按钮时，event.target是什么？

```html
<div onclick="console.log('first div')">
  <div onclick="console.log('second div')">
    <button onclick="console.log('button')">
      Click!
    </button>
  </div>
</div>
```

- A: Outer `div`
- B: Inner `div`
- C: `button`
- D: 一个包含所有嵌套元素的数组。

<details><summary><b>答案</b></summary>
<p>

#### 答案: C

导致事件的最深嵌套的元素是事件的 target。你可以通过 `event.stopPropagation` 来停止冒泡。

</p>
</details>

---

54. 当您单击该段落时，日志输出是什么？

```html
<div onclick="console.log('div')">
  <p onclick="console.log('p')">
    Click here!
  </p>
</div>
```

- A: `p` `div`
- B: `div` `p`
- C: `p`
- D: `div`

<details><summary><b>答案</b></summary>
<p>

#### 答案: A

如果我们点击 `p`，我们会看到两个日志：`p` 和 `div`。在事件传播期间，有三个阶段：捕获、目标和冒泡。默认情况下，事件处理程序在冒泡阶段执行（除非将 `useCapture` 设置为 `true`）。它从嵌套最深的元素向外传播。

</p>
</details>

---

55. 输出是什么？

```javascript
const person = { name: 'Lydia' }

function sayHi(age) {
  console.log(`${this.name} is ${age}`)
}

sayHi.call(person, 21)
sayHi.bind(person, 21)
```

- A: `undefined is 21` `Lydia is 21`
- B: `function` `function`
- C: `Lydia is 21` `Lydia is 21`
- D: `Lydia is 21` `function`

<details><summary><b>答案</b></summary>
<p>

#### 答案: D

使用这两种方法，我们都可以传递我们希望 `this` 关键字引用的对象。但是，`.call` 是**立即执行**的。

`.bind` 返回函数的**副本**，但带有绑定上下文！它不是立即执行的。

</p>
</details>

---

56. 输出是什么？

```javascript
function sayHi() {
  return (() => 0)()
}

typeof sayHi()
```

- A: `"object"`
- B: `"number"`
- C: `"function"`
- D: `"undefined"`

<details><summary><b>答案</b></summary>
<p>

#### 答案: B

`sayHi` 方法返回的是立即执行函数(IIFE)的返回值.此立即执行函数的返回值是 `0`， 类型是 `number`

参考：只有7种内置类型：`null`，`undefined`，`boolean`，`number`，`string`，`object` 和 `symbol`。 ``function`` 不是一种类型，函数是对象，它的类型是``object``。

</p>
</details>

---

57.  下面哪些值是 falsy?

```javascript
0
new Number(0)
;('')
;(' ')
new Boolean(false)
undefined
```

- A: `0`, `''`, `undefined`
- B: `0`, `new Number(0)`, `''`, `new Boolean(false)`, `undefined`
- C: `0`, `''`, `new Boolean(false)`, `undefined`
- D: All of them are falsy

<details><summary><b>答案</b></summary>
<p>

#### 答案: A

只有 6 种 [falsy](https://developer.mozilla.org/zh-CN/docs/Glossary/Falsy) 值:



if (false)
if (null)
if (undefined)
if (0)
if (NaN)
if ('')
if ("")
if (document.all)

`Function` 构造函数, 比如 `new Number` 和 `new Boolean`，是 [truthy](https://developer.mozilla.org/zh-CN/docs/Glossary/Truthy)。

</p>
</details>

---

58. 输出是什么？

```javascript
console.log(typeof typeof 1)
```

- A: `"number"`
- B: `"string"`
- C: `"object"`
- D: `"undefined"`

<details><summary><b>答案</b></summary>
<p>

#### 答案: B

`typeof 1` 返回 `"number"`。
`typeof "number"` 返回 `"string"`。

</p>
</details>

---

59. 输出是什么？

```javascript
const numbers = [1, 2, 3]
numbers[10] = 11
console.log(numbers)
```

- A: `[1, 2, 3, 7 x null, 11]`
- B: `[1, 2, 3, 11]`
- C: `[1, 2, 3, 7 x empty, 11]`
- D: `SyntaxError`

<details><summary><b>答案</b></summary>
<p>

#### 答案: C

当你为数组设置超过数组长度的值的时候， JavaScript 会创建名为 "empty slots" 的东西。它们的值实际上是 `undefined`。你会看到以下场景：

`[1, 2, 3, 7 x empty, 11]`

这取决于你的运行环境（每个浏览器，以及 node 环境，都有可能不同）

</p>
</details>

---

60. 输出是什么？

```javascript
;(() => {
  let x, y
  try {
    throw new Error()
  } catch (x) {
    ;(x = 1), (y = 2)
    console.log(x)
  }
  console.log(x)
  console.log(y)
})()
```

- A: `1` `undefined` `2`
- B: `undefined` `undefined` `undefined`
- C: `1` `1` `2`
- D: `1` `undefined` `undefined`

<details><summary><b>答案</b></summary>
<p>

#### 答案: A

`catch` 代码块接收参数 `x`。当我们传递参数时，这与之前定义的变量 `x` 不同 。这个 `x` 是属于 `catch` 块级作用域的。

然后，我们将块级作用域中的变量赋值为 `1`，同时也设置了变量 `y` 的值。现在，我们打印块级作用域中的变量 `x`，值为 `1`。

`catch` 块之外的变量 `x` 的值仍为 `undefined`， `y` 的值为 `2`。当我们在 `catch` 块之外执行 `console.log(x)` 时，返回 `undefined`，`y` 返回 `2`。

</p>
</details>

---


61. 自己开发的框架或者库，如何使用原型？
<details><summary><b>答案</b></summary>

对于 JavaScript 原型的考察，应该算是基础知识的一部分。但是，基础知识考察的只是原型的理论，而高级知识考察的是原型的实际使用。我们使用的绝大部分第三方框架或者库，源码中都有原型的使用。如果你不能熟练使用原型，你能自己写框架或者库？—— 大家应该明白我的意思了吧。

所以，这里要考察的是原型如何在实际的框架和库中去使用。对于这个问题，如果你没有亲自写过框架和库，且对原型不是很熟悉，那么我建议你看一下 jQuery zepto 中是如何使用原型的。这也算是站在巨人的肩膀上吧，毕竟都是如此优秀的库。

jQuery 的资料自己上网去找找吧，给大家推荐一个免费的讲解 zepto 原型的视频资料 [《zepto设计和源码分析》](https://www.imooc.com/learn/745)。
</details>

---

62.  目前 JS 对于异步的解决方案有哪些？
<details><summary><b>答案</b></summary>
异步是 JS 永恒的话题，自动 web 2.0 有了 Ajax 开始，到现在 nodejs 盛行，人们就一直没有停止对异步的讨论。大家有没有考虑过为何异步这么受欢迎？—— 因为异步和业务场景的结合实在太紧密了。在复杂的业务场景中，你要能一眼就识别出来哪些是异步，而且要找到最佳的解决方案，否则这里就是一个坑。

这里没有问“JS 中有哪些场景是异步”，因为这个问题如果只回答“图片加载、ajax”等没有什么意义，异步是要结合实际业务说的。因此这里提问异步的解决方案，我列一下，你来看看自己是否都全部了解。

- deferred （jQuery 或者 zepto 中）—— 注意，这块很多同学不知道，可以多去查查相关资料，因为 jQuery 和 zepto 目前还有很多、很多、很多项目在用！！！
- Promise（ES6 或者第三方库，如 q.js bluebird.js），不仅要知道怎么用，还要熟悉 Promise 的标准
- Generator（从 koa 升级 2.x 之后已经不再常用）
- async/await （ES7 草案）

</details>

---

63.   常用的 ES6 的语法有哪些？

<details><summary><b>答案</b></summary>
不了解 ES6 的同学可以先去看看 《ECMAScript 6 入门》 教程。

虽然目前浏览器对 ES6 兼容性不好，但是 ES6 已经在开发环境很普及了，因此要考察 ES6 的语法。那这个也算是高级知识吗？—— 算！因为 ES6 刚刚普及没多久，总有一些人躺在舒适区、不思进取、不学习新内容，通过 ES6 的考察把他们给刷掉。

看 ES6 的书籍或者博客，内容还是挺多的，但是日常实际使用的功能并没有那么多。这里我列举几个常用的，你对照着去考察自己是否掌握全面

- Module
- Class
- Promise
- 箭头函数
- 搭建 ES6 编译环境
附：最后一项“编辑环境”大家一般都使用 webpack ，但是你知道 rollup 吗？ React vue 都在使用 rollup ，你如果不知道的话，面试就要丢分了。

</details>

---

64. vue 如何解析模板？
<details><summary><b>答案</b></summary>
不了解 vue 的同学可以先去 vue 官网 看一下相关文档。

作为前端从业者你应该很清楚，现在不知道 vue React 别说是跳槽，校招都不一定能通过，因此了解、使用过 vue React 这已经是基础知识的行列了。这块的高级知识应该升级到对 vue React 的实现是否了解（不用精通各个细节，了解过程即可）？—— 例如本题目，是否了解 vue 如何解析模板？

你可能还会疑问：干嘛要问框架的实现，工作中也用不到啊？我会使用框架不就完了吗？ —— 我可以通过一个大家都亲身经历的例子来说服你。

- 例如，大学招生时都想要智商高、学习能力好的学生，怎么办？—— 高考。除了高考，还有其他更公平的方式吗？
- 同理，企业想要招聘编程能力强、总结能力好、热爱且持续学习的员工，怎么办？—— 考察框架原理是一个重要而且简单有效的途径。除此之外，大家想想还有什么其他简单高效的手段？
先摆正思想，然后再看这个题目：是否了解 vue 如何解析模板？简单来说，模板解析分位三步

- 模板就是一段字符串，非结构化的数据，没法分析。因此，第一步是将非结构化的模板字符串，转变成结构化的 JS 对象，抽象语法树，即 AST 。其实就是一个 JS 对象，这样就结构化了。
- 第二步，将 AST 转换成一个 render 函数，步骤是先转换为一段函数体的字符串，然后再用new Function(...)生成函数。
- 第三部，渲染时执行 render 函数，返回虚拟 DOM 对象，然后执行虚拟 DOM 的patch方法，渲染成真正的 html 。
以上过程的细节是非常复杂的，要全部写出来都够出半本书了，因此你也没必要啥细节都知道。面试官如果问到你这个问题，只回答这三步过程即可，不用说的太细，否则太啰嗦太耗费时间。

</details>

---

65. React 的 setState 为何是异步渲染？
<details><summary><b>答案</b></summary>
不了解 React 的同学可以先去 React 官网 看一下文档。虽然目前 vue 比较火，但是 React 也绝对不能放过，国内来看，两者还是各有很多用户群体。

这个问题其实很简单，只是很多同学没有考虑到。答案就是：为了防止一次性执行多次setState而带来的渲染性能问题。即，你如果连续不断执行 100 次setState的话，那么 React 是否有必要渲染 100 次？—— 肯定没必要。第一，浏览器会卡死；第二，用户只需要看到最后的结果即可，不用关心前 99 次的过程。

至于为何好多人考虑不到，我也常常思考这种原因。在我看来，如果你长时间不去主动的看博客、看编程方面的新闻、关注新框架，你就会出现这种思想滞后的问题，即“跟不上节奏”。因此，作为相关从业者，大家还是应该多看，然后多想，多问几个为什么。

</details>

---

66. hybrid 和 h5 有何区别？

<details><summary><b>答案</b></summary>
你每天用微信、支付宝、头条等各种 app 看过的信息，有多少是用前端代码（JS CSS HTML）写出来的界面？你知道吗？—— 至少会占到 50% 以上，是否没想象到？

前端代码（JS CSS HTML）参与到 app 中进行混合开发，是目前 app 开发很常见的方式，其中 hybrid 就是应用最广泛的一种解决方案。很多同学没做过 hybrid 开发，但是没做过不是你不会用且不去学习的理由！

本题目是面试官考察 hybrid 经常问的一道题，最主要的区别在于：

- hybrid 是通过file协议加载的本地文件，h5 是通过http协议加载的网络文件，前者速度快。
- hybrid 是通过为不同版本打包进行更新，而 h5 没有版本的概念，每次都获取服务端的最新版。
- hybrid 更加依赖于客户端的能力，因此会更多的和客户端通讯，而 h5 基本用不到和客户端通讯。
说出这几个区别，该问题基本 OK 。其中的重点是 hybrid 包版本更新的流程，以及 JS 和客户端通讯的原理。这两者详细讲来的话，内容都很多，因此这里不详细展开了。

</details>

---

67. JavaScript 中的一切都是？

A: 基本类型与对象
B: 函数与对象
C: 只有对象
D: 数字与对象
<details><summary><b>答案</b></summary>
<p>

#### 答案: A

</p>

JavaScript 只有基本类型和对象。

基本类型包括 boolean, null, undefined, bigint, number, string, symbol。

</details>

---

68. 输出是什么？
``` js
[[0, 1], [2, 3]].reduce(
  (acc, cur) => {
    return acc.concat(cur)
  },
  [1, 2]
)
```
A: [0, 1, 2, 3, 1, 2]
B: [6, 1, 2]
C: [1, 2, 0, 1, 2, 3]
D: [1, 2, 6]
<details><summary><b>答案</b></summary>
<p>

#### 答案: C
</p>

[1, 2]是初始值。初始值将会作为首次调用时第一个参数 acc 的值。在第一次执行时， acc 的值是 [1, 2]， cur 的值是 [0, 1]。合并它们，结果为 [1, 2, 0, 1]。 第二次执行， acc 的值是 [1, 2, 0, 1]， cur 的值是 [2, 3]。合并它们，最终结果为 [1, 2, 0, 1, 2, 3]

</details>

---

69. 输出是什么？
```
!!null
!!''
!!1
```
A: false true false
B: false false true
C: false true true
D: true true false

<details><summary><b>答案</b></summary>
<p>

#### 答案: B

</p>

null 是 falsy。 !null 的值是 true。 !true 的值是 false。

"" 是 falsy。 !"" 的值是 true。 !true 的值是 false。

1 是 truthy。 !1 的值是 false。 !false 的值是 true。

</details>

---

70. setInterval 方法的返回值是什么？
```js
setInterval(() => console.log('Hi'), 1000)
```
A: 一个唯一的id
B: 该方法指定的毫秒数
C: 传递的函数
D: undefined


<details><summary><b>答案</b></summary>
<p>

#### 答案: A

</p>

setInterval 返回一个唯一的 id。此 id 可被用于 clearInterval 函数来取消定时。

</details>


---

71. 输出是什么？
```js
[...'Lydia']
```
A: ["L", "y", "d", "i", "a"]
B: ["Lydia"]
C: [[], "Lydia"]
D: [["L", "y", "d", "i", "a"]]


<details><summary><b>答案</b></summary>
<p>

#### 答案: A

</p>

string 类型是可迭代的。扩展运算符将迭代的每个字符映射成一个元素。

</details>

---

72. 输出是什么？
```js
function* generator(i) {
  yield i;
  yield i * 2;
}

const gen = generator(10);

console.log(gen.next().value);
console.log(gen.next().value);
```
A: [0, 10], [10, 20]
B: 20, 20
C: 10, 20
D: 0, 10 and 10, 20


<details><summary><b>答案</b></summary>
<p>

#### 答案: C

</p>

一般的函数在执行之后是不能中途停下的。但是，生成器函数却可以中途“停下”，之后可以再从停下的地方继续。当生成器遇到yield关键字的时候，会生成yield后面的值。注意，生成器在这种情况下不 返回 (return )值，而是 生成 (yield)值。

首先，我们用10作为参数i来初始化生成器函数。然后使用next()方法一步步执行生成器。第一次执行生成器的时候，i的值为10，遇到第一个yield关键字，它要生成i的值。此时，生成器“暂停”，生成了10。

然后，我们再执行next()方法。生成器会从刚才暂停的地方继续，这个时候i还是10。于是我们走到了第二个yield关键字处，这时候需要生成的值是i*2，i为10，那么此时生成的值便是20。所以这道题的最终结果是10,20。

</details>

---

73. 返回值是什么?
```js
const firstPromise = new Promise((res, rej) => {
  setTimeout(res, 500, "one");
});

const secondPromise = new Promise((res, rej) => {
  setTimeout(res, 100, "two");
});

Promise.race([firstPromise, secondPromise]).then(res => console.log(res));
```
A: "one"
B: "two"
C: "two" "one"
D: "one" "two"


<details><summary><b>答案</b></summary>
<p>

#### 答案: B

</p>

当我们向Promise.race方法中传入多个Promise时，会进行 优先 解析。在这个例子中，我们用setTimeout给firstPromise和secondPromise分别设定了500ms和100ms的定时器。这意味着secondPromise会首先解析出字符串two。那么此时res参数即为two，是为输出结果。

</details>

[[↑] 回到顶部](#awsome-interview-front-end)

---

74. 输出是什么?
```js
let person = { name: "Lydia" };
const members = [person];
person = null;

console.log(members);
```
A: null
B: [null]
C: [{}]
D: [{ name: "Lydia" }]


<details><summary><b>答案</b></summary>
<p>

#### 答案: D

</p>
首先我们声明了一个拥有name属性的对象 person。

![avatar](./public/74-1.png)

然后我们又声明了一个变量members. 将首个元素赋值为变量person。 当设置两个对象彼此相等时，它们会通过 引用 进行交互。但是当你将引用从一个变量分配至另一个变量时，其实只是执行了一个 复制 操作。（注意一点，他们的引用 并不相同!）

![avatar](./public/74-2.png)

接下来我们让person等于null。

![avatar](./public/74-3.png)

我们没有修改数组第一个元素的值，而只是修改了变量person的值,因为元素（复制而来）的引用与person不同。members的第一个元素仍然保持着对原始对象的引用。当我们输出members数组时，第一个元素会将引用的对象打印出来。


</details>


---

75. 输出是什么?
```js
const person = {
  name: "Lydia",
  age: 21
};

for (const item in person) {
  console.log(item);
}
```
A: { name: "Lydia" }, { age: 21 }
B: "name", "age"
C: "Lydia", 21
D: ["name", "Lydia"], ["age", 21]


<details><summary><b>答案</b></summary>
<p>

#### 答案: B

</p>

在for-in循环中,我们可以通过对象的key来进行迭代,也就是这里的name和age。在底层，对象的key都是字符串（如果他们不是Symbol的话）。在每次循环中，我们将item设定为当前遍历到的key.所以一开始，item是name，之后 item输出的则是age。

</details>


---

76. 输出是什么?
```js
console.log(3 + 4 + "5");
```
A: "345"
B: "75"
C: 12
D: "12"


<details><summary><b>答案</b></summary>
<p>

#### 答案: B

</p>
当所有运算符的 优先级 相同时，计算表达式需要确定运算符的结合顺序，即从右到左还是从左往右。在这个例子中，我们只有一类运算符+，对于加法来说，结合顺序就死从左到右。

3 + 4首先计算，得到数字7.

由于类型的强制转换，7 + '5'的结果是"75". JavaScript将7转换成了字符串，可以参考问题15.我们可以用+号把两个字符串连接起来。 "7" + "5" 就得到了"75".
</details>


---

77. 输出是什么?
```js
const num = parseInt("7*6", 10);
```
A: 42
B: "42"
C: 7
D: NaN

<details><summary><b>答案</b></summary>
<p>

#### 答案: C

</p>
只返回了字符串中第一个字母. 设定了 进制 后 (也就是第二个参数，指定需要解析的数字是什么进制: 十进制、十六机制、八进制、二进制等等……),parseInt 检查字符串中的字符是否合法. 一旦遇到一个在指定进制中不合法的字符后，立即停止解析并且忽略后面所有的字符。

*就是不合法的数字字符。所以只解析到"7"，并将其解析为十进制的7. num的值即为7.
</details>


---

78. 输出是什么?
```js
[1, 2, 3].map(num => {
  if (typeof num === "number") return;
  return num * 2;
});
```
A: []
B: [null, null, null]
C: [undefined, undefined, undefined]
D: [ 3 x empty ]

<details><summary><b>答案</b></summary>
<p>

#### 答案: C

</p>
对数组进行映射的时候,num就是当前循环到的元素. 在这个例子中，所有的映射都是number类型，所以if中的判断typeof num === "number"结果都是true.map函数创建了新数组并且将函数的返回值插入数组。

但是，没有任何值返回。当函数没有返回任何值时，即默认返回undefined.对数组中的每一个元素来说，函数块都得到了这个返回值，所以结果中每一个元素都是undefined.
</details>

---

79. 输出的是什么?
```js

function getInfo(member, year) {
  member.name = "Lydia";
  year = "1998";
}

const person = { name: "Sarah" };
const birthYear = "1997";

getInfo(person, birthYear);

console.log(person, birthYear);

A: { name: "Lydia" }, "1997"
B: { name: "Sarah" }, "1998"
C: { name: "Lydia" }, "1998"
D: { name: "Sarah" }, "1997"
```
<details><summary><b>答案</b></summary>
<p>

#### 答案: A

</p>

普通参数都是 值 传递的，而对象则不同，是 引用 传递。所以说，birthYear是值传递，因为他是个字符串而不是对象。当我们对参数进行值传递时，会创建一份该值的 复制 。（可以参考问题46）

变量birthYear有一个对"1997"的引用，而传入的参数也有一个对"1997"的引用，但二者的引用并不相同。当我们通过给 year赋值"1998"来更新year的值的时候我们只是更新了year（的引用）。此时birthYear仍然是"1997".

而person是个对象。参数member引用与之 相同的 对象。当我们修改member所引用对象的属性时,person的相应属性也被修改了,因为他们引用了相同的对象. person的 name属性也变成了 "Lydia".
</details>

---


80. 输出的是什么?
```js
function greeting() {
  throw "Hello world!";
}

function sayHi() {
  try {
    const data = greeting();
    console.log("It worked!", data);
  } catch (e) {
    console.log("Oh no an error!", e);
  }
}

sayHi();
A: "It worked! Hello world!"
B: "Oh no an error: undefined
C: SyntaxError: can only throw Error objects
D: "Oh no an error: Hello world!
```
<details><summary><b>答案</b></summary>
<p>

#### 答案: D

</p>
通过throw语句，我么可以创建自定义错误。 而通过它，我们可以抛出异常。异常可以是一个字符串, 一个 数字, 一个 布尔类型 或者是一个 对象。在本例中，我们的异常是字符串'Hello world'.

通过 catch语句，我们可以设定当try语句块中抛出异常后应该做什么处理。在本例中抛出的异常是字符串'Hello world'. e就是这个字符串，因此被输出。最终结果就是'Oh an error: Hello world'.
</details>

---




81. 输出的是什么?
```js
function Car() {
  this.make = "Lamborghini";
  return { make: "Maserati" };
}

const myCar = new Car();
console.log(myCar.make);
A: "Lamborghini"
B: "Maserati"
C: ReferenceError
D: TypeError
```
<details><summary><b>答案</b></summary>
<p>

#### 答案: B

</p>
返回属性的时候，属性的值等于 返回的 值，而不是构造函数中设定的值。我们返回了字符串 "Maserati"，所以 myCar.make等于"Maserati".

</details>

---



82. 输出的是什么?
```js
(() => {
  let x = (y = 10);
})();

console.log(typeof x);
console.log(typeof y);
A: "undefined", "number"
B: "number", "number"
C: "object", "number"
D: "number", "undefined"
```
<details><summary><b>答案</b></summary>
<p>

#### 答案: A

</p>
let x = y = 10; 是下面这个表达式的缩写:

y = 10;
let x = y;
我们设定y等于10时,我们实际上增加了一个属性y给全局对象(浏览器里的window, Nodejs里的global)。在浏览器中， window.y等于10.

然后我们声明了变量x等于y,也是10.但变量是使用 let声明的，它只作用于 块级作用域, 仅在声明它的块中有效；就是案例中的立即调用表达式(IIFE)。使用typeof操作符时, 操作值 x没有被定义：因为我们在x声明块的外部，无法调用它。这就意味着x未定义。未分配或是未声明的变量类型为"undefined". console.log(typeof x)返回"undefined".

而我们创建了全局变量y，并且设定y等于10.这个值在我们的代码各处都访问的到。 y已经被定义了，而且有一个"number"类型的值。 console.log(typeof y)返回"number".
</details>

---


83. 输出的是什么?
```js
class Dog {
  constructor(name) {
    this.name = name;
  }
}

Dog.prototype.bark = function() {
  console.log(`Woof I am ${this.name}`);
};

const pet = new Dog("Mara");

pet.bark();

delete Dog.prototype.bark;

pet.bark();
A: "Woof I am Mara", TypeError
B: "Woof I am Mara","Woof I am Mara"
C: "Woof I am Mara", undefined
D: TypeError, TypeError
```
<details><summary><b>答案</b></summary>
<p>

#### 答案: A

</p>
我们可以用delete关键字删除对象的属性，对原型也是适用的。删除了原型的属性后，该属性在原型链上就不可用了。在本例中，函数bark在执行了delete Dog.prototype.bark后不可用, 然而后面的代码还在调用它。

当我们尝试调用一个不存在的函数时TypeError异常会被抛出。在本例中就是 TypeError: pet.bark is not a function，因为pet.bark是undefined.
</details>

---


84. 输出的是什么?
```js
const set = new Set([1, 1, 2, 3, 4]);

console.log(set);
A: [1, 1, 2, 3, 4]
B: [1, 2, 3, 4]
C: {1, 1, 2, 3, 4}
D: {1, 2, 3, 4}
```
<details><summary><b>答案</b></summary>
<p>

#### 答案: D

</p>
Set对象手机 独一无二 的值：也就是说同一个值在其中仅出现一次。

我们传入了数组[1, 1, 2, 3, 4]，他有一个重复值1.以为一个集合里不能有两个重复的值，其中一个就被移除了。所以结果是 {1, 2, 3, 4}.
</details>

---


85. 输出的是什么?
```js
// counter.js
let counter = 10;
export default counter;
// index.js
import myCounter from "./counter";

myCounter += 1;

console.log(myCounter);
A: 10
B: 11
C: Error
D: NaN
```
<details><summary><b>答案</b></summary>
<p>

#### 答案: C

</p>
引入的模块是 只读 的: 你不能修改引入的模块。只有导出他们的模块才能修改其值。

当我们给myCounter增加一个值的时候会抛出一个异常： myCounter是只读的，不能被修改。
</details>

---


86. 输出的是什么?
```js
const name = "Lydia";
age = 21;

console.log(delete name);
console.log(delete age);
A: false, true
B: "Lydia", 21
C: true, true
D: undefined, undefined
```
<details><summary><b>答案</b></summary>
<p>

#### 答案: A

</p>
delete操作符返回一个布尔值： true指删除成功，否则返回false. 但是通过 var, const 或 let 关键字声明的变量无法用 delete 操作符来删除。

name变量由const关键字声明，所以删除不成功:返回 false. 而我们设定age等于21时,我们实际上添加了一个名为age的属性给全局对象。对象中的属性是可以删除的，全局对象也是如此，所以delete age返回true.
</details>

---


87. 输出的是什么?
```js
const numbers = [1, 2, 3, 4, 5];
const [y] = numbers;

console.log(y);
A: [[1, 2, 3, 4, 5]]
B: [1, 2, 3, 4, 5]
C: 1
D: [1]
```
<details><summary><b>答案</b></summary>
<p>

#### 答案: C

</p>
我们可以通过解构赋值来解析来自对象的数组或属性的值，比如说：

[a, b] = [1, 2];

a的值现在是1，b的值现在是2.而在题目中，我们是这么做的:

[y] = [1, 2, 3, 4, 5];

也就是说，y等于数组的第一个值就是数字1.我们输出y， 返回1.


</details>

---


88. 输出的是什么?
```js
const user = { name: "Lydia", age: 21 };
const admin = { admin: true, ...user };

console.log(admin);
A: { admin: true, user: { name: "Lydia", age: 21 } }
B: { admin: true, name: "Lydia", age: 21 }
C: { admin: true, user: ["Lydia", 21] }
D: { admin: true }
```
<details><summary><b>答案</b></summary>
<p>

#### 答案: B

</p>
扩展运算符...为对象的组合提供了可能。你可以复制对象中的键值对，然后把它们加到另一个对象里去。在本例中，我们复制了user对象键值对，然后把它们加入到admin对象中。admin对象就拥有了这些键值对，所以结果为{ admin: true, name: "Lydia", age: 21 }.
</details>

---



89. 输出的是什么?
```js
const person = { name: "Lydia" };

Object.defineProperty(person, "age", { value: 21 });

console.log(person);
console.log(Object.keys(person));
A: { name: "Lydia", age: 21 }, ["name", "age"]
B: { name: "Lydia", age: 21 }, ["name"]
C: { name: "Lydia"}, ["name", "age"]
D: { name: "Lydia"}, ["age"]
```
<details><summary><b>答案</b></summary>
<p>

#### 答案: B

</p>
通过defineProperty方法，我们可以给对象添加一个新属性，或者修改已经存在的属性。而我们使用defineProperty方法给对象添加了一个属性之后，属性默认为 不可枚举(not enumerable). Object.keys方法仅返回对象中 可枚举(enumerable) 的属性，因此只剩下了"name".

用defineProperty方法添加的属性默认不可变。你可以通过writable, configurable 和 enumerable属性来改变这一行为。这样的话， 相比于自己添加的属性，defineProperty方法添加的属性有了更多的控制权。
</details>

---


90. 输出的是什么?
```js
const settings = {
  username: "lydiahallie",
  level: 19,
  health: 90
};

const data = JSON.stringify(settings, ["level", "health"]);
console.log(data);
A: "{"level":19, "health":90}"
B: "{"username": "lydiahallie"}"
C: "["level", "health"]"
D: "{"username": "lydiahallie", "level":19, "health":90}"
```
<details><summary><b>答案</b></summary>
<p>

#### 答案: A

</p>
JSON.stringify的第二个参数是 替代者(replacer). 替代者(replacer)可以是个函数或数组，用以控制哪些值如何被转换为字符串。

如果替代者(replacer)是个 数组 ，那么就只有包含在数组中的属性将会被转化为字符串。在本例中，只有名为"level" 和 "health" 的属性被包括进来， "username"则被排除在外。 data 就等于 "{"level":19, "health":90}".

而如果替代者(replacer)是个 函数，这个函数将被对象的每个属性都调用一遍。 函数返回的值会成为这个属性的值，最终体现在转化后的JSON字符串中（译者注：Chrome下，经过实验，如果所有属性均返回同一个值的时候有异常，会直接将返回值作为结果输出而不会输出JSON字符串），而如果返回值为undefined，则该属性会被排除在外。
</details>

---

[[↑] 回到顶部](#awsome-interview-front-end)


### Vue.js

1. [v-for中key的作用是什么？](https://github.com/awsome-interview/awsome-interview-front-end/blob/master/vue/vue1.md)

2. [vue组件之间通信，你用到的有哪些？](https://github.com/awsome-interview/awsome-interview-front-end/blob/master/vue/vue2.md)

3. [eventBus（事件总线）进行通信](https://github.com/awsome-interview/awsome-interview-front-end/blob/master/vue/vue3.md)

4. [父组件直接调子组件里的方法，子组件直接调父组件里的方法，怎么实现？](https://github.com/awsome-interview/awsome-interview-front-end/blob/master/vue/vue4.md)

5. [hash模式和history模式的区别](https://github.com/awsome-interview/awsome-interview-front-end/blob/master/vue/vue5.md)

6. [history模式刷新就会404，是怎么造成的呢？](https://github.com/awsome-interview/awsome-interview-front-end/blob/master/vue/vue6.md)

7. [比如说，你封装组件的时候，A组件，它的父级组件，对A组件绑定一个v-model，然后子组件的数据变化后，怎么去触发父组件的视图更新渲染。子组件怎么去实现这个v-model？](https://github.com/awsome-interview/awsome-interview-front-end/blob/master/vue/vue7.md)

8. [工作中怎么解决代码复用的问题](https://github.com/awsome-interview/awsome-interview-front-end/blob/master/vue/vue8.md)

9. [在vue项目中，filter一般是怎么用的](https://github.com/awsome-interview/awsome-interview-front-end/blob/master/vue/vue9.md)

10. [你们是在组件里注册还是提取到一个公共的文件，然后全局注册这种？](https://github.com/awsome-interview/awsome-interview-front-end/blob/master/vue/vue10.md)

11. [filter传的function带了两个形参，代表什么意思呢？它这个参数是从哪里传进来的？filter第二个形参在使用的时候从哪里传过来？](https://github.com/awsome-interview/awsome-interview-front-end/blob/master/vue/vue11.md)

12. [有没有了解过vue的插件，想写插件的时候怎么去定义](https://github.com/awsome-interview/awsome-interview-front-end/blob/master/vue/vue12.md)

13. [说一下vuex](https://github.com/awsome-interview/awsome-interview-front-end/blob/master/vue/vue13.md)

14. [有一些数据，直接存在vue的实例原型链上和通过vuex存，有什么本质的区别？](https://github.com/awsome-interview/awsome-interview-front-end/blob/master/vue/vue14.md)

15. [定义一个动态路由，怎么去获取路由的参数？](https://github.com/awsome-interview/awsome-interview-front-end/blob/master/vue/vue15.md)

16. [获取vue-router两种形式的参数，query、params，这两种有什么区别](https://github.com/awsome-interview/awsome-interview-front-end/blob/master/vue/vue16.md)

17. [路由有哪几种导航钩子](https://github.com/awsome-interview/awsome-interview-front-end/blob/master/vue/vue17.md)

18. [在组件里设计导航钩子，组件内的导航钩子用到的有哪些？](https://github.com/awsome-interview/awsome-interview-front-end/blob/master/vue/vue18.md)

19. [MVVM框架的原理](https://github.com/awsome-interview/awsome-interview-front-end/blob/master/vue/vue19.md)

20. [vue生命周期？](https://github.com/awsome-interview/awsome-interview-front-end/blob/master/vue/vue20.md)

[[↑] 回到顶部](#awsome-interview-front-end)

### Node.js
1. [koa和express？](https://github.com/awsome-interview/awsome-interview-front-end/blob/master/node/node1.md)

2. js 中什么类型是引用传递, 什么类型是值传递? 如何将值类型的变量以引用的方式传递? 

<details><summary><b>答案</b></summary>
对象是引用传递，基础类型是值传递，通过将基础类型包装（boxing）可以以引用的方式传递

面试写代码的话, 可以通过 如何编写一个 `json 对象的拷贝函数 `等类似的问题来考察对引用的了解

== 的 === 的区别的了解. 然后再问 [1] == [1] 是 true 还是 false. 如果基础不好的同学可能会被自己对于 == 和 === 的结论影响然后得出错误的结论.
</details>

3. js 中， 0.1 + 0.2 === 0.3 是否为 true ? 在不知道浮点数位数时应该怎样判断两个浮点数之和与第三数是否相等？

<details><summary><b>答案</b></summary>
不相等，因为JS浮点数先转2进制再计算再转十进制的原因，会丢失精度，所以false了
尽量避免浮点数比较吧，如果非要比的话，我这边一般两种做法吧
一种是标准做法：
JS里，最大整数和最接近零的小数，分别是2的正负52次方
而最接近0的小数，也可以用Number.EPSILON表示
如果Math.abs((0.1+0.2)-0.3)< Number.EPSILON，就可以说他俩相等了
另外一种做法就，比较野鸡
比如算0.1+0.2，我就会(0.1+0.2).toFixed(15)*1
因为那个最接近0的小数，它其实是0.00..02xx，中间15个零
缺点嘛一方面toFixed肯定性能比人家自带的常量会差一点，而且如果真的有两个15位小数计算，toFixed这个有误差，而EPSILON无误差。优点就方便
实际情况的话，如果我抽成公共方法了，那我就用常量，如果临时写业务，可能就toFixed了，因为读代码比较方便易懂

</details>

1. const 定义的 Array 中间元素能否被修改? 如果可以, 那 const 修饰对象的意义是? 

<details><summary><b>答案</b></summary>
其中的值可以被修改. 意义上, 主要保护引用不被修改 (如用 Map 等接口对引用的变化很敏感, 使用 const 保护引用始终如一是有意义的), 也适合用在 immutable 的场景.

能修改，const相当于把栈里的数据锁死了，Array是个引用数据类型，只是锁死了地址，堆里面的数据依然可以随便改
</details>

5. JavaScript 中不同类型以及不同环境下变量的内存都是何时释放? 

<details><summary><b>答案</b></summary>
引用类型是在没有引用之后, 通过 v8 的 GC 自动回收, 值类型如果是处于闭包的情况下, 要等闭包没有引用才会被 GC 回收, 非闭包的情况下等待 v8 的新生代 (new space) 切换的时候回收.
你需要了解哪些操作一定会导致内存泄漏, 或者可以崩掉内存. 比如如下代码能否爆掉 V8 的内存?

let arr = [];
while(true)
  arr.push(1);
然后上述代码与下方的情况有什么区别?

let arr = [];
while(true)
  arr.push();
如果 push 的是 Buffer 情况又会有什么区别?

let arr = [];
while(true)
  arr.push(new Buffer(1000));
思考完之后可以尝试找找别的情况如何爆掉 V8 的内存. 以及来聊聊内存泄漏?

function out() {
  const bigData = new Buffer(100);
  inner = function () {
    void bigData;
  }
}
闭包会引用到父级函数中的变量，如果闭包未释放，就会导致内存泄漏。上面例子是 inner 直接挂在了 root 上，从而导致内存泄漏（bigData 不会释放）。详见[《如何分析 Node.js 中的内存泄漏》](https://zhuanlan.zhihu.com/p/25736931)
</details>

6. a.js 和 b.js 两个文件互相 require 是否会死循环? 双方是否能导出变量? 如何从设计上避免这种问题?

<details><summary><b>答案</b></summary>
不会, 先执行的导出其 未完成的副本, 通过导出工厂函数让对方从函数去拿比较好避免. 模块在导出的只是 var module = { exports: {...} }; 中的 exports, 以从 a.js 启动为例, a.js 还没执行完会返回一个 a.js 的 exports 对象的 未完成的副本 给 b.js 模块。 然后 b.js 完成加载，并将 exports 对象提供给 a.js 模块。

另外还有非常基础和常见的问题, 比如 module.exports 和 exports 的区别这里也能一并解决了 exports 只是 module.exports 的一个引用

再晋级一点, 众所周知, node 的模块机制是基于 CommonJS 规范的. 对于从前端转 node 的同学, 如果面试官想问的难一点会考验关于 CommonJS 的一些问题. 比如比较 AMD, CMD, CommonJS 三者的区别, 包括询问关于 node 中 require 的实现原理等.

[JavaScript 模块的循环加载](http://www.ruanyifeng.com/blog/2015/11/circular-dependency.html)
</details>

1. 如果 a.js require 了 b.js, 那么在 b 中定义全局变量 t = 111 能否在 a 中直接打印出来?

<details><summary><b>答案</b></summary>

 每个 .js 能独立一个环境只是因为 node 帮你在外层包了一圈自执行, 所以你使用 t = 111 定义全局变量在其他地方当然能拿到. 情况如下:

```js
// b.js
(function (exports, require, module, __filename, __dirname) {
  t = 111;
})();

// a.js
(function (exports, require, module, __filename, __dirname) {
  // ...
  console.log(t); // 111
})();

```
</details>

8. 如何在不重启 node 进程的情况下热更新一个 js/json 文件? 这个问题本身是否有问题?

<details><summary><b>答案</b></summary>
可以清除掉 require.cache 的缓存重新 require(xxx), 视具体情况还可以用 VM 模块重新执行.

当然这个问题可能是典型的 X-Y Problem, 使用 js 实现热更新很容易碰到 v8 优化之后各地拿到缓存的引用导致热更新 js 没意义. 当然热更新 json 还是可以简单一点比如用读取文件的方式来热更新, 但是这样也不如从 redis 之类的数据库中读取比较合理.

</details>

9. 热更新

<details><summary><b>答案</b></summary>
从面试官的角度看, 热更新 是很多程序常见的问题. 对客户端而言, 热更新意味着不用换包, 当然也包含着 md5 校验/差异更新等复杂问题; 对服务端而言, 热更新意味着服务不用重启, 这样可用性较高同时也优雅和有逼格. 问的过程中可以一定程度的暴露应聘程序员的水平.

从 PHP 转 node 的同学可能会有些想法, 比如 PHP 的代码直接刷上去就好了, 并没有所谓的重启. 而 node 重启看起来动作还挺大. 当然这里面的区别, 主要是与同时有 PHP 与 node 开发经验的同学可以讨论, 也是很好的切入点.

在 Node.js 中做热更新代码, 牵扯到的知识点可能主要是 require 会有一个 cache, 有这个 cache 在, 即使你更新了 .js 文件, 在代码中再次 require 还是会拿到之前的编译好缓存在 v8 内存 (code space) 中的的旧代码. 但是如果只是单纯的清除掉 require 中的 cache, 再次 require 确实能拿到新的代码, 但是这时候很容易碰到各地维持旧的引用依旧跑的旧的代码的问题. 如果还要继续推行这种热更新代码的话, 可能要推翻当前的架构, 从头开始从新设计一下目前的框架.

不过热更新 json 之类的配置文件的话, 还是可以简单的实现的, 更新 require 的 cache 可以实现, 不会有持有旧引用的问题, 可以参见我 2 年前写着玩的[例子](https://www.npmjs.com/package/auto-reload), 但是如果旧的引用一直被持有很容易出现内存泄漏, 而要热更新配置的话, 为什么不存数据库? 或者用 zookeeper 之类的服务? 通过更新文件还要再发布一次, 但是存数据库直接写个接口配个界面多爽你说是不是?

所以这个问题其实本身其实是值得商榷的, 可能是典型的 X-Y Problem, 不过聊起来确实是可以暴露水平.
</details>

10. 上下文

<details><summary><b>答案</b></summary>
如果你已经了解 ①② 那么你也应该了解, 对于 Node.js 而言, 正常情况下只有一个上下文, 甚至于内置的很多方面例如 require 的实现只是在启动的时候运行了内置的函数.

每个单独的 .js 文件并不意味着单独的上下文, 在某个 .js 文件中污染了全局的作用域一样能影响到其他的地方.

而目前的 Node.js 将 VM 的接口暴露了出来, 可以让你自己创建一个新的 js 上下文, 这一点上跟前端 js 还是区别挺大的. 在执行外部代码的时候, 通过创建新的上下文沙盒 (sandbox) 可以避免上下文被污染:
```js
'use strict';
const vm = require('vm');

let code =
`(function(require) {

  const http = require('http');

  http.createServer( (request, response) => {
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.end('Hello World\\n');
  }).listen(8124);

  console.log('Server running at http://127.0.0.1:8124/');
})`;

vm.runInThisContext(code)(require);
```
这种执行方式与 eval 和 Function 有明显的区别. 关于 VM 更多的一些接口可以先阅读[官方文档 VM (虚拟机)](https://nodejs.org/dist/latest-v6.x/docs/api/vm.html)
</details>

11. Promise 中 .then 的第二参数与 .catch 有什么区别?

<details><summary><b>答案</b></summary>
Promise.prototype.catch(onRejected)

添加一个拒绝(rejection) 回调到当前 promise, 返回一个新的promise。当这个回调函数被调用，新 promise 将以它的返回值来resolve，否则如果当前promise 进入fulfilled状态，则以当前promise的完成结果作为新promise的完成结果.

Promise.prototype.then(onFulfilled, onRejected)

添加解决(fulfillment)和拒绝(rejection)回调到当前 promise, 返回一个新的 promise, 将以回调的返回值来resolve.

1、异常捕获
```
getJSON("/post/1.json").then(function(post) {
  return getJSON(post.commentURL);
}).then(function funcA(comments) {
// 这里的异常，then的第二个参数捕获不到
  console.log("resolved: ", comments);
}, function funcB(err){
  console.log("rejected: ", err);
});

```
2、冒泡性质

Promise 对象的错误具有“冒泡”性质，会一直向后传递，直到被捕获为止。也就是说，错误总是会被下一个catch语句捕获。
```
getJSON('/post/1.json').then(function(post) {
  return getJSON(post.commentURL);
}).then(function(comments) {
  // some code
}).catch(function(error) {
  // 处理前面三个Promise产生的错误
});
```

上面代码中，一共有三个 Promise 对象：一个由getJSON产生，两个由then产生。它们之中任何一个抛出的错误，都会被最后一个catch捕获。

这也是then的第二个参数处理不了的。


</details>

12. Eventemitter 的 emit 是同步还是异步?

<details><summary><b>答案</b></summary>

Node.js 中 Eventemitter 的 emit 是同步的. 在官方文档中有说明:

EventListener按注册顺序同步调用所有侦听器。这对于确保事件的正确顺序和避免竞争条件或逻辑错误很重要。

另外, 可以讨论如下的执行结果是输出 hi 1 还是 hi 2?
```js
const EventEmitter = require('events');

let emitter = new EventEmitter();

emitter.on('myEvent', () => {
  console.log('hi 1');
});

emitter.on('myEvent', () => {
  console.log('hi 2');
});

emitter.emit('myEvent');
```
或者如下情况是否会死循环?
```js
const EventEmitter = require('events');

let emitter = new EventEmitter();

emitter.on('myEvent', () => {
  console.log('hi');
  emitter.emit('myEvent');
});

emitter.emit('myEvent');
```
以及这样会不会死循环?
```js
const EventEmitter = require('events');

let emitter = new EventEmitter();

emitter.on('myEvent', function sth () {
  emitter.on('myEvent', sth);
  console.log('hi');
});

emitter.emit('myEvent');
```
使用 emitter 处理问题可以处理比较复杂的状态场景, 比如 TCP 的复杂状态机, 做多项异步操作的时候每一步都可能报错, 这个时候 .emit 错误并且执行某些 .once 的操作可以将你从泥沼中拯救出来.

另外可以注意一下的是, 有些同学喜欢用 emitter 来监控某些类的状态, 但是在这些类释放的时候可能会忘记释放 emitter, 而这些类的内部可能持有该 emitter 的 listener 的引用从而导致内存泄漏.


</details>

13. 如何判断接口是否异步? 是否只要有回调函数就是异步?

<details><summary><b>答案</b></summary>
开放性问题, 每个写 node 的人都有一套自己的判断方式.

- 看文档
- console.log 打印看看
- 看是否有 IO 操作

单纯使用回调函数并不会异步, IO 操作才可能会异步, 除此之外还有使用 setTimeout 等方式实现异步.
</details>

14. nextTick, setTimeout 以及 setImmediate 三者有什么区别?

<details><summary><b>答案</b></summary>

</details>

15. 如何实现一个 sleep 函数?

<details><summary><b>答案</b></summary>
```js
function sleep(ms) {
  var start = Date.now(), expire = start + ms;
  while (Date.now() < expire) ;
  return;
}
```
而异步, 是使用 libuv 来实现的 (C/C++的同学可以参见 libev 和 libevent) 另一个线程里的事件队列.

如果在线上的网站中出现了死循环的逻辑被触发, 整个进程就会一直卡在死循环中, 如果没有多进程部署的话, 之后的网站请求全部会超时, js 代码没有结束那么事件队列就会停下等待不会执行异步, 整个网站无法响应.
</details>

16. 如何实现一个异步的 reduce? (注:不是异步完了之后同步 reduce)

<details><summary><b>答案</b></summary>
需要了解 reduce 的情况, 是第 n 个与 n+1 的结果异步处理完之后, 在用新的结果与第 n+2 个元素继续依次异步下去. 
</details>

17. 有这样一个场景, 你在线上使用 koa 搭建了一个网站, 这个网站项目中有一个你同事写的接口 A, 而 A 接口中在特殊情况下会变成死循环. 那么首先问题是, 如果触发了这个死循环, 会对网站造成什么影响?

<details><summary><b>答案</b></summary>
Node.js 中执行 js 代码的过程是单线程的. 只有当前代码都执行完, 才会切入事件循环, 然后从事件队列中 pop 出下一个回调函数开始执行代码. 所以 ① 实现一个 sleep 函数, 只要通过一个死循环就可以阻塞整个 js 的执行流程. (关于如何避免坑爹的同事写出死循环, 在后面的测试环节有写到.)
</details>

18. 并行/并发

<details><summary><b>答案</b></summary>

并行 (Parallel) 与并发 (Concurrent) 是两个很常见的概念.

![avatar](https://joearms.github.io/images/con_and_par.jpg)

并发 (Concurrent) = 2 队列对应 1 咖啡机.

并行 (Parallel) = 2 队列对应 2 咖啡机.

Node.js 通过事件循环来挨个抽取事件队列中的一个个 Task 执行, 从而避免了传统的多线程情况下 2个队列对应 1个咖啡机 的时候上下文切换以及资源争抢/同步的问题, 所以获得了高并发的成就.

至于在 node 中并行, 你可以通过 cluster 来再添加一个咖啡机.
</details>


19. 进程的当前工作目录是什么? 有什么作用?

<details><summary><b>答案</b></summary>
当前进程启动的目录, 通过 process.cwd() 获取当前工作目录 (current working directory), 通常是命令行启动的时候所在的目录 (也可以在启动时指定), 文件操作等使用相对路径的时候会相对当前工作目录来获取文件.

一些获取配置的第三方模块就是通过你的当前目录来找配置文件的. 所以如果你错误的目录启动脚本, 可能没法得到正确的结果. 在程序中可以通过 process.chdir() 来改变当前的工作目录.
</details>

20. child_process.fork 与 POSIX 的 fork 有什么区别?

<details><summary><b>答案</b></summary>

Node.js 的 child_process.fork() 在 Unix 上的实现最终调用了 POSIX fork(2), 而 POSIX 的 fork 需要手动管理子进程的资源释放 (waitpid), child_process.fork 则不用关心这个问题, Node.js 会自动释放, 并且可以在 option 中选择父进程死后是否允许子进程存活.

- spawn() 启动一个子进程来执行命令
- options.detached 父进程死后是否允许子进程存活
- options.stdio 指定子进程的三个标准流
- spawnSync() 同步版的 spawn, 可指定超时, 返回的对象可获得子进程的情况
- exec() 启动一个子进程来执行命令, 带回调参数获知子进程的情况, 可指定进程运行的超时时间
- execSync() 同步版的 exec(), 可指定超时, 返回子进程的输出 (stdout)
- execFile() 启动一个子进程来执行一个可执行文件, 可指定进程运行的超时时间
- execFileSync() 同步版的 execFile(), 返回子进程的输出, 如何超时或者 exit code 不为 0, 会直接 throw Error
- fork() 加强版的 spawn(), 返回值是 ChildProcess 对象可以与子进程交互

其中 exec/execSync 方法会直接调用 bash 来解释命令, 所以如果有命令有外部参数, 则需要注意被注入的情况.


</details>

21. 父进程或子进程的死亡是否会影响对方? 什么是孤儿进程?

<details><summary><b>答案</b></summary>
子进程死亡不会影响父进程, 不过子进程死亡时（线程组的最后一个线程，通常是“领头”线程死亡时），会向它的父进程发送死亡信号. 反之父进程死亡, 一般情况下子进程也会随之死亡, 但如果此时子进程处于可运行态、僵死状态等等的话, 子进程将被进程1（init 进程）收养，从而成为孤儿进程. 另外, 子进程死亡的时候（处于“终止状态”），父进程没有及时调用 wait() 或 waitpid() 来返回死亡进程的相关信息，此时子进程还有一个 PCB 残留在进程表中，被称作僵尸进程.
</details>

22. cluster 是如何保证负载均衡的?

<details><summary><b>答案</b></summary>
</details>

23. 什么是守护进程? 如何实现守护进程?

<details><summary><b>答案</b></summary>
</details>


24. 在 IPC 通道建立之前, 父进程与子进程是怎么通信的? 如果没有通信, 那 IPC 是怎么建立的?

<details><summary><b>答案</b></summary>
这个问题也挺简单, 只是个思路的问题. 在通过 child_process 建立子进程的时候, 是可以指定子进程的 env (环境变量) 的. 所以 Node.js 在启动子进程的时候, 主进程先建立 IPC 频道, 然后将 IPC 频道的 fd (文件描述符) 通过环境变量 (NODE_CHANNEL_FD) 的方式传递给子进程, 然后子进程通过 fd 连上 IPC 与父进程建立连接.
</details>


[[↑] 回到顶部](#awsome-interview-front-end)

### Webpack

1. [webpack和gulp的区别](https://github.com/awsome-interview/awsome-interview-front-end/blob/master/webpack/webpack1.md)

2. [webpack的loader和plugin有什么区别](https://github.com/awsome-interview/awsome-interview-front-end/blob/master/webpack/webpack2.md)

3. [做项目的时候，用webpack-dev-server起的热刷新和node自己写的http协议搭建服务，这两者有什么区别吗？](https://github.com/awsome-interview/awsome-interview-front-end/blob/master/webpack/webpack3.md)

4. [用webpack进行哪些性能方面的优化](https://github.com/awsome-interview/awsome-interview-front-end/blob/master/webpack/webpack4.md)

5. [怎么用webpack进行按需加载](https://github.com/awsome-interview/awsome-interview-front-end/blob/master/webpack/webpack5.md)

6. [webpack配置：（几个重要参数）](https://github.com/awsome-interview/awsome-interview-front-end/blob/master/webpack/webpack6.md)

7. [style-loader和css-loader的区别](https://github.com/awsome-interview/awsome-interview-front-end/blob/master/webpack/webpack7.md)

[[↑] 回到顶部](#awsome-interview-front-end)

### CSS
1. [遇到过的兼容性问题？](https://github.com/awsome-interview/awsome-interview-front-end/blob/master/css/css1.md)


[[↑] 回到顶部](#awsome-interview-front-end)

### 人事问题
1. [自我介绍](https://github.com/awsome-interview/awsome-interview-front-end/blob/master/hr/hr1.md)

2. [为什么离职？](https://github.com/awsome-interview/awsome-interview-front-end/blob/master/hr/hr2.md)

3. [上家公司在哪？能提供联系方式做背景调查吗？](https://github.com/awsome-interview/awsome-interview-front-end/blob/master/hr/hr3.md)

4. [可以提供工资流水吗？](https://github.com/awsome-interview/awsome-interview-front-end/blob/master/hr/hr4.md)

5. [今天面试的这么多人，你觉得自己的优势在什么地方？](https://github.com/awsome-interview/awsome-interview-front-end/blob/master/hr/hr5.md)

6. [加班的看法？](https://github.com/awsome-interview/awsome-interview-front-end/blob/master/hr/hr6.md)

7. [你期望的薪资？最低能接受多少？](https://github.com/awsome-interview/awsome-interview-front-end/blob/master/hr/hr7.md)

8. [你的职业规划？](https://github.com/awsome-interview/awsome-interview-front-end/blob/master/hr/hr8.md)

9. [上份工作遇到的最大的问题？（如何来解决的）](https://github.com/awsome-interview/awsome-interview-front-end/blob/master/hr/hr9.md)

10. [通过了这次录用，但是工作了一段时间却发现不能胜任这份工作，怎么办？](https://github.com/awsome-interview/awsome-interview-front-end/blob/master/hr/hr10.md)

11. [你的意见和领导或者同事发生冲突和矛盾的时候 怎么办？](https://github.com/awsome-interview/awsome-interview-front-end/blob/master/hr/hr11.md)

12. [跳槽的看法？](https://github.com/awsome-interview/awsome-interview-front-end/blob/master/hr/hr12.md)

13. [现在求职最看重什么？](https://github.com/awsome-interview/awsome-interview-front-end/blob/master/hr/hr13.md)

14. [你还有什么想要了解的吗？（先谈待遇再谈工作）](https://github.com/awsome-interview/awsome-interview-front-end/blob/master/hr/hr14.md)

15. [讲一讲自己工作中的优点和缺点？](https://github.com/awsome-interview/awsome-interview-front-end/blob/master/hr/hr15.md)

16. [为何转行？](https://github.com/awsome-interview/awsome-interview-front-end/blob/master/hr/hr16.md)

17. [介绍一下你最近做的一个项目](https://github.com/awsome-interview/awsome-interview-front-end/blob/master/hr/hr17.md)

[[↑] 回到顶部](#awsome-interview-front-end)

## 参考文献
[lydiahallie/javascript-questions](https://github.com/lydiahallie/javascript-questions)

[CyC2018/CS-Notes](https://github.com/CyC2018/CS-Notes)

[Snailclimb/JavaGuide](https://github.com/Snailclimb/JavaGuide)

[h5bp/Front-end-Developer-Interview-Questions](https://github.com/h5bp/Front-end-Developer-Interview-Questions)

[MaximAbramchuck/awesome-interview-questions](https://github.com/MaximAbramchuck/awesome-interview-questions)

[imhuay/Algorithm_Interview_Notes-Chinese](https://github.com/imhuay/Algorithm_Interview_Notes-Chinese)

[yangshun / front-end-interview-handbook](https://github.com/yangshun/front-end-interview-handbook)

[InterviewMap / CS-Interview-Knowledge-Map](https://github.com/InterviewMap/CS-Interview-Knowledge-Map)

[ElemeFE/node-interview](https://github.com/ElemeFE/node-interview)

[Advanced-Frontend / Daily-Interview-Question](https://github.com/qiufeihong2018?tab=stars&utf8=%E2%9C%93&q=&q=interview)

[30-seconds/30-seconds-of-interviews](https://github.com/30-seconds/30-seconds-of-interviews)

[helloqingfeng/Awsome-Front-End-learning-resource](https://github.com/helloqingfeng/Awsome-Front-End-learning-resource)

[khan4019/front-end-Interview-Questions](https://github.com/khan4019/front-end-Interview-Questions)

[webproblem/learning-article](https://github.com/webproblem/learning-article)

[这里有一份 JavaScript 高级面试题，请来回答](http://www.imooc.com/article/23647)

[[↑] 回到顶部](#awsome-interview-front-end)
