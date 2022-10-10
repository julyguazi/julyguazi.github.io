launchApp("抖音极速版")
var i = 0
while(i!=10){
    toast("开始点头像")
   var widget = id("avatar").findOne();
   var tx1 = widget.desc()
//获取其中心位置并点击
click(widget.bounds().centerX(), widget.bounds().centerY());
//如果用root权限则
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
if (gz==1 && fs <500){
    toast("账号符合，点击关注")
    var dyc = id("i+q").findOne();
    sleep(1000)
    var i=i+1
    var widget = id("hko").findOne();
    click(widget.bounds().centerX(), widget.bounds().centerY());
    sleep(1000)
    var widget = id("back_btn").findOne();
    click(widget.bounds().centerX(), widget.bounds().centerY());
    sleep(1000)
    var widget = id("avatar").findOne();
    click(widget.bounds().centerX(), widget.bounds().centerY());
    sleep(3000)
    var dec = id("i+q").findOne();
    if ( dyc.text() == dec.text() ){
        var widget = id("hko").findOne();
        click(widget.bounds().centerX(), widget.bounds().centerY());
        //重新关注
        sleep(1000)
        //等待一秒
        var widget = id("idz").findOne();
        click(widget.bounds().centerX(), widget.bounds().centerY());
        //点击私信
        sleep(1000)
        var widget = id("ge3").findOne();
        click(widget.bounds().centerX(), widget.bounds().centerY());
        setText("你好啊,最近股票收益怎么样？")
        sleep(1000)
        var widget = id("adw").findOne();
        click(widget.bounds().centerX(), widget.bounds().centerY());
        //发送
        sleep(1000)
        var widget = id("fkl").findOne();
        click(widget.bounds().centerX(), widget.bounds().centerY());
        sleep(1000)
        var widget = id("back_btn").findOne();
        click(widget.bounds().centerX(), widget.bounds().centerY());
        //退出
    }else{
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
    swipe(600,1450,601,1400,500)
    sleep(2000)
    var widget = id("avatar").findOne();
    var tx2 = widget.desc()
}

sleep(2000)
toast(i+"/10")
}

toast("结束")
