$(function(){
    
    // 做勾选框
    $('#check_ul>li').click(function(){
        var span1 = $(this).children("span:first");
        if( span1.is('.span_gou') ){
            span1.removeClass('span_gou')
        }else{
            span1.addClass('span_gou');
        }
    })
})