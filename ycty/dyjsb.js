launchApp("抖音极速版")
var i = 0
while(i!=10){
    toast("开始点头像")
   var widget = id("avatar").findOne();
   var tx1 = widget.desc()
//获取其中心位置并点击
click(widget.bounds().centerX(), widget.bounds().centerY());
console.log("1.2")
sleep(2000);
var b = id("i+n").findOne();
//获取其中心位置并点击
//click(b.bounds().centerX(), b.bounds().centerY());
console.log(b.text())
if (b.text() < 500){
    var gz=1
}else{
    var gz=2
}
var q = id("i+q").findOne();
console.log(q.text());
var wf = q.text().indexOf("万",-1);
if (wf == -1){
    var fs = q.text()
}else{
    var fs = 10000
}
console.log(fs)
    var ygz = id("hkp").findOne(1000);
if (gz==1 && fs <500 && ygz == null){
        if (id("title").exists()==true){
        toast("私密账号，不关注")
        var widget = id("back_btn").findOne();
        click(widget.bounds().centerX(), widget.bounds().centerY());
    }else{
    toast("账号符合，点击关注")
    var widget = id("hko").findOne();
    click(widget.bounds().centerX(), widget.bounds().centerY());
    sleep(1000)
        i=i+1
    var widget = id("back_btn").findOne();
    click(widget.bounds().centerX(), widget.bounds().centerY());
    }
}else{
    toast("没用账号，退出")
    var widget = id("back_btn").findOne();
    click(widget.bounds().centerX(), widget.bounds().centerY());
}
    
toast("正在寻找下一个")
sleep(1000)
var widget = id("avatar").findOne();
var tx2 = widget.desc()
while(tx2 ==tx1){
    swipe(600,1450,601,1350,500)
    sleep(1000)
    var widget = id("avatar").findOne();
    var tx2 = widget.desc()
}

sleep(2000)
toast(i+"/10")
}

toast("结束")
