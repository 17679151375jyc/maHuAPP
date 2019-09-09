var ctx = document.getElementById('Mycanvas').getContext('2d');
var Hei = document.documentElement.clientHeight;
$('#form2').hide();//默认社区表单隐藏
// 文字swiper滑块
var mySwiper2 = new Swiper('#swiper2', {
    speed:800,
    direction:'vertical',    
    mousewheel: true,//是否支持滚轮
})
// 表单背景滑块
var mySwiper3 = new Swiper('#swiper3', {
    speed:800,
    direction:'vertical',
})

var mySwiper1 = new Swiper('#swiper1', {
    // autoplay: {
    //     autoplay: true,//自动轮播
    //     delay:4000,//4s后切换
    //     disableOnInteraction: true,//当用户操作切换后停止自动切换
    // },
    speed:800,//切换用时0.8s
    direction: 'vertical',//纵向滑动（默认horizontal横向）
    mousewheel: true,//是否支持滚轮
    // 分页器
    pagination:{
        el: '.swiper-pagination',
        clickable :true,
        bulletActiveClass: 'my-bullet-active',
    },
    controller: {
        control: [mySwiper2, mySwiper3], //控制mySwiper2及mySwiper3
    },
    on: {
        // slideChangeTransitionEnd: function(){//swiper切换结束是执行
        //     let index = this.activeIndex;
        // },
        slideChangeTransitionStart: function abc(){//切换时
            // 做对应模块的表单显示隐藏及canvas颜色
            switch(this.activeIndex){
                case 0:
                    Color ='#2E7AE6'                    
                    $('#form1').show()
                    $('#form2').hide()
                    break;
                case 1:
                    Color ='#2E2EE6'                
                    $('#form2').show()
                    $('#form1').hide()
                    $('#ctiys_div').hide();
                    break;
                case 2:
                    Color ='#6B2EE6'                    
                    $('#form1').show()                
                    $('#form2').hide()
                    break;
            }   
            window.Color = Color;//局部变全局
            // 滚动时清除canvas并重新画
            ctx.clearRect(0, 0, 860, Hei)
            ctx.beginPath();
            ctx.moveTo(0, 0);
            ctx.lineTo(0, Hei);
            ctx.lineTo(620, Hei);
            ctx.lineTo(860, 0);
            ctx.fillStyle = window.Color;
            ctx.fill() ;
        },
      },  
})
mySwiper2.controller.control = [mySwiper1, mySwiper2]