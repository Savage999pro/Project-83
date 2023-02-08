canvas = document.getElementById("myCanvas");
 var ctx = canvas.getContext("2d");
 
 
 
 mouse_Event = "empty";
 console.log(mouse_Event);
 
 var last_Postion_Of_X, last_Position_Of_Y;
 color = "pink";
 width_Of_Line = 5;
 
 
 document.getElementById("width_input").value = width_Of_Line;
 document.getElementById("color_input").value = color;
 
 canvas.addEventListener("mousedown", my_mousedown);
 
 function my_mousedown(e) {
     color = document.getElementById("color_input").value;
     width_Of_Line = document.getElementById("width_input").value;
     mouse_Event = "mousedown";
     console.log(mouse_Event);
 }
 
 
 canvas.addEventListener("mouseup", my_mouseup);
 
 function my_mouseup(e) {
     mouse_Event = "mouseup";
     console.log(mouse_Event);
 }
 
 canvas.addEventListener("mouseleave", my_mouseleave);
 
 function my_mouseleave(e) {
     mouse_Event = "mouseleave";
     console.log(mouse_Event);
 }
 
 
 canvas.addEventListener("mousemove", my_mousemove);
 
 function my_mousemove(e) {
 
     current_Position_Of_X = e.clientX - canvas.offsetLeft;
     current_Position_Of_Y = e.clientY - canvas.offsetTop;
 
     if (mouse_Event == "mousedown") {
         console.log("mousedown + mousemove");
         ctx.beginPath();
         ctx.strokeStyle = color;
         ctx.lineWidth = width_Of_Line;
         ctx.moveTo(last_Postion_Of_X, last_Position_Of_Y);
         ctx.lineTo(current_Position_Of_X, current_Position_Of_Y);
         ctx.stroke();
     }
     last_Position_Of_X = current_Position_Of_X;
     last_Position_Of_Y = current_Position_Of_Y;
 
 }
 canvas.addEventListener("touchstart", touchstart);
    
    function touchstart(e)
    {
        //Addictonal Activity start
        color = document.getElementById("color").value;
        width_of_line = document.getElementById("width_of_line").value;
        //Addictonal Activity ends
last_position_of_x= e.touches[0].clientX - canvas.offsetLeft;
last_position_of_y= e.touches[0].clientY - canvas.offsetTop;
     
    }

   

    
    canvas.addEventListener("touchmove", my_touchmove);
    function my_touchmove(e)
    {

         current_position_of_touch_x = e.touches[0].clientX - canvas.offsetLeft;
         current_position_of_touch_y = e.touches[0].clientY - canvas.offsetTop;

        
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width_Of_Line;

        console.log("Last position of x and y coordinates = ");
        console.log("x = " + last_position_of_x + "y = " + last_position_of_y);
        ctx.moveTo(last_position_of_x, last_position_of_y);

        console.log("Current position of x and y coordinates = ");
        console.log("x  = " + current_position_of_touch_x + "y = " + current_position_of_touch_y);
        ctx.lineTo(current_position_of_touch_x, current_position_of_touch_y);
        ctx.stroke();
        

        last_position_of_x = current_position_of_touch_x; 
        last_position_of_y = current_position_of_touch_y;
    }

