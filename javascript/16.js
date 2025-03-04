function cloneObject(o) {
    // 1. 是否是object,是否为空
    if (!o || 'object' !== typeof o) {
        return o;
    }

    // 2. 判断其是数组还是对象,并创建新的对象或数组
    var c = 'function' === typeof o.pop ? [] : {};

    // 3. 遍历对象或数组
    for (let p in o) {
        let v = o[p];
        v && 'object' === typeof v ? c[p] = cloneObject(v) : c[p] = v
    }
    return c;
}

a = {
    'name': 'qiufeihong'
}
b = cloneObject(a)
a.name = 'youyuxi'
console.log('a', a)
console.log('b', b)
