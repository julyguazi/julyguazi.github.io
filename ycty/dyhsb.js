launchApp("抖音火山版")
var i = 0
while(i!=10){
    toast("开始点名字")
   var widget = id("bja").findOne();
   var tx1 = widget.text()
//获取名字
click(widget.bounds().centerX(), widget.bounds().centerY());
//点击
console.log("1.0")
sleep(2000);
var b = id("i4r").findOne();
//i4r为关注控件
console.log(b.text())
if (b.text() < 500){
    var gz=1
}else{
    var gz=2
}
var q = id("i4n").findOne();
//i4n为粉丝控件
console.log(q.text());
var wf = q.text().indexOf("万",-1);
if (wf == -1){
    var fs = q.text()
}else{
    var fs = 10000
}
console.log(fs)
if (gz==1 && fs <500){
    var title = id("title").findOne();
    if (title.text() == "这是私密账号"){
        toast("私密账号，不关注")
        var widget = id("di9").findOne();
        click(widget.bounds().centerX(), widget.bounds().centerY());
    }else{
        toast("账号符合，点击关注")
    sleep(1000)
    var i=i+1
    var widget = id("hv8").findOne();
    //hv8为关注按钮
    click(widget.bounds().centerX(), widget.bounds().centerY());
    //点击关注按钮
    sleep(2000)
    var widget = id("hv9").findOne();
    //hv9为发消息按钮
    click(widget.bounds().centerX(), widget.bounds().centerY());
    //点击发消息
    sleep(2000)
    //等待两秒
        var widget = id("brs").findOne();
        //发消息编辑框
        click(widget.bounds().centerX(), widget.bounds().centerY());
        //点击
        setText("你好啊,最近谷票收益怎么样？")
        //设置发送内容
        sleep(1000)
        //等待一秒
        var widget = id("gbk").findOne();
        //gbk发送控件
        click(widget.bounds().centerX(), widget.bounds().centerY());
        //点击发送
        sleep(1000)
        //等待一秒
        var widget = id("ah").findOne();
        //退回控件
        click(widget.bounds().centerX(), widget.bounds().centerY());
        //点击退回
        sleep(1000)
        var widget = id("di9").findOne();
        //返回控件
        click(widget.bounds().centerX(), widget.bounds().centerY());
        //退出
    }
    }else{
        var widget = id("di9").findOne();
        click(widget.bounds().centerX(), widget.bounds().centerY());
        //不符合直接退出
    }
    
toast("正在寻找下一个")
sleep(1000)
var widget = id("bja").findOne();
var tx2 = widget.text()
while(tx2 ==tx1){
    swipe(600,1450,601,1400,500)
    sleep(2000)
    var widget = id("bja").findOne();
    var tx2 = widget.text()
}

sleep(2000)
toast(i+"/10")
}

toast("结束")
