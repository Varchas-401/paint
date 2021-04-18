var canvas = document.getElementById("myCanvas")
var ctx = canvas.getContext("2d")
var mousevent = "empty"
var lastpositionX
var lastpositionY
var colour = "Red"
var widthofline = 7
var radiusofcircle = 5
canvas.addEventListener("mousedown", my_mousedown);

function my_mousedown(e) {
    colour = document.getElementById("colour").value;
    widthofline = document.getElementById("widthofline").value;
    radiusofcircle = document.getElementById("radiusofcircle").value;
    mousevent = "mousedown";
}







canvas.addEventListener("mousemove", my_mousemove);

function my_mousemove(e) {
    current_position_of_mouse_x = e.clientX - canvas.offsetLeft;
    current_position_of_mouse_y = e.clientY - canvas.offsetTop;


    if (mousevent == "mousedown") {
        ctx.beginPath();
        ctx.strokeStyle = colour;
        ctx.lineWidth = widthofline;
        ctx.arc(current_position_of_mouse_x, current_position_of_mouse_y, radiusofcircle, 0, 2 * Math.PI);





        console.log("Last position of x and y coordinates=");
        console.log("x =" + lastpositionX + "y =" + lastpositionY);












        console.log("Current position of x and y coordinates=");
        console.log("x =" + current_position_of_mouse_x + "y =" + current_position_of_mouse_y);

        ctx.stroke();
    }




}