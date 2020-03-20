//*********************判断闰年*****************//
function leapYear(year){
    if(year >1000 && typeof(year)=="number"){
       if(year%4==0 && year%100!=0 || year%400==0){
                            return 1;
                        }
                        else{
                            return 2;
                        }
    }
    else{
            return 3;
    }
}

//********************计算数组数字总和*************//
function getSum(arr){
    var sum = 0;
    for(var i=0;i<arr.length;i++){
        sum +=arr[i];
    }
    return sum;
}

//************偶数、奇数分数和**********************//
function getFenshuSum(n){
var sum=0;
    if(n%2==0){
        for(i=2;i<=n;i+=2)
            sum+=1/i;
    }
    else if(n%2==1){
        for(i=1;i<=n;i+=2)
            sum+=1/i;
    }
return sum;
}

//***************获取一定范围内的随机数*************//
function getRandNum(min,max){
var randNum=parseInt(Math.random()*(max-min+1)+min);
return randNum;
}

//***************获取随机色****************************//
function getRandColor(){
var r = getRandNum(0,255);
var g = getRandNum(0,255);
var b = getRandNum(0,255);
return 'rgb'+'('+r+','+g+','+b+')';
}

//*********************阶乘*********************//
function getJiecheng(n){
    if(n==1||n==0) return 1;
    return n*getJiecheng(--n);
}

//*********************数列*********************//
function getShulie(n){
   if(n==1 || n == 2){
            return 1;
        }
        return getShulie(n-1) +getShulie(n-2);
    
}

//*******************随机生成一定范围内数组***************//
function getArr(min,max,leng){
var arr=[];
for(var i =0;i<leng;i++){
    arr[i] = getRandNum(min,max);
}
return arr;
}

//****************截取数组字符**************************//
//实现防止相同的值的索引互相覆盖。//
//可以用第一次得到字符串或数组，再调用一次函数。要注意第二次找不索引是返回-1，会切掉最后一个值或返回空//
//如果只知道要截取包含的值内的内容，可以使用push()和unshift()把切掉的值补上。
function getSlice(att,attr,item){
    //att 被切割的值，attr切割起始点，item切割终点
    //在传过来的实参已经加了引号，使用索引就不要加引号，否则会默认为需要索引的对象为括号内容，索引方法没有找到返回-1。
    //截取字符串
    if(typeof att =="string"){
        var idx1 = att.indexOf(attr)+1;
        var idx2 = att.lastIndexOf(item);
        var str =att.slice(idx1,idx2);
        return str;
    }

    //截取数组
    else if(Array.isArray(att)){
        for(var i= 0 ;i<att.length;i++){
            if(att[i]===attr){
                var idx1 = i+1;
                break;
            }                
        }
        for(var i=att.length;i>0;i--){
            if(att[i]===item){
                var idx2 =i;
                break;
            }
        }
        var  arr1 =att.slice(idx1,idx2);
        return arr1;
    }    
}


//**********************冒泡排序法********************//
function bubbling(arr){
     for(var i=0;i<arr.length-1;i++){
        for(var j=0;j<arr.length-1-i;j++){
            if(arr[j] > arr[j+1]){
                var current = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = current;
            }
        }
    }
    return arr;
}

//********************选择排序法**********************//
function selPaixu(arr){
for(var i=0;i<arr.length-1;i++){
        for(var j=i+1;j<arr.length;j++){
            if(arr[i]>arr[j]){
                var current = arr[i];
                arr[i] = arr[j];
                arr[j] = current;
            }
        }
    }
    return arr;
}

//**********************快速排序**********************//
//如果出现多个数值一样的会被切割掉
function quickSort(arr){
if(arr.length <= 1){
            return arr;
        }
        //1. 找出数组中间位置元素
        var cIdx = parseInt(arr.length/2);
        // 2. 通过splice(),改变原数组(去掉了中间那个数)。返回值为被删除的元素
        var cItem = arr.splice(cIdx,1);
        // 3.声明两个数组
        var arrGt = [];
        var arrLt = [];
        
        // 4.遍历arr,大于cItem的值，放在arrGt。小于的话放在arrLt
        for(var i=0;i<arr.length;i++){
            if(arr[i]>cItem[0]){
                arrGt.push(arr[i]);
            }else if(arr[i] < cItem[0]){
                arrLt.push(arr[i]);
            }
        }
        return quickSort(arrLt).concat(cItem,quickSort(arrGt));
}

//****************随机生成数字验证码********************//
function NumCode(num){
    var randomMa =[];
    for(var i = 0;i<num;i++){
        randomMa.push(parseInt(Math.random()*10));
    }  
    return randomMa.join("");
}

//*****************随机生成大写字母字符串***************//
//String.fromCharCode(94) //编码转换成字符String.fromCharCode
function bigLetter(num){
var randomMa = [];
for(var i = 0; i<num;i++){
    randomMa.push(String.fromCharCode(parseInt(Math.random()*(90-65+1)+65)));
}
return randomMa.join("");
}

//*****************随机生成小写字母字符串***************//
function smallLetter(num){
var randomMa = [];
for(var i=0;i<num;i++){
    randomMa.push(String.fromCharCode(parseInt(Math.random()*(122-97+1)+97)));
}
return randomMa.join("");
}
//*****************随机生成数字大小写字母字符串***************//
function randCode(num){
var randomMa = [];
var str ="QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm0987654321"
for(var i = 0;i<num;i++){
    idx = parseInt(Math.random()*62);
    randomMa.push(str[idx]);
}
return randomMa.join("");
}


//身份证号合法性验证
//支持15位和18位身份证号
//支持地址编码、出生日期、校验位验证
function IdentityCodeValid(code) {
    var city={11:"北京",12:"天津",13:"河北",14:"山西",15:"内蒙古",21:"辽宁",22:"吉林",23:"黑龙江 ",31:"上海",32:"江苏",33:"浙江",34:"安徽",35:"福建",36:"江西",37:"山东",41:"河南",42:"湖北 ",43:"湖南",44:"广东",45:"广西",46:"海南",50:"重庆",51:"四川",52:"贵州",53:"云南",54:"西藏 ",61:"陕西",62:"甘肃",63:"青海",64:"宁夏",65:"新疆",71:"台湾",81:"香港",82:"澳门",91:"国外 "};
    var tip = "";
    var pass= true;
    //验证身份证格式（6个地区编码，8位出生日期，3位顺序号，1位校验位）
    if(!code || !/^\d{6}(18|19|20)?\d{2}(0[1-9]|1[12])(0[1-9]|[12]\d|3[01])\d{3}(\d|X)$/i.test(code)){
        tip = "身份证号格式错误";
        pass = false;
    }else if(!city[code.substr(0,2)]){
        tip = "地址编码错误";
        pass = false;
    }else{
        //18位身份证需要验证最后一位校验位
        if(code.length == 18){
            code = code.split('');
            //∑(ai×Wi)(mod 11)
            //加权因子
            var factor = [ 7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2 ];
            //校验位
            var parity = [ 1, 0, 'X', 9, 8, 7, 6, 5, 4, 3, 2 ];
            var sum = 0;
            var ai = 0;
            var wi = 0;
            for (var i = 0; i < 17; i++)
            {
                ai = code[i];
                wi = factor[i];
                sum += ai * wi;
            }
            var last = parity[sum % 11];
            if(parity[sum % 11] != code[17]){
                tip = "校验位错误";
                pass =false;
            }
        }
    }
    return pass;
}

// 缓冲返回顶部
// target 返回目标顶部值
// el 元素，
// judgeHide 判断返回顶部后，元素el是否隐藏
function myReturnTop(target,el,judgeHide){
    var targetTop = target?target:0;
    var topTimer = setInterval(()=>{
        var currentTop = window.scrollY;
        var speed = Math.floor((targetTop-currentTop)/10);
        currentTop += speed;
        if(currentTop <=targetTop){
            currentTop = targetTop;
            if(judgeHide){
                el.style.display = 'none'
            }
            clearInterval(topTimer);
        }
        window.scrollTo(targetTop,currentTop);
    }, 30)
}


/* 缓冲运动，透明度更改，向上向下运动
*    备注: 事件开启定时器之前，一定要记得先清除已存在的定时器。
*      (0) 定时获取每个时间段的当前值  px deg   
*      (1) 动态获取速度,一般都会变成整数再运算。
*          * 若速度值为负值，Math.floor();若速度值为正值，Math.ceil()
*      (2) 把当前值加上速度进行改变
*      (3) 将改变后的值赋值给元素的样式
*  2.判断改变后的当前值大于目标值。判断肯定要放在赋值样式前。
*  3.透明度，在算速度前，对当前值、目标值(定时器外面)都乘于100。在赋值样式前，对当前值除以100
* el元素，obj对象{属性：目标值}，time定时器时间间隔 myAnimate(ul,{top:target,width:700},30); animate(ball,{opacity:1},30);
* 改进1：定时器的名字根据传进来的attr命名，防止多层定时器嵌套冲突
* 改进2:传进来一个对象{attr:target;}拿到attr及target值
***注意for循环是一个快速的过程，for循环里面有定时器。for循环早已经跑完了，才进入第一次定时器。所以此时传入定时器的attr是对象最后一个属性。
****解决方案：1、利用let的块级作用域
************2、利用闭包的特性，通过函数传参，存储起来每一次的attr
*改进3：允许用户咋动画完成后，实现一些功能。使用回调函数。记得封装者只负责执行即可。
*改进4：：在所有属性动画完毕后，才执行fn。用count变量存放一共要执行多少个attr的动画。当每次清除定时器，count--。在count--后判断，若count的值为0，说明动画完毕，再执行fn（）
**/
function myAnimate(ele,obj,time,fn){
    var count = 0;
    for(let attr in obj){
      console.log(attr)
        count++;
        let target = obj[attr];
        let timer = attr + "Timer"; //ele.widthTimer   ele.heightTimer;
        clearInterval(ele[timer]);
        target = attr == "opacity"? target*100 : target;
        ele[timer] = setInterval(()=>{
            var current = getComputedStyle(ele)[attr];
            // 提取单位,若存在单位，得到数组。若不存在单位，得到null
            var unit = current.match(/[a-z]+$/);
            unit = unit ? unit[0] : "";
            current = parseFloat(current);
            current = attr == "opacity"? current*100 : current;
            var speed = (target-current)/10; 
            speed = speed>0 ? Math.ceil(speed) : Math.floor(speed);
            current += speed;
            if(current == target){
                clearInterval(ele[timer]);
                count--;
            }
            if(count == 0){
              typeof fn == "function" && fn();
          }
            current = attr == "opacity"? current/100 : current;
            ele.style[attr] = current + unit;
        },time)
    }
}

/*
*
日期转换，毫秒数改为时间日期
*
*/
timeChange =(time,state)=>{
    let unixTimestamp = new Date( time ) ;
    let commonTime = unixTimestamp.toLocaleString();
    if(state==='LL'){
        Date.prototype.toLocaleString = function() {
            let h = this.getHours() < 10 ? '0'+this.getHours() : this.getHours();
            let m = this.getMinutes() < 10 ? '0' + this.getMinutes() : this.getMinutes();
            let s = this.getSeconds() < 10 ? '0' + this.getSeconds() : this.getSeconds();
            return this.getFullYear() + '/' + (this.getMonth() + 1) + '/' + this.getDate() + ' ' + h + ":" + m + ":" + s;
        };
        return commonTime;
    }else if(state ==='Ll'){
            Date.prototype.toLocaleString = function() {
                return this.getFullYear() + '/' + (this.getMonth() + 1) + '/' + this.getDate() + ' ' + this.getHours() + ":" + this.getMinutes() + ":" + this.getSeconds();
            };
            return commonTime;
    }else{
            Date.prototype.toLocaleString = function() {
              return this.getFullYear() + '/' + (this.getMonth() + 1) + '/' + this.getDate() ;
        };
            return commonTime;
    }
}

// 隐藏所有指定的元素
// 隐藏页面上所有`<img>`元素?hide(document.querySelectorAll('img'))
const myHide = (el)=> Array.from(el).forEach(e => (e.style.display = 'none'));

// 如何检查元素是否具有指定的类？
/**
 * 页面DOM里的每个节点上都有一个classList对象,可以使用里面的方法新增、删除、修改节点上的CSS类。
 * 使用classList，程序员还可以用它来判断某个节点是否被赋予了某个CSS类。
 * mySearchClass(document.querySelector('p.special'), 'special') // true
 */
const mySearchClass = (el, className) => el.classList.contains(className)

// 获取当前页面的滚动位置？
// getScrollPosition(); // {x: 0, y: 200}
const getScrollPosition = (el = window) => ({
    x: el.pageXOffset !== undefined ? el.pageXOffset : el.scrollLeft,
    y: el.pageYOffset !== undefined ? el.pageYOffset : el.scrollTop
});

// 平滑滚动到页面顶部
// scrollToTop()
/**
 * window.requestAnimationFrame() 告诉浏览器——你希望执行一个动画，并且要求浏览器在下次重绘之前调用指定的回调函数更新动画。
 * 该方法需要传入一个回调函数作为参数，该回调函数会在浏览器下一次重绘之前执行。
 * requestAnimationFrame：优势：由系统决定回调函数的执行时机。60Hz的刷新频率，那么每次刷新的间隔中会执行一次回调函数，不会引起丢帧，不会卡顿
 */
const scrollToTop = () => {
    const c = document.documentElement.scrollTop || document.body.scrollTop;
    if (c > 0) {
      window.requestAnimationFrame(scrollToTop);
      window.scrollTo(0, c - c / 8);
    }
  }

// 检查父元素是否包含子元素？
/*elementContains(document.querySelector('head'), document.querySelector('title')); 
 **true
*/
/*elementContains(document.querySelector('body'), document.querySelector('body')); 
**false
*/
const elementContains = (parent, child) => parent !== child && parent.contains(child);

// 确定设备是移动设备还是台式机/笔记本电脑？
// myDeviceType(); // "Mobile" or "Desktop" 
const myDeviceType = () =>
  /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
    ? 'Mobile'
    : 'Desktop';

// 创建一个包含当前URL参数的对象？
// myURLParameters(`http://url.com/page?n=Adam&s=Smith&cs=${wqer}`) {n: "Adam", s: "Smith", cs: "lp"}
// myURLParameters('google.com'); // {}
const myURLParameters = url =>
  (url.match(/([^?=&]+)(=([^&]*))/g) || []).reduce(
    (a, v) => ((a[v.slice(0, v.indexOf('='))] = v.slice(v.indexOf('=') + 1)), a),
    {}
  );

//   将一组表单元素转化为对象
// myFormToObject(document.querySelector('#form')); 
const myFormToObject = form =>
  Array.from(new  (form)).reduce(
    (acc, [key, value]) => ({
      ...acc,
      [key]: value
    }),
    {}
  );

//   在等待指定时间后调用提供的函数
//   事列delay(
//     function(text) {
//       console.log(text);
//     },
//     1000,
//     'later'
//   ); 
const myDelay = (fn, wait, ...args) => setTimeout(fn, wait, ...args);

//   获得两个时间之间的差异（以天为单位）
// time: 天=day,时=hour，分=minute，秒second
// dateInitial ，dateFinal输入的时间格式必须一样
// 事列：myGetBetweenTimes("2020/03/5 14:25:2","2020/03/5 15:25:45","second")
// myGetBetweenTimes("2020-03-5 14:25:02","2020-03-5 15:25:45","minute")
const myGetBetweenTimes = (dateInitial, dateFinal,time) =>{
    switch(time){
        case "second":
            return ((new Date(dateFinal)-new Date(dateInitial))/(1000));
        case "minute":
            return Math.ceil((new Date(dateFinal)-new Date(dateInitial))/(1000*60));
        case "hour":
            return Math.ceil((new Date(dateFinal)-new Date(dateInitial))/(1000*3600));
        default:
            return Math.ceil((new Date(dateFinal)-new Date(dateInitial))/(1000*3600*24));
    }
}

// 向传递的URL发出GET请求,不考虑IE，兼容
//事列httpGet(
//     'https://jsonplaceholder.typicode.com/posts/1',
//     console.log
//   ); 
const httpGet = (url, callback, err = console.error) => {
    const request = new XMLHttpRequest();
    request.open('GET', url, true);
    request.onload = () => callback(request.responseText);
    request.onerror = () => err(request);
    request.send();
  };
  
// 对传递的URL发出POST请求
// 事列：
/* const newPost = {
  userId: 1,
  id: 1337,
  title: 'Foo',
  body: 'bar bar bar'
};
const data = JSON.stringify(newPost);
httpPost(
  'https://jsonplaceholder.typicode.com/posts',
  data,
  console.log
); 

{"userId": 1, "id": 1337, "title": "Foo", "body": "bar bar bar"}
*/
const httpPost = (url, data, callback, err = console.error) => {
    const request = new XMLHttpRequest();
    request.open('POST', url, true);
    request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    request.onload = () => callback(request.responseText);
    request.onerror = () => err(request);
    request.send(data);
  };
  

//   确定页面的浏览器选项卡是否聚焦？
const isBrowserTabFocused = () => !document.hidden;

// 将字符串复制到剪贴板
// myCopyToClipboard('蒙多！想去哪就去哪');
const myCopyToClipboard=str =>{
    const el = document.createElement('textarea');
    el.value = str;
    el.setAttribute('readonly', '');
    el.style.position = 'absolute';
    el.style.left = '-9999px';
    document.body.appendChild(el);
    const selected =
      document.getSelection().rangeCount > 0 ? document.getSelection().getRangeAt(0) : false;
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
    if (selected) {
      document.getSelection().removeAllRanges();
      document.getSelection().addRange(selected);
    }
  };

  // cookie的操作：增改、删、查（获取）
var Cookie = {
    setCookie : function(name,value,date,path){
        var str = name+"="+value;
        if(date){
            str += "; expires="+date;
        }
        if(path){
            str += "; path="+path;
        }
        document.cookie = str;
    },
    getCookie : function(name){
        var cookies = document.cookie;//字符串
        if(cookies.length == 0){
            return "";
        }
        if(cookies.length > 0){
            cookiesArr = cookies.split("; ");
            for(var i=0;i<cookiesArr.length;i++){
                var arr = cookiesArr[i].split("=");
                if(arr[0] == name){
                    return arr[1];
                }
            }
        }
    },
    removeCookie : function(name,value,path){
        var d = new Date();
        d.setDate(d.getDate()-1);
        this.setCookie(name,value,d.toUTCString(),path);
    },
    clearCookie: function(){}
}