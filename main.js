
var last_x, last_y;

    canvas = document.getElementById('myCanvas');
    ctx = canvas.getContext("2d");
    
    color = "black";
    width_of_line = 2;
    var width= screen.width;
    newwidth= screen.width-70;
    newheight= screen.height-300;

    if(width<992){
        document.getElementById("myCanvas").width=newwidth;
        document.getElementById("myCanvas").height=newheight;
        document.body.style.overflow="hidden";
    }

    canvas.addEventListener("touchstart", my_touchstart);
    
    function my_touchstart(e)
    {
        console.log("touchstart");
        //Addictonal Activity start
        color = document.getElementById("color").value;
        width_of_line = document.getElementById("widthline").value;
        //Addictonal Activity ends

        last_x= e.touches[0].clientX-canvas.offsetLeft;
        last_y= e.touches[0].clientY-canvas.offsetTop;
    }

   

    canvas.addEventListener("touchmove", my_touchmove);
    function my_touchmove(e)
    {
        console.log("touchmove");

         current_touch_x = e.touches[0].clientX - canvas.offsetLeft;
         current_touch_y = e.touches[0].clientY - canvas.offsetTop;

        
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width_of_line;

        console.log("Last position of x and y coordinates = ");
        console.log("x = " + last_x + "y = " + last_y);
        ctx.moveTo(last_x, last_y);

        console.log("Current position of x and y coordinates = ");
        console.log("x  = " + current_touch_x + "y = " + current_touch_y);
        ctx.lineTo(current_touch_x, current_touch_y);
        ctx.stroke();
        

        last_x = current_touch_x; 
        last_y = current_touch_y;
    }
    function clear(){
        ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height);
    }

