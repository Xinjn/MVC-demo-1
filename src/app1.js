//模块化
//JS引用CSS 不用link引入！
import './app1.css'
import $ from 'jquery'
// console.log($)

// //获取按钮
// const $button1 = $('#add1')
// const $button2 = $('#minus1')
// const $button3 = $('#mul2')
// const $button4 = $('#divide2')
// const $number = $('#number')//获取数字
// //绑定事件（加减乘除）
// $button1.on('click', () => {
//     let n = parseInt($number.text());
//     n += 1;
//     $number.text(n);
// })
// $button2.on('click', () => {
//     let n = parseInt($number.text());
//     n -= 1;
//     $number.text(n);
// })
// $button3.on('click', () => {
//     let n = parseInt($number.text());
//     n *= 2;
//     $number.text(n);
// })
// $button4.on('click', () => {
//     let n = parseInt($number.text());
//     n /= 2;
//     $number.text(n);
// })

// 增加需求：刷新后还是计算后的数字(有数据存储功能的计算器)
// 方法：把每次计算后的结果存储到localStorage
// 获取按钮
const $button1 = $('#add1')
const $button2 = $('#minus1')
const $button3 = $('#mul2')
const $button4 = $('#divide2')
const $number = $('#number')//获取数字
// 初始化n,把n提前存储到localStorage
const n = localStorage.getItem('n');
$number.text(n || 100);

//绑定事件（加减乘除）
$button1.on('click', () => {
    let n = parseInt($number.text());
    n += 1;
    localStorage.setItem('n', n)//第一个n为名字（name），第二个是数值（value）
    $number.text(n);
})
$button2.on('click', () => {
    let n = parseInt($number.text());
    n -= 1;
    localStorage.setItem('n', n)//第一个n为名字（name），第二个是数值（value）
    $number.text(n);
})
$button3.on('click', () => {
    let n = parseInt($number.text());
    n *= 2;
    localStorage.setItem('n', n)//第一个n为名字（name），第二个是数值（value）
    $number.text(n);
})
$button4.on('click', () => {
    let n = parseInt($number.text());
    n /= 2;
    localStorage.setItem('n', n)//第一个n为名字（name），第二个是数值（value）
    $number.text(n);
})