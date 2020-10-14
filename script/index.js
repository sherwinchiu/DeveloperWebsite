var num = 0;
var background_pics = ['/pic/background0.png', '/pic/background1.png', '/pic/background2.png'];
var current_background = background_pics[0];
function changePicture(n){
    current_background = background_pics[n];
    document.getElementById("home-background").setAttribute("style", "background: url(current_background)"); 
}
function checkNum(n){
    if (num < 0){
        num = 2;
    } else if (num > 2){
        num = 0;
    } 
    return num;
}
$("left-button").click(function(){ 
    num--;
    num = checkNum(num);
    changePicture(num);
});
$("right-button").click(function(){ 
    num++;
    num = checkNum(num);
    changePicture(num);
});

