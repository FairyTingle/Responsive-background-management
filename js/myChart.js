var lineChartData = {
    //X坐标数据
    labels : ["周一","周二","周三","周四","周五","周六","周末"],
    datasets : [
        {
            //统计表的背景颜色
            fillColor : "rgba(255, 127, 80,0.5)",
            //统计表描线颜色
            strokeColor :"#000",
            //点的颜色
            pointColor : "#FFF",
            //点边框的颜色
            pointStrokeColor : "#000",
            //鼠标触发时点的颜色
            pointHighlightFill : "#DC143C",
            //鼠标触发时点边框的颜色
            pointHighlightStroke : "#000",
            //Y坐标数据
            data : [674,962,600,800,400,1600,500]
        },{
            //统计表的背景颜色
            fillColor : "rgba(0, 128, 128,0.5)",
            //统计表描线颜色
            strokeColor :"#000",
            //点的颜色
            pointColor : "#FFF",
            //点边框的颜色
            pointStrokeColor : "#000",
            //鼠标触发时点的颜色
            pointHighlightFill : "#DC143C",
            //鼠标触发时点边框的颜色
            pointHighlightStroke : "#000",
            //Y坐标数据
            data : [300,555,655,714,899,905,1000]
        }
        ,{
            //统计表的背景颜色
            fillColor : "rgba(255, 20, 147,0.5)",
            //统计表描线颜色
            strokeColor :"#000",
            //点的颜色
            pointColor : "#FFF",
            //点边框的颜色
            pointStrokeColor : "#000",
            //鼠标触发时点的颜色
            pointHighlightFill : "#DC143C",
            //鼠标触发时点边框的颜色
            pointHighlightStroke : "#000",
            //Y坐标数据
            data : [600,300,700,714,900,400,200]
        }
    ]

}
window.onload = function(){
    var ctx1 = document.getElementById("canvas1").getContext("2d");/*获得画布创建画笔*/
    window.myLine = new Chart(ctx1).Line(lineChartData, {
        responsive: true
    });
    var ctx3 = document.getElementById("canvas3").getContext("2d");/*获得画布创建画笔*/
    var bingtu = new Chart(ctx3);
    bingtu.Radar(lineChartData
    );
}