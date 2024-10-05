var time=document.getElementsByTagName('h1')[0];
var minute=0, second=0, tsag=0, doli=0;
var ol=document.getElementsByTagName('ol')[0];
console.log(minute, second, tsag)
function watch(){
    doli++;
    if(doli>=100){
        second++;
        doli=0;
        if(second>=60){
            minute++;
            second=0;
            if(minute>59){
                tsag++;
                minute=0;
            }
        }
    }
    var s = second<10 ? "0"+second : second;
    var m = minute<10 ? "0"+minute: minute;
    var t = tsag<10 ? "0"+tsag: tsag;
    var d = doli<10 ? "0"+doli: doli;
    time.innerText = t+":"+m+":"+s+":"+d;
}
var a;
function starts(){
    a=setInterval(watch, 10);
    document.getElementsByTagName('button')[0].disabled=true;
    document.getElementsByTagName('button')[1].disabled=false;
}
function stops(){
    document.getElementsByTagName('button')[0].disabled=false;
    document.getElementsByTagName('button')[1].disabled=true;
    clearInterval(a)
}
function res(){
    document.getElementsByTagName('button')[0].disabled=false;
    document.getElementsByTagName('button')[1].disabled=false;
    var minute=0; 
    var second=0; 
    var tsag=0; 
    var doli=0;
    clearInterval(a);
    time.innerText ="00:00:00:00";
    ol.innerText="";
}
function lab(){
    // document.createElement('tagName');-> shine tag uusgene
    var li = document.createElement('li');
    console.log(li);
    li.innerText=time.innerText;
    // tagName.append(tagName);
    ol.append(li);
}