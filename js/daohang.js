$(function(){
    // 做li:hover黑色透明背景及点击a下方出现蓝色横线
    $('#daohangUL li>a').click(function(){
        $(this).addClass('daohangClick').parent().siblings().children('a').removeClass('daohangClick')
    }).mouseover(function(){
        $(this).parent().addClass('liHover')
        var ind = $(this).parent().index();
        $('#dao_hover_ul li').eq(ind).show();  
    }).mouseout(function(){
        var ind = $(this).parent().index();
        $('#dao_hover_ul li').eq(ind).hide()
        $(this).parent().removeClass('liHover')
    })

    // 做导航框的下拉框
    $('#dao_hover_ul li').mouseover(function(){
        $(this).show()
        var ind = $(this).index()
        $('#daohangUL li').eq(ind).addClass('liHover')
    }).mouseout(function(){
        $(this).hide()
        var ind = $(this).index()
        $('#daohangUL li').eq(ind).removeClass('liHover')
    })
    // 做canvas高度变化
    $(window).resize(function () {          //当浏览器大小变化时        
        var newHei = $(document).height()       //浏览器时下窗口文档的高度        
        ctx.clearRect(0, 0, 860, Hei)
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.lineTo(0, newHei);
        ctx.lineTo(620, newHei);
        ctx.lineTo(860, 0);
        ctx.fillStyle = window.Color;
        ctx.fill() ;
        abc()

    });

    // 页面加载时 判断页面大小页面
    function abc(){
        var Width = $(window).width();
        if(Width >= 1304 && Width <= 1558){
            $('.daohang, .dao_hover').css('left','8%')
        }
        if(Width < 1304){
            $('.daohang, .dao_hover').css('left','0%')
        }
        if( Width>1558){
            $('.daohang, .dao_hover').css('left','23%')
        }
    }
    abc()

})