$(function(){
    // 初始化选项卡
    $('#ctiys_div, #ctiys_div1, #ul_city2, #ul_city3, #ul_city5, #ul_city6').hide();
    $('#ul_city1, #ul_city4').show();
    
    // 三角形图片点击
    $('#list_shhi').click(function(){
        $('#ctiys_div').show();
        $('#input_cont').focus()
    })
    $('#list_shhi1').click(function(){
        $('#input_cont1').focus()
        $('#ctiys_div1').show();
    })
    // 点击form1输入框出现地区选择框
    $('#input_cont').focus(function(){
        console.log(0)
        $('#ctiys_div').show();
    }).blur(function(){
        $('#ctiys_div').hide()
    }).click(function(){
        $('#ctiys_div').show();         
    })

    $('#ctiys_div').mouseover(function(){
        $('#input_cont').unbind("blur")
    }).mouseout(function(){
        $('#input_cont').blur(function(){
            $('#ctiys_div').hide()
        })
    }).click(function(){
        $('#input_cont').focus()
    })
    // 表单1省选择
    $('#ul_city1 li').click(function(){
        if($('#xuanhao li').length < 3){
            var ThisText = $(this).text();
            $('#xhspan').before(`<li class='lei'>${ThisText}</li>`)    
            $('.lei').click(function(){       
                $('#ul_city1').show();
                $('#ul_city2, #ul_city3').hide();
                $("#xuanhao li").remove();
                $('#xhspan').show();
            })        
            $('#ul_city1, #ul_city3').hide()
            $('#ul_city2').show();
        }            
    })
    // 表单1市选择
    $('#ul_city2 li').click(function(){    
        if($('#xuanhao li').length < 3){
            var ThisText = $(this).text();
            $('#xhspan').before(`<li class='lei1'>${ThisText}</li>`)    
            $('.lei1').click(function(){              
                $("#xuanhao li").not(':eq(0)').remove();
                $('#xhspan').show();
                $('#ul_city1, #ul_city3').hide();
                $('#ul_city2').show();
            }) 
            $('#ul_city1, #ul_city2').hide();
            $('#ul_city3').show();
        }
    })
    // 表单1区选择
    $('#ul_city3 li').click(function(){   
        var ThisText = $(this).text();       
        if($('#xuanhao li').length < 3){
            $('#xhspan').before(`<li class='lei2'>${ThisText}</li>`)
            $('.lei2').click(function(){              
                $("#xuanhao li").eq(2).remove();
                $('#ul_city1, #ul_city2').hide();
                $('#ul_city3').show();
                $('#xhspan').hide();
            }) 
            var xuanhao = $('#xuanhao li:eq(0)').text()
            var xuanhao1 = $('#xuanhao li:eq(1)').text()
            var xuanhao2 = ThisText
            var textTont = `${xuanhao}-${xuanhao1}-${xuanhao2}`
            $('#input_cont').val(`${textTont}`)
            console.log(0)
            $('#input_cont').unbind("focus")
            $('#ctiys_div, #xhspan').hide();
            $('.div_area').css('opacity',1)
        }else{
            $('#xuanhao li:eq(2)').text(`${ThisText}`)
            var xuanhao = $('#xuanhao li:eq(0)').text()
            var xuanhao1 = $('#xuanhao li:eq(1)').text()
            var textTont = `${xuanhao}-${xuanhao1}-${ThisText}`
            $('#input_cont').val(`${textTont}`)
            $('#ctiys_div, #xhspan').hide();
        }
    })
    // 点击form2输入框出现地区选择框
    $('#input_cont1').focus(function(){
        $('#ctiys_div1').show();
    }).blur(function(){
        $('#ctiys_div1').hide()
    }).click(function(){
        $('#ctiys_div1').show();         
    })

    $('#ctiys_div1').mouseover(function(){
        $('#input_cont1').unbind("blur")
    }).mouseout(function(){
        $('#input_cont1').blur(function(){
            $('#ctiys_div1').hide()
        })
    }).click(function(){
        $('#input_cont1').focus()
    })
    // 表单2省选择
    $('#ul_city4 li').click(function(){
        if($('#xuanhao1 li').length < 3){
            var ThisText = $(this).text();
            $('#xhspan1').before(`<li class='lei4'>${ThisText}</li>`)    
            $('.lei4').click(function(){       
                $('#ul_city4').show();
                $('#ul_city5, #ul_city6').hide();
                $("#xuanhao1 li").remove();
                $('#xhspan1').show();
            })        
            $('#ul_city4, #ul_city6').hide()
            $('#ul_city5').show();
        }            
    })
    // 表单2市选择
    $('#ul_city5 li').click(function(){    
        if($('#xuanhao1 li').length < 3){
            var ThisText = $(this).text();
            $('#xhspan1').before(`<li class='lei5'>${ThisText}</li>`)    
            $('.lei5').click(function(){              
                $("#xuanhao1 li").not(':eq(0)').remove();
                $('#xhspan1').show();
                $('#ul_city4, #ul_city6').hide();
                $('#ul_city5').show();
            }) 
            $('#ul_city4, #ul_city5').hide();
            $('#ul_city6').show();
        }
    })
    // 表单2区选择
    $('#ul_city6 li').click(function(){   
        var ThisText = $(this).text();       
        if($('#xuanhao1 li').length < 3){
            $('#xhspan1').before(`<li class='lei6'>${ThisText}</li>`)
            $('.lei6').click(function(){              
                $("#xuanhao1 li").eq(2).remove();
                $('#ul_city4, #ul_city5').hide();
                $('#ul_city6').show();
                $('#xhspan1').hide();
            }) 
            var xuanhao = $('#xuanhao1 li:eq(0)').text()
            var xuanhao1 = $('#xuanhao1 li:eq(1)').text()
            var xuanhao2 = ThisText
            var textTont = `${xuanhao}-${xuanhao1}-${xuanhao2}`
            $('#input_cont1').val(`${textTont}`)
            console.log(0)
            $('#input_cont1').unbind("focus")
            $('#ctiys_div1, #xhspan1').hide();
            $('.div_area1').css('opacity',1)
        }else{
            $('#xuanhao1 li:eq(2)').text(`${ThisText}`)
            var xuanhao = $('#xuanhao1 li:eq(0)').text()
            var xuanhao1 = $('#xuanhao1 li:eq(1)').text()
            var textTont = `${xuanhao}-${xuanhao1}-${ThisText}`
            $('#input_cont1').val(`${textTont}`)
            $('#ctiys_div1, #xhspan1').hide();
        }
    })
})
