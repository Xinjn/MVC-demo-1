//模块化
//JS引用CSS 不用link引入！
import './app2.css'
import $ from 'jquery'
// console.log($)
const $tabBar = $("#app2 .tab-bar");
const $tabContent = $("#app2 .tab-content");

// //我们现在需要监听li，li没加名字怎么监听？
// // jQuery 提供了监听子元素的事件！
// //也叫做事件委托！（不监听子元素监听父元素）
// $tabBar.on('click', 'li', (e) => {
//     // console.log(e.currentTarget)//打印出点击目标;target/currentTarget各自尝试，不对就用另一个，点击后最终必须都是是<li></li>才可以
//     // 永远不要使用DOM
//     const $li = $(e.currentTarget);//获取点击目标
//     const index = $li.index();//获取点击目标索引(获取排行老几)
//     console.log(index);
//     //永远不要用直接操作CSS的API：css/show/hide//要用addClass/removeClass
//     //这种方式叫做 样式与行为分离
//     $tabContent.children()
//         .eq(index).addClass('active')// 拓展eq()等于第几个的意思.添加class类名
//     .siblings().removeClass('active') //其他兄弟则删除class类名
// })

//添加细节
//我们现在需要监听li，li没加名字怎么监听？
// jQuery 提供了监听子元素的事件！
//也叫做事件委托！（不监听子元素监听父元素）
$tabBar.on('click', 'li', (e) => {
    // console.log(e.currentTarget)//打印出点击目标;target/currentTarget各自尝试，不对就用另一个，点击后最终必须都是是<li></li>才可以
    // 永远不要使用DOM
    const $li = $(e.currentTarget);//获取点击目标
    $li.addClass('selected')
        .siblings().removeClass('selected')
    const index = $li.index();//获取点击目标索引(获取排行老几)
    console.log(index);
    //永远不要用直接操作CSS的API：css/show/hide//要用addClass/removeClass
    //这种方式叫做 样式与行为分离
    $tabContent.children()
        .eq(index).addClass('active')// 拓展eq()等于第几个的意思.添加class类名
        .siblings().removeClass('active') //其他兄弟则删除class类名
})

//刚开始什么也不显示，使刚开始为选择状态
//方法一：在HTML样式中设置class，命名为触发名
//方法二：JS中trigger()触发click事件
$tabBar.children().eq(0).trigger('click')