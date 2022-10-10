launchApp("抖音火山版")
var i = 0
sleep(1000)
while(i!=10){
    toast("开始执行")
   var widget = id("bja").findOne();
   var tx1 = widget.text()
//获取其中心位置并点击
click(widget.bounds().centerX(), widget.bounds().centerY());
//如果用root权限则
console.log("测试")
sleep(2000);
var b = id("i4r").findOne();
//获取其中心位置并点击
//click(b.bounds().centerX(), b.bounds().centerY());
console.log(b.text())
if (b.text() < 500){
    var gz=1
}else{
    var gz=2
}
var q = id("i4n").findOne();
console.log(q.text());
var wf = q.text().indexOf("万",-1);
if (wf == -1){
    var fs = q.text()
}else{
    var fs = 10000
}
console.log(fs)
if (gz==1 && fs <500){
    toast("账号符合，点击关注")
    var i=i+1
    var widget = id("hv8").findOne();
    click(widget.bounds().centerX(), widget.bounds().centerY());
    var widget = id("di9").findOne();
    click(widget.bounds().centerX(), widget.bounds().centerY());
}else{
    toast("没用账号，退出")
    var widget = id("di9").findOne();
    click(widget.bounds().centerX(), widget.bounds().centerY());
}
toast("正在寻找下一个")
sleep(1000)
var widget = id("bja").findOne();
var tx2 = widget.text()
while(tx2 ==tx1){
    swipe(600,1450,601,1390,500)
    sleep(2000)
    var widget = id("bja").findOne();
    var tx2 = widget.text()
}

sleep(2000)
toast(i+"/10")
}

toast("结束")
