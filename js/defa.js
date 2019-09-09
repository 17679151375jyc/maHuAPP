$(function(){
    function test(){
        if (window.ActiveXObject || "ActiveXObject" in window){
            $('.ctiys_div').focus(function(){
                // $('#input_cont').css('display', 'block');
                alert(0)
            })
        }else{    
             
        }
    }
    test()
})