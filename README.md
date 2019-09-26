# awsome-knowledge-front-end
## 目录
### [JavaScript](https://github.com/awsome-knowledge/awsome-knowledge-front-end/tree/master/javascript#awsome-knowledge-front-end)
### [Vue.js](https://github.com/awsome-knowledge/awsome-knowledge-front-end/tree/master/vue#awsome-knowledge-front-end)
### [Node.js](https://github.com/awsome-knowledge/awsome-knowledge-front-end/tree/master/node#awsome-knowledge-front-end)
### [Webpack](https://github.com/awsome-knowledge/awsome-knowledge-front-end/tree/master/webpack#awsome-knowledge-front-end)
### [CSS](https://github.com/awsome-knowledge/awsome-knowledge-front-end/tree/master/css#awsome-knowledge-front-end)
### [Html](https://github.com/awsome-knowledge/awsome-knowledge-front-end/tree/master/html#awsome-knowledge-front-end)
### [性能优化](https://github.com/awsome-knowledge/awsome-knowledge-front-end/tree/master/optimize#awsome-knowledge-front-end)
### [计算机网络](https://github.com/awsome-knowledge/awsome-knowledge-front-end/tree/master/network#awsome-knowledge-front-end)
<!-- ### [人事问题](https://github.com/awsome-knowledge/awsome-knowledge-front-end/tree/master/hr#awsome-knowledge-front-end) -->

## 参考文献

<details><summary><b>参考文献</b></summary>

[awesome-coding-js](http://www.conardli.top/docs/JavaScript/)

[sudheerj/vuejs-interview-questions](https://github.com/sudheerj/vuejs-interview-questions)

[lydiahallie/javascript-questions](https://github.com/lydiahallie/javascript-questions)

[CyC2018/CS-Notes](https://github.com/CyC2018/CS-Notes)

[Snailclimb/JavaGuide](https://github.com/Snailclimb/JavaGuide)

[h5bp/Front-end-Developer-Interview-Questions](https://github.com/h5bp/Front-end-Developer-Interview-Questions)

[MaximAbramchuck/awesome-interview-questions](https://github.com/MaximAbramchuck/awesome-interview-questions)

[imhuay/Algorithm_Interview_Notes-Chinese](https://github.com/imhuay/Algorithm_Interview_Notes-Chinese)

[yangshun / front-end-interview-handbook](https://github.com/yangshun/front-end-interview-handbook)

[InterviewMap / CS-Interview-Knowledge-Map](https://github.com/InterviewMap/CS-Interview-Knowledge-Map)

[ElemeFE/node-interview](https://github.com/ElemeFE/node-interview)

[Advanced-Frontend / Daily-Interview-Question](https://github.com/Advanced-Frontend/Daily-Interview-Question)

[30-seconds/30-seconds-of-interviews](https://github.com/30-seconds/30-seconds-of-interviews)

[helloqingfeng/Awsome-Front-End-learning-resource](https://github.com/helloqingfeng/Awsome-Front-End-learning-resource)

[khan4019/front-end-Interview-Questions](https://github.com/khan4019/front-end-Interview-Questions)

[webproblem/learning-article](https://github.com/webproblem/learning-article)

[这里有一份 JavaScript 高级面试题，请来回答](http://www.imooc.com/article/23647)

[一年半经验，百度、有赞、阿里前端面试总结](https://juejin.im/post/5befeb5051882511a8527dbe)

[前端面试题（2019篇）附答案](http://bbs.itheima.com/thread-468297-1-1.html)

[阿里、网易、滴滴共十次前端面试碰到的问题](https://juejin.im/post/59316e682f301e0058378558)

[[↑] 回到顶部](#awsome-knowledge-front-end)


</details>



### 大搜车




#### 关于跨端开发下面说法不正确的是(大搜车)
使用rn或者weex跟使用webview内嵌h5用户体验相差不多
flutter开发的语言是dart
rn跟原生通信，用的是native modules
weex网络请求使用浏览器xxx（不是stream.StreamAPIfetch）的发出


#### 使用正则表达式验证邮箱格式(大搜车)

#### 浏览器实现js多线程提供原生对象是(大搜车)

#### web存储方式(大搜车)

#### spa路由实现的两种方式(大搜车)

#### 获取浏览器的ua(大搜车)

#### 判断数组(大搜车)

#### css伪类清浮动(大搜车)

#### 子div在父div水平垂直居中(大搜车)

#### 跨域方法(大搜车)

#### 实现indexof(大搜车)

#### sass(大搜车)

### 海康

#### vue3.0的变化（海康）

全面改革：解读vue3.0的变化
9月30日，尤雨溪在medium个人博客上发布了vue3.0的开发思路，国内有翻译的版本，见文章最后的参考链接。3.0带了了很大的变化，他讲了一些改进的思路以及整个开发流程的规划。

vue3.0的改进思路
vue最主要的特点就是响应式机制、模板、以及对象式的组件声明语法，而3.0对这三部分都做了更改。


响应式
2.x的响应式是基于Object.defineProperty实现的代理，兼容主流浏览器和ie9以上的ie浏览器，能够监听数据对象的变化，但是监听不到对象属性的增删、数组元素和长度的变化，同时会在vue初始化的时候把所有的Observer都建立好，才能观察到数据对象属性的变化。

针对上面的问题，3.0进行了革命性的变更，采用了ES2015的Proxy来代替Object.defineProperty，可以做到监听对象属性的增删和数组元素和长度的修改，还可以监听Map、Set、WeakSet、WeakMap，同时还实现了惰性的监听，不会在初始化的时候创建所有的Observer，而是会在用到的时候才去监听。但是，虽然主流的浏览器都支持Proxy，ie系列却还是不兼容，所以针对ie11，vue3.0决定做单独的适配，暴露出来的api一样，但是底层实现还是Object.defineProperty，这样导致了ie11还是有2.x的问题。但是绝大部分情况下，3.0带来的好处已经能够体验到了。

响应式方面，vue3.0做了实现机制的变更，采用ES2015的Proxy，不但解决了vue2.x中的问题，还是得性能有了进一步提升。虽然有一些兼容问题，但是通过适配的方式解决掉了。此外，还暴露了observable的api来创建响应式对象，可以替代掉event bus，来做一些跨组件的通信。

2.模板
模板方面没有大的变更，只改了作用域插槽，2.x的机制导致作用域插槽变了，父组件会重新渲染，而3.0把作用于插槽改成了函数的方式，这样只会影响子组件的重新渲染，提升了渲染的性能。

同时，对于render函数的方面，vue3.0也会进行一系列更改来方便习惯直接使用api来生成vdom的开发者。

对象式的组件声明方式

vue2.x中的组件是通过声明的方式传入一系列option，和TypeScript的结合需要通过一些装饰器的方式来做，虽然能实现功能，但是比较麻烦。

3.0修改了组件的声明方式，改成了类式的写法，这样使得和TypeScript的结合变得很容易。

此外，vue的源码也改用了TypeScript来写。其实当代码的功能复杂之后，必须有一个静态类型系统来做一些辅助管理，如React使用的Flow，Angular使用的TypeScript。现在vue3.0也全面改用TypeScript来重写了，更是使得对外暴露的api更容易结合TypeScript。静态类型系统对于复杂代码的维护确实很有必要。

其他的一些东西
vue3.0的改变是全面的，上面只涉及到主要的3个方面，还有一些其他的更改：

支持自定义渲染器，从而使得weex可以通过自定义渲染器的方式来扩展，而不是直接fork源码来改的方式。
支持Fragment（多个根节点）和Protal（在dom其他部分渲染组建内容）组件，针对一些特殊的场景做了处理。
基于treeshaking优化，提供了更多的内置功能。
vue3.0的开发流程规划
vue的开发思路是公开的，尤雨溪说主要的特性会听取一些主要库的开发者的反馈，有比较确定的方案以后公布RFC收集公众的反馈意见，之后才进入开发，同时会同步生态内相关的库和工具的更新。

虽然vue不如react和angular那样有大公司维护，但是借助开源的力量，整个流程都是开源社区参与的，这样vue的稳定程度和开发思路自然也就不会有什么大的问题。

总结
vue3.0对vue的主要3个特点：响应式、模板、对象式的组件声明方式，进行了全面的更改，底层的实现和上层的api都有了明显的变化，基于Proxy重新实现了响应式，基于treeshaking内置了更多功能，提供了类式的组件声明方式。而且源码全部用typescript重写。以及进行了一系列的性能优化。


#### 响应式原理（海康）

Vue.js 最显著的功能就是响应式系统，它是一个典型的 MVVM 框架，模型（Model）只是普通的 JavaScript 对象，修改它则视图（View）会自动更新。这种设计让状态管理变得非常简单而直观，不过理解它的原理也很重要，可以避免一些常见问题。下面让我们深挖 Vue.js 响应式系统的细节，来看一看 Vue.js 是如何把模型和视图建立起关联关系的。

图中的模型（Model）就是 data 方法返回的{times:1}，视图（View）是最终在浏览器中显示的 DOM。模型通过 Observer、Dep、Watcher、Directive 等一系列对象的关联，最终和视图建立起关系。归纳起来，Vue.js 在这里主要做了三件事：

通过 Observer 对 data 做监听，并且提供了订阅某个数据项变化的能力。
把 template 编译成一段 document fragment，然后解析其中的 Directive，得到每一个 Directive 所依赖的数据项和 update 方法。
通过 Watcher 把上述两部分结合起来，即把 Directive 中的数据依赖通过 Watcher 订阅在对应数据的 Observer 的 Dep 上。当数据变化时，就会触发 Observer 的 Dep 上的 notify 方法通知对应的 Watcher 的 update，进而触发 Directive 的 update 方法来更新 DOM 视图，最后达到模型和视图关联起来。
接下来我们就结合 Vue.js 的源码来详细介绍这三个过程。

#### promise.all 如果三个请求中第一个发生错误是会继续执行吗（海康）
Promise.all(iterable) 方法返回一个 Promise 实例，此实例在 iterable 参数内所有的 promise 都“完成（resolved）”或参数中不包含 promise 时回调完成（resolve）；如果参数中  promise 有一个失败（rejected），此实例回调失败（reject），失败原因的是第一个失败 promise 的结果。

Promise.all 在任意一个传入的 promise 失败时返回失败。例如，如果你传入的 promise中，有四个 promise 在一定的时间之后调用成功函数，有一个立即调用失败函数，那么 Promise.all 将立即变为失败。

#### 取消promise（海康）

概述
在项目开发中离不了的需要进行一些异步操作，这些异步操作在改善用户体验的同时也带来了一些性能隐患。 比如，在某页面进行异步操作，异步操作还没有完成时，该页面已经关闭，这时由于异步操作的存在，导致系统无法及时的回收资源，从而导致性能的降低，甚至出现oom。

总而言之，异步操作在改善用户体验，增强系统灵活性的同时也带来了一些性能隐患，如果使用不当则会带来一些副作用。

那么如何在使用异步操作的同时规避它所带来的副作用呢？

问题不是出在异步操作上，异步操作本没有错，错在异步操作的不合理使用上。比如，页面已经关闭了，而页面的异步操作还在进行等使用问题。 所以我们需要在编程中学会“舍得”，在适当的时候去取消一些异步操作。

为Promise插上可取消的翅膀
Promise是React Native开发过程中用于异步操作的最常用的API，但Promise没有提供用于取消异步操作的方法。为了实现可取消的异步操作，我们可以为Promise包裹一层可取消的外衣。

const makeCancelable = (promise) => {
  let hasCanceled_ = false;
  const wrappedPromise = new Promise((resolve, reject) => {
    promise.then((val) =>
      hasCanceled_ ? reject({isCanceled: true}) : resolve(val)
    );
    promise.catch((error) =>
      hasCanceled_ ? reject({isCanceled: true}) : reject(error)
    );
  });
  return {
    promise: wrappedPromise,
    cancel() {
      hasCanceled_ = true;
    },
  };
};  
然后可以这样使用取消操作：

const somePromise = new Promise(r => setTimeout(r, 1000));//创建一个异步操作
const cancelable = makeCancelable(somePromise);//为异步操作添加可取消的功能
cancelable
  .promise
  .then(() => console.log('resolved'))
  .catch(({isCanceled, ...error}) => console.log('isCanceled', isCanceled));
// 取消异步操作
cancelable.cancel();   
上述方法，可以为异步操作添加可取消的功能，但是使用还是不够方便：在每个使用makeCancelable的页面都需要复制粘贴上述代码。
下面我们做一下改进，将上述代码抽离到一个文件中。

/**
* Cancelable
* GitHub:https://github.com/crazycodeboy
* Eamil:crazycodeboy@gmail.com 
* @flow
**/
'use strict'

export default function makeCancelable(promise){
   let hasCanceled_ = false;
   const wrappedPromise = new Promise((resolve, reject) => {
       promise.then((val) =>
           hasCanceled_ ? reject({isCanceled: true}) : resolve(val)
       );
       promise.catch((error) =>
           hasCanceled_ ? reject({isCanceled: true}) : reject(error)
       );
   });

   return {
       promise: wrappedPromise,
       cancel() {
           hasCanceled_ = true;
       },
   };
}
这样在使用的时候只需要将makeCancelable导入到你的相应js文件中就可以了。

import makeCancelable from '../util/Cancelable'
可取消的网络请求fetch
fetch是React Native开发过程中最常用的网络请求API，和Promis一样，fetch也没有提供用于取消已发出的网络请求的API。因为fetch返回的是一个Promise，所以我们可以借助上述方法，�来取消fetch所发出的网络请求。

this.cancelable = makeCancelable(fetch('url')));
        this.cancelable.promise
            .then((response)=>response.json())
            .then((responseData)=> {          
                console.log(responseData);                            
            }).catch((error)=> {
                console.log(error); 
            });
取消网络请求：

this.cancelable.cancel();

在项目中的使用
为了提高React Native应用的性能，我们需要在组件卸载的时候不仅要主动释放掉所持有的资源，也要取消所发出的一些异步请求操作。

componentWillUnmount() {      
  this.cancelable.cancel();
}
#### css实现转圈（海康）

https://www.cnblogs.com/futai/p/6730948.html

animation/transform/rotate


#### vue-router的钩子（海康）



### 坚果云

#### 介绍一下标准的CSS的盒子模型？与低版本IE的盒子模型有什么不同的？(坚果云)

标准盒子模型：宽度=内容的宽度（content）+ border + padding + margin
低版本IE盒子模型：宽度=内容宽度（content+border+padding）+ margin


####  如何居中div？如何居中一个浮动元素？如何让绝对定位的div居中？(坚果云)
浮动元素的上下左右居中：

```css
border: 1px solid red;
float: left;
position: absolute;
width: 200px;
height: 100px;
left: 50%;
top: 50%;
margin: -50px 0 0 -100px; 
```

绝对定位的左右居中：

```css
border: 1px solid black;
position: absolute;
width: 200px;
height: 100px;
margin: 0 auto;
left: 0;
right: 0; 
```

#### CSS3有哪些新特性？(坚果云)

RGBA和透明度
background-image background-origin(content-box/padding-box/border-box) background-size background-repeat
word-wrap（对长的不可分割单词换行）word-wrap：break-word
文字阴影：text-shadow： 5px 5px 5px #FF0000;（水平阴影，垂直阴影，模糊距离，阴影颜色）
font-face属性：定义自己的字体
圆角（边框半径）：border-radius 属性用于创建圆角
边框图片：border-image: url(border.png) 30 30 round
盒阴影：box-shadow: 10px 10px 5px #888888
媒体查询：定义两套css，当浏览器的尺寸变化时会采用不同的属性

#### 对BFC规范(块级格式化上下文：block formatting context)的理解？(坚果云)

BFC规定了内部的Block Box如何布局。
定位方案：

内部的Box会在垂直方向上一个接一个放置。
Box垂直方向的距离由margin决定，属于同一个BFC的两个相邻Box的margin会发生重叠。
每个元素的margin box 的左边，与包含块border box的左边相接触。
BFC的区域不会与float box重叠。
BFC是页面上的一个隔离的独立容器，容器里面的子元素不会影响到外面的元素。
计算BFC的高度时，浮动元素也会参与计算。
满足下列条件之一就可触发BFC

根元素，即html
float的值不为none（默认）
overflow的值不为visible（默认）
display的值为inline-block、table-cell、table-caption
position的值为absolute或fixed


#### 如何做响应式布局(坚果云)
通过媒体查询可以为不同大小和尺寸的媒体定义不同的css，适应相应的设备的显示。

<head>里边
<link rel="stylesheet" type="text/css" href="xxx.css" media="only screen and (max-device-width:480px)">

CSS : @media only screen and (max-device-width:480px) {/css样式/}

#### 什么是响应式设计？
响应式网站设计(Responsive Web design)是一个网站能够兼容多个终端，而不是为每一个终端做一个特定的版本。
基本原理是通过媒体查询检测不同的设备屏幕尺寸做处理。
页面头部必须有meta声明的viewport。

<meta name=’viewport’ content=”width=device-width, initial-scale=1. maximum-scale=1,user-scalable=no”>


#### defer和async的区别(坚果云)

先来试个一句话解释仨，当浏览器碰到 script 脚本的时候：

<script src="script.js"></script>

没有 defer 或 async，浏览器会立即加载并执行指定的脚本，“立即”指的是在渲染该 script 标签之下的文档元素之前，也就是说不等待后续载入的文档元素，读到就加载并执行。

<script async src="script.js"></script>

有 async，加载和渲染后续文档元素的过程将和 script.js 的加载与执行并行进行（异步）。

<script defer src="myscript.js"></script>

有 defer，加载后续文档元素的过程将和 script.js 的加载并行进行（异步），但是 script.js 的执行要在所有元素解析完成之后，DOMContentLoaded 事件触发之前完成。

然后从实用角度来说呢，首先把所有脚本都丢到 </body> 之前是最佳实践，因为对于旧浏览器来说这是唯一的优化选择，此法可保证非脚本的其他一切元素能够以最快的速度得到加载和解析。

接着，我们来看一张图咯：

![avatar](https://img-blog.csdn.net/20180213144611105?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQvZnVuY3Rpb25fXw==/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70)

蓝色线代表网络读取，红色线代表执行时间，这俩都是针对脚本的；绿色线代表 HTML 解析。

此图告诉我们以下几个要点：

defer 和 async 在网络读取（下载）这块儿是一样的，都是异步的（相较于 HTML 解析）
它俩的差别在于脚本下载完之后何时执行，显然 defer 是最接近我们对于应用脚本加载和执行的要求的
关于 defer，此图未尽之处在于它是按照加载顺序执行脚本的，这一点要善加利用
async 则是一个乱序执行的主，反正对它来说脚本的加载和执行是紧紧挨着的，所以不管你声明的顺序如何，只要它加载完了就会立刻执行
仔细想想，async 对于应用脚本的用处不大，因为它完全不考虑依赖（哪怕是最低级的顺序执行），不过它对于那些可以不依赖任何脚本或不被任何脚本依赖的脚本来说却是非常合适的，最典型的例子：Google Analytics

https://blog.csdn.net/function__/article/details/79321540

### 知衣科技
#### 解析字符串的值使之变成算式如‘1-10*2+1/4’（知衣科技）
当时想的是乘除等高级运算符、加减等低级运算符和数字分别放在三个数组中

先遍历高级数组进行运算操作，然后遍历低级数组进行运算操作。

方法一：使用eval函数计算字符串
```js
let str = '100+5*(120-20)'

console.log(eval(str))
```


#### mongo事务（知衣科技）
    MongoDB数据库中操作单个文档总是原子性的，然而，涉及多个文档的操作，通常被作为一个“事务”，而不是原子性的。因为文档可以是相当复杂并且包含多个嵌套文档，单文档的原子性对许多实际用例提供了支持。尽管单文档操作是原子性的，在某些情况下，需要多文档事务。在这些情况下，使用两阶段提交，提供这些类型的多文档更新支持。因为文档可以表示为Pending数据和状态，可以使用一个两阶段提交确保数据是一致的，在一个错误的情况下，事务前的状态是可恢复的。
    事务最常见的例子是以可靠的方式从A账户转账到B账户，在关系型数据库中，此操作将从A账户减掉金额和给B账户增加金额的操作封装在单个原子事务中。在MongoDB中，可以使用两阶段提交达到相同的效果。本文中的所有示例使用mongo shell与数据库进行交互,并假设有两个集合：首先，一个名为accounts的集合存储每个账户的文档数据，另一个名为transactions的集合存储事务本身。

    首先创建两个名为A和B的账户，使用下面的命令：

db.accounts.save({name: "A", balance: 1000, pendingTransactions: []})
db.accounts.save({name: "B", balance: 1000, pendingTransactions: []})
使用find()方法验证这两个操作已经成功：

db.accounts.find()
mongo会返回两个类似下面的文档：

{ "_id" : ObjectId("4d7bc66cb8a04f512696151f"), "name" : "A", "balance" : 1000, "pendingTransactions" : [ ] }
{ "_id" : ObjectId("4d7bc67bb8a04f5126961520"), "name" : "B", "balance" : 1000, "pendingTransactions" : [ ] }
事务过程：
设置事务初始状态initial：

    通过插入下面的文档创建transaction集合，transaction文档持有源(source)和目标(destination)，它们引用自accounts集合文档的字段名，以及value字段表示改变balance字段数量的数据。最后，state字段反映事务的当前状态。

db.transactions.save({source: "A", destination: "B", value: 100, state: "initial"})
验证这个操作已经成功，使用find()：

db.transactions.find()
这个操作会返回一个类似下面的文档：

{ "_id" : ObjectId("4d7bc7a8b8a04f5126961522"), "source" : "A", "destination" : "B", "value" : 100, "state" : "initial" }
切换事务到Pending状态：

    在修改accounts集合记录之前，将事务状态从initial设置为pending。使用findOne()方法将transaction文档赋值给shell会话中的局部变量t：
t = db.transactions.findOne({state: "initial"})
变量t创建后，shell将返回它的值，将会看到如下的输出：

{ "_id" : ObjectId("4d7bc7a8b8a04f5126961522"), "source" : "A", "destination" : "B", "value" : 100, "state" : "initial" }
使用update()改变state的值为pending：

db.transactions.update({_id: t._id}, {$set: {state: "pending"}})
db.transactions.find()
find()操作将返回transaction集合的内容，类似下面：

{ "_id" : ObjectId("4d7bc7a8b8a04f5126961522"), "source" : "A", "destination" : "B", "value" : 100, "state" : "pending" }
将事务应用到两个账户：

    使用update()方法应用事务到两个账户。在update()查询中，条件pendingTransactions:{$ne:t._id}阻止事务更新账户，如果账户的pendingTransaction字段包含事务t的_id：

db.accounts.update(
	{ name: t.source, pendingTransactions: { $ne: t._id } },
	{ $inc: { balance: -t.value }, $push: { pendingTransactions: t._id } }
)
db.accounts.update(
	{ name: t.destination, pendingTransactions: { $ne: t._id } },
	{ $inc: { balance: t.value }, $push: { pendingTransactions: t._id } }
)
db.accounts.find()
find()操作将返回accounts集合的内容，现在应该类似于下面的内容：

{ "_id" : ObjectId("4d7bc97fb8a04f5126961523"), "balance" : 900, "name" : "A", "pendingTransactions" : [ ObjectId("4d7bc7a8b8a04f5126961522") ] }
{ "_id" : ObjectId("4d7bc984b8a04f5126961524"), "balance" : 1100, "name" : "B", "pendingTransactions" : [ ObjectId("4d7bc7a8b8a04f5126961522") ] }
设置事务状态为committed：

    使用下面的update()操作设置事务的状态为committed：

db.transactions.update({_id: t._id}, {$set: {state: "committed"}})
db.transactions.find()
find()操作发回transactions集合的内容，现在应该类似下面的内容：

{ "_id" : ObjectId("4d7bc7a8b8a04f5126961522"), "destination" : "B", "source" : "A", "state" : "committed", "value" : 100 }
移除pending事务：

    使用下面的update()操作从accounts集合中移除pending事务：

db.accounts.update({name: t.source}, {$pull: {pendingTransactions: t._id}})
db.accounts.update({name: t.destination}, {$pull: {pendingTransactions: t._id}})
db.accounts.find()
find()操作返回accounts集合内容，现在应该类似下面内容：

{ "_id" : ObjectId("4d7bc97fb8a04f5126961523"), "balance" : 900, "name" : "A", "pendingTransactions" : [ ] }
{ "_id" : ObjectId("4d7bc984b8a04f5126961524"), "balance" : 1100, "name" : "B", "pendingTransactions" : [ ] }
设置事务状态为done：

    通过设置transaction文档的state为done完成事务：

db.transactions.update({_id: t._id}, {$set: {state: "done"}})
db.transactions.find()
find()操作返回transaction集合的内容，此时应该类似下面：

{ "_id" : ObjectId("4d7bc7a8b8a04f5126961522"), "destination" : "B", "source" : "A", "state" : "done", "value" : 100 }
从失败场景中恢复：
    最重要的部分不是上面的典型例子，而是从各种失败场景中恢复未完成的事务的可能性。这部分将概述可能的失败，并提供方法从这些事件中恢复事务。这里有两种类型的失败：

1、所有发生在第一步（即设置事务的初始状态initial）之后，但在第三步（即应用事务到两个账户）之前的失败。为了还原事务，应用应该获取一个pending状态的transaction列表并且从第二步（即切换事务到pending状态）中恢复。

2、所有发生在第三步之后（即应用事务到两个账户）但在第五步(即设置事务状态为done)之前的失败。为了还原事务，应用需要获取一个committed状态的事务列表，并且从第四步（即移除pending事务）恢复。

    因此应用程序总是能够恢复事务，最终达到一个一致的状态。应用程序开始捕获到每个未完成的事务时运行下面的恢复操作。你可能还希望定期运行恢复操作，以确保数据处于一致状态。达成一致状态所需要的时间取决于应用程序需要多长时间恢复每个事务。

回滚：
     在某些情况下可能需要“回滚”或“撤消”事务，当应用程序需要“取消”该事务时，或者是因为它永远需要恢复当其中一个帐户不存在的情况下，或停止现有的事务。这里有两种可能的回滚操作：

1、应用事务（即第三步）之后，你已经完全提交事务，你不应该回滚事务。相反，创建一个新的事务，切换源(源)和目标(destination)的值。

2、创建事务（即第一步）之后，在应用事务（即第三步）之前，使用下面的处理过程：

设置事务状态为canceling：

    首先设置事务状态为canceling，使用下面的update()操作：

db.transactions.update({_id: t._id}, {$set: {state: "canceling"}})
撤销事务：
    使用下面的操作顺序从两个账户中撤销事务：

db.accounts.update({name: t.source, pendingTransactions: t._id}, {$inc: {balance: t.value}, $pull: {pendingTransactions: t._id}})
db.accounts.update({name: t.destination, pendingTransactions: t._id}, {$inc: {balance: -t.value}, $pull: {pendingTransactions: t._id}})
db.accounts.find()
find()操作返回acounts集合的内容，应该类似下面：

{ "_id" : ObjectId("4d7bc97fb8a04f5126961523"), "balance" : 1000, "name" : "A", "pendingTransactions" : [ ] }
{ "_id" : ObjectId("4d7bc984b8a04f5126961524"), "balance" : 1000, "name" : "B", "pendingTransactions" : [ ] }
设置事务状态为canceled：

     最后，使用下面的update()状态将事务状态设置为canceled：

db.transactions.update({_id: t._id}, {$set: {state: "canceled"}})
参考资料：http://docs.mongodb.org/manual/tutorial/perform-two-phase-commits/
标签:数据库MongoDBNoSQL

https://www.tuicool.com/articles/f6ZBjm

#### 如果系统中数据过多的情况下，算法能通过吗（知衣科技）


#### vue源码的考量（知衣科技）
回答了vue响应式原理


#### 目前公司的技术栈（知衣科技）


### 我最近遇到的难题

#### iframe由于浏览器的同源策略，Navigation获取不到一些防护性高的网站的dom
跨域
#### 在xChair-server项目中我不能直接获取到三种状态（关机运行和空转） 
通过比较当前的minitor和上一个入库的monitor的入口量，如果前者大那就是运行
如果后者大，那数据纠错（将上一个数据清除）
如果两者相同，那么又分为两种情况
第一种就是超过了空转时间（约定为5min），这个就是关机
第二种在5min中内，就是空转

#### 型号多种情况
由于操作人员手误，采集器传过来多个例如'aecredafdfafdadfasdfdfasd'解析为'231确定21取消确定',需转化为'231'
'dfasefaweasdfasdfasd'解析为'342121确定确定确定'，需转化为'342121'


#### ACAO
对于预检请求来说，如果你使用过 Node 来设置 CORS 的话，可能会遇到过这么一个坑。

以下以 express 框架举例：

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS')
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization, Access-Control-Allow-Credentials'
  )
  next()
})
该请求会验证你的 Authorization 字段，没有的话就会报错。

当前端发起了复杂请求后，你会发现就算你代码是正确的，返回结果也永远是报错的。因为预检请求也会进入回调中，也会触发 next 方法，因为预检请求并不包含 Authorization 字段，所以服务端会报错。

想解决这个问题很简单，只需要在回调中过滤 option 方法即可

res.statusCode = 204
res.setHeader('Content-Length', '0')
res.end()
