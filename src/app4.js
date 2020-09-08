//模块化
//JS引用CSS 不用link引入！
import './app4.css'
import $ from 'jquery'
// console.log($)

const $circle = $('#app4 .circle')

$circle.on('mouseenter',()=>{
    $circle.addClass('active')
}).on('mouseleave',()=>{
    $circle.removeClass('active')
})