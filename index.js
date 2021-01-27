

for(var i = 0 ;i<document.querySelectorAll("button").length;i++){
document.querySelectorAll("button")[i].addEventListener("click", function(){

   var btnInr = this.innerHTML;
   soundplay(btnInr);
   btnAnimantion(btnInr);
  

});
}

document.addEventListener("keypress",function(event){
soundplay(event.key);
btnAnimantion(event.key);

});

function soundplay(key){

    switch (key) {
        case "w":
         var audio =  new Audio("sounds/tom-1.mp3");
         audio.play(); 
         
         case "a":
             var audio =  new Audio("sounds/tom-2.mp3");
             audio.play();
             break;
         
         case "s":
             var audio =  new Audio("sounds/tom-3.mp3");
             audio.play();
             break;
 
         case "d":
             var audio =  new Audio("sounds/tom-4.mp3");
             audio.play();
             break;
         
         case "j":
             var audio =  new Audio("sounds/snare.mp3");
             audio.play(); 
             break;
             
         case "k":
             var audio =  new Audio("sounds/crash.mp3");
             audio.play();
             break;
             
         case "l":
             var audio =  new Audio("sounds/kick-bass.mp3");
             audio.play();
             break;
 
         default:
         break;
    }

}
function btnAnimantion(key){
    var curKey = document.querySelector("."+ key);
    curKey.classList.add("pressed");

    setTimeout(function(){
        curKey.classList.remove("pressed")},100)};




