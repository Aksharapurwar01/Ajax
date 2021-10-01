setTimeout(function (){
    console.log("timer");

},5000);

function x(y) { //first it excutes
    console.log("x");
    y();
}

x(function y() { //inside x y() is called
    console.log("y");
});