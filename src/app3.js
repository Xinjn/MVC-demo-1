//模块化
//JS引用CSS 不用link引入！
import './app3.css'
import $ from 'jquery'
// console.log($)

const $square = $('#app3 .square')

$square.on('click',()=>{
    // $square.addClass('active')
    $square.toggleClass('active')//toggleClass:有就删掉，没有就加上
})