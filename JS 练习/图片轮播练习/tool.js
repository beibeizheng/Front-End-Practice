/*
 * 参数：
 *  obj:要执行动画的对象
 *  attr:要执行动画的样式，比如：left top width height
 *  target:执行动画的目标位置
 *  speed:移动的速度(正数向右移动，负数向左移动)
 *  callback:回调函数，这个函数将会在动画执行完毕以后执行
 */
function move(obj, attr, target, speed, callback) {
    clearInterval(obj.timer);//关闭上一个定时器

    var current = parseInt(getStyle(obj, attr));//获取元素目前的位置

    //判断速度的正负值，如果从0 向 800移动，则speed为正。如果从800向0移动，则speed为负
    if(current > target) {
        speed = -speed;//此时速度应为负值
    }

    //开启一个定时器，用来执行动画效果
    obj.timer = setInterval(function() {//向执行动画的对象中添加一个timer属性，用来保存它自己的定时器的标识

        var oldValue = parseInt(getStyle(obj, attr));//获取box1的原来的left值
        var newValue = oldValue + speed;//在旧值的基础上增加

        //向左移动时，需要判断newValue是否小于target
        //向右移动时，需要判断newValue是否大于target
        if((speed < 0 && newValue < target) || (speed > 0 && newValue > target)) {
            newValue = target;
        }

        obj.style[attr] = newValue + "px";  //将新值设置给obj

        if(newValue == target) {//当元素移动到target时，使其停止执行动画
            clearInterval(obj.timer);//达到目标，关闭定时器
            callback && callback();//动画执行完毕，调用回调函数
        }

    }, 30);
}

/*
 * 定义一个函数，用来获取指定元素的当前的样式
 * 参数：
 *      obj 要获取样式的元素
 *      name 要获取的样式名
 */
function getStyle(obj, name) {

    if(window.getComputedStyle) {
        return getComputedStyle(obj, null)[name];//正常浏览器的方式，具有getComputedStyle()方法
    } else {
        return obj.currentStyle[name];//IE8的方式，没有getComputedStyle()方法
    }

}

