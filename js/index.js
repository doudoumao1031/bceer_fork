// JavaScript Document
// $(function (){
//     $("#main .mainB .news .tab ul li").each(function(index){
//         $(this).click(function(){
//             $("#main .mainB .tabCn").addClass("dis")//给news添加样式dis
//             $("#main .mainB .tabCn:eq("+index+")").removeClass("dis")//给对应news的index索引值删除dis样式
//             $("#main .mainB .news .tab ul li").removeClass("hover")//先删除所有的a的样式hover
//             $(this).addClass("hover")//给对应的a添加样式hover
//         })
//     })
// })


// 表单部分
$(function() {
    //集体调用
    $(".form input").each(function(){
        $(this).setDefauleValue();
    });
    //单个调用
    $("#key").setDefauleValue();
})
//设置input,textarea默认值
// 就是对单个表单的默认值 获得/失去焦点的逻辑判定
$.fn.setDefauleValue = function() {
    var defauleValue = $(this).val();//提取默认值
    $(this).val(defauleValue).css("color","#b4b4b4");//渲染默认值

    return this.each(function() {
        $(this).focus(function() {
            if ($(this).val() == defauleValue) {//获取焦点时为默认值则初始化渲染
                $(this).val("").css("color","#333");//输入值的颜色
            }
        }).blur(function() {//失去焦点为空值则默认值渲染
            if ($(this).val() == "") {
                $(this).val(defauleValue).css("color","#b4b4b4");//默认值的颜色
            }
        });
    });
}


// 导航
//二级菜单变化
$(function(){
    $(".nav ul li:has(div)").hover(function(){//对于导航li中有子组件的标签进行hover事件
        $(this).children("div").stop(true,true).slideDown(500)
        //按这儿的逻辑移到二级导航以后应该会再次出发mouseover立即结束动画 但实际情况是动画依然执行 mouseover对动画只触发一次？
        //$(selector).stop(stopAll,goToEnd);
        // 可选的 stopAll 参数规定是否应该清除动画队列。默认是 false，即仅停止活动的动画，允许任何排入队列的动画向后执行。
        // 可选的 goToEnd 参数规定是否立即完成当前动画。默认是 false。
    },function(){
        $(this).children("div").stop(true,true).slideUp(1)
    })
})
// hover() 方法规定当鼠标指针悬停在被选元素上时要运行的两个函数。
// jQuery 1.7 版本前该方法触发 mouseenter 和 mouseleave 事件。
// jQuery 1.8 版本后该方法触发 mouseover 和 mouseout 事件。这儿给的监听器是1.8效果 但引的版本是1.7.2
// $( selector ).hover( handlerIn, handlerOut )等同于$( selector ).mouseover( handlerIn ).mouseout( handlerOut );
// $(selector).hover(handlerInOut)等同于$( selector ).on( "mouseover mouseout", handlerInOut );

// 一级菜单
$(function (){
    $(".nav ul li").each(function(index){
        $(this).mouseover(function(){
            // 不论鼠标指针穿过被选元素或其子元素，都会触发 mouseover/mouseout 事件。
            // 只有在鼠标指针穿过被选元素时，才会触发 mouseenter/mouseleave 事件。
            $(".nav ul li").removeClass("hover")//先删除所有的a的样式hover
            $(this).addClass("hover")//给对应的a添加样式hover
        })
        $(this).mouseout(function(){
            $(".nav ul li").removeClass("hover")//先删除所有的a的样式hover
        })
    })
})
// $(function (){
    //搜索栏点击显示
    // $("#header .right ul .sh").click(function(){
    //     $("#header .right ul li .search").removeClass("dis")
    // })
    // $("#header .right ul li .search .closs").click(function(){
    //     $("#header .right ul li .search").addClass("dis")
    // })
// })
$(function(){
    $("#header .right ul li:has(.search)").each(function(index){//有搜索栏的li
        // $(selector).each(function(index,element))
        // index - 选择器的 index 位置
        // element - 当前的元素（也可使用 "this" 选择器）
        $("#header .right ul .sh a:eq("+index+")").toggle(function(){
            $("#header .right ul li:eq("+index+")").children(".search").stop(true,true).slideDown(500)
            $("#header .right ul .sh:eq("+index+")").addClass("hover")
        },function(){
            $("#header .right ul li:eq("+index+")").children(".search").stop(true,true).slideUp(500)
            $("#header .right ul .sh:eq("+index+")").removeClass("hover")
        })
        // $("#header .right ul .sh a:eq("+index+")").click(function(){
        //     $("#header .right ul li:eq("+index+")").children(".search").stop(true,true).slideDown(500)
        //     $("#header .right ul .sh:eq("+index+")").addClass("hover")
        // })
        // 经实测会连续触发 且终止之前动画
    })
})

$(function(){
    $("#footer .foot .right:has('ul')").each(function(index){
        $("#footer .foot .right span:eq("+index+")").toggle(function(){
            $("#footer .foot .right:eq("+index+")").children("ul").stop(true,true).slideDown(500)
            $("#footer .foot .right span:eq("+index+")").addClass("hover")
        },function(){
            $("#footer .foot .right:eq("+index+")").children("ul").stop(true,true).slideUp(500)
            $("#footer .foot .right span:eq("+index+")").removeClass("hover")
        })
    })
})

$(function(){
    $("#footer .foot .right ul li a").click(function(){
        // 点击子栏链接后 一个收回效果
        $("#footer .foot .right").children("ul").stop(true,true).slideUp(500)
    })

})

// $(function(){
//     $("#aboutMain .about4 .two .pic2 ul li .posi:has(a)").hover(function(){
//         $(this).children("a").stop(true,true).animate({"right": "0"}, 300);
//     },function(){
//         $(this).children("a").stop(true,true).animate({"right": "-251"}, 300);
//     })
// })
// $(function(){
//     $("#aboutMain .about4 .two .pic3 ul li .posi:has(a)").hover(function(){
//         $(this).children("a").stop(true,true).animate({"right": "0"}, 300);
//     },function(){
//         $(this).children("a").stop(true,true).animate({"right": "-346"}, 300);
//     })
// })

//banner新闻切换点击效果
//还需要做ajax效果
$(function () {
    $("#banner #newsMain .topTitle .right a").each(function () {
        $(this).click(function () {
            $("#banner #newsMain .topTitle .right a").removeClass("hover");
            $(this).addClass("hover");
            return false;
        })
    })
})

//banner7表格切换点击效果
//还需要做ajax效果
$(function () {
    $("#banner7 #zhaopinMain .topTitle .right a").each(function () {
        $(this).click(function () {
            $("#banner7 #zhaopinMain .topTitle .right a").removeClass("hover");
            $(this).addClass("hover");
            return false;
        })
    })
})


// banner8 地图详情切换逻辑
$(function (){
    $("#banner8 #fuuwMain .tab ul li").each(function(index){
        $(this).click(function(){
            $("#banner8 #fuuwMain .tabCen").addClass("dis")//内容栏初始化隐藏
            $("#banner8 #fuuwMain .tabCen:eq("+index+")").removeClass("dis")//指定栏显示
            $("#banner8 #fuuwMain .tab ul li").removeClass("hover")//先删除所有的a的样式hover
            $(this).addClass("hover")//坐标点本身上样式

            // 以下是额外优化的滚动效果
            // $("html").scrollTop($("#banner8 #fuuwMain .tabCen:eq("+index+")").offset().top);
            // console.log($("html").scrollTop());
            $("html").animate({ scrollTop: $("#banner8 #fuuwMain .tabCen:eq("+index+")").offset().top }, 1000);
            console.log($("html").scrollTop());
        })
    })
})
