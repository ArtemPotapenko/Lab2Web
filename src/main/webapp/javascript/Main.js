let x=null;
let y=null;
let r=null;
const width = 700;
const height = 700;
const distanceDoteLine=30;
const lenDoteLine=20
const arrowSize=30;
function getColorRed(i, el){
    document.querySelectorAll(".point_"+el).forEach(x=>x.style.color="black");
    const id=i+el;
    document.getElementById(id).style.cssText=
        "color: red";
}

function clearForm(){
    document.querySelectorAll(".point_x").forEach(x=>x.style.color="black");
    document.getElementById("y").value="";
    document.getElementById("r").value="";
    x=null
    let fail=document.getElementById("fail");
    fail.innerHTML="";
    draw(0)
}
function choiceXValue(value){
    getColorRed(value,"x");
    x=value
    document.getElementById("x_value").replaceWith(createInput("x",x));
}
function send(){

    let startTime=performance.now();
    let s="";

    y=document.getElementById("y").value;
    y=y.replace(",",".");
    r=document.getElementById("r").value;

    if (x==null||x===""){
        s+="<br> Выберете X"

    }
    if (y===""|| isNaN(y)||y<=-5||y>=3){
        s=s+"<br> Неверный ввод Y";

    }if (r==="" ){
        s=s+"<br> Выберете R";

    }    if (s!==""){

        let fail=document.getElementById("fail");
        fail.innerHTML=s}else{


        let fail=document.getElementById("fail");
        fail.innerHTML=s
        document.getElementById("point_form").submit();

    }}
function createInput(name,value){
        let input = document.createElement("input");
        input.type="hidden";
        input.id = name+"_value";
        input.value=value;
        input.name=name;
        return input;
}



function drawGraphic(radius,ctx){
    ctx.beginPath();
    ctx.fillStyle="blue";
    ctx.lineWidth=10;
    ctx.moveTo(width/2,height/2 - distanceDoteLine * radius)
    ctx.lineTo(width/2,height/2)
    ctx.lineTo(width/2+radius*2*distanceDoteLine,height/2)
    ctx.lineTo(width/2,height/2 + radius*2*distanceDoteLine)
    ctx.lineTo(width/2-radius*2*distanceDoteLine,height/2 + radius*2*distanceDoteLine)
    ctx.lineTo(width/2 - radius*2*distanceDoteLine,height/2)
    ctx.stroke()
    ctx.arc(width/2,height/2,radius*distanceDoteLine,Math.PI,-Math.PI/2)
    ctx.stroke()
    ctx.fill()
}
function drawLinesXY(ctx){
    ctx.beginPath();
    ctx.moveTo(width/2,0);
    ctx.lineTo(width/2,height);
    ctx.stroke()
    ctx.moveTo(0,height/2);
    ctx.lineTo(width,height/2)
    ctx.stroke()
    ctx.moveTo(width/2 - arrowSize,arrowSize);
    ctx.lineTo(width/2,0);
    ctx.stroke();
    ctx.moveTo(width/2 + arrowSize,arrowSize)
    ctx.lineTo(width/2,0)
    ctx.stroke()
    ctx.moveTo(width-arrowSize,height/2 - arrowSize)
    ctx.lineTo(width,height/2)
    ctx.moveTo(width-arrowSize,height/2 + arrowSize)
    ctx.lineTo(width,height/2)
    ctx.stroke();
    ctx.beginPath()
    ctx.font="bold 40px sans-serif"
    ctx.fillStyle="black"
    ctx.fillText("x",19*width/20,height/2 + arrowSize)
    ctx.fillText("y",width/2,height/20)
    ctx.fill()
    for (let i=-10; i<=10 ; i++){
        drawLineXNumbers(i,ctx)
    }
    for (let i=-10;i<0;i++){
        drawLineYNumbers(i,ctx)
    }
    for (let i=1;i<=10;i++){
        drawLineYNumbers(i,ctx)
    }
    ctx.stroke();
}
function drawLineXNumbers(number, ctx){
    ctx.moveTo(width/2+number*distanceDoteLine,height/2+lenDoteLine/2);
    ctx.lineTo(width/2+number*distanceDoteLine,height/2 -lenDoteLine/2);
    ctx.stroke()
    ctx.font="bold 11pt sans-serif"
    ctx.fillText((number/2).toString(),width/2+number*distanceDoteLine,height/2 + 3*lenDoteLine/4)
    ctx.fill();
}
function drawLineYNumbers(number, ctx){
    ctx.moveTo(width/2 +lenDoteLine/2,height/2-number*distanceDoteLine);
    ctx.lineTo(width/2 -lenDoteLine/2,height/2-number*distanceDoteLine);
    ctx.stroke()
    ctx.font="bold 11pt sans-serif"
    ctx.fillText((number/2).toString(),width/2 + 3*lenDoteLine/4,height/2-number*distanceDoteLine)
    ctx.fill()
}

function draw(radius){
    r=radius;
    drawAll(radius);
    drawAll(radius)
}
function drawAll(radius){
    let canvas = document.getElementById("canvas");
    let ctx= canvas.getContext("2d");
    ctx.beginPath()
    ctx.clearRect(0,0,canvas.width,canvas.height);
    ctx.stroke();

    ctx.lineWidth=1;
    drawLinesXY(ctx);
    if(radius!==""){
        drawGraphic(radius,ctx)}}

function checkPoint(event){
    if (r===0 || r===null || r==="" ){
        let fail=document.getElementById("fail");
        fail.innerHTML="Выберете R";

    }else {
        let fail=document.getElementById("fail");
        fail.innerHTML="";
        let x = (event.offsetX - width / 2) / 2 / distanceDoteLine
        let y = -(event.offsetY - height / 2) / 2 / distanceDoteLine

        document.getElementById("x_value").replaceWith(createInput("x",x));
        document.getElementById("y").innerHTML=y;
        document.getElementById("point_form").submit();


    }


}
function drawPoint(x,y,color){
    let canvas = document.getElementById("canvas");
    let ctx= canvas.getContext("2d");
    ctx.beginPath();
    ctx.fillStyle=color;
    let XCanvas = x*2*distanceDoteLine+width/2;
    let YCanvas=height/2 - y * 2 * distanceDoteLine;
    ctx.arc(XCanvas,YCanvas,5,0,2*Math.PI);
    ctx.fill();
}