var inputElement1 = document.getElementById('myInput');

inputElement1.addEventListener('input', (e) => {
  var inputValue1 = e.target.value;
  console.log(inputValue1); // outputs the current input value
  inputElement1.style.fontFamily = 'Lobster,cursive';
  
});
var inputElement2 = document.querySelectorAll('#myInput')[1];

inputElement2.addEventListener('input', (e) => {
  var inputValue2 = e.target.value;
  console.log(inputValue2); // outputs the current input value
  inputElement2.style.fontFamily = 'Lobster,cursive';
});


function playerWin(){
   var player1Name = inputElement1.value;
 var player2Name = inputElement2.value;

if(player1Name=='' || player2Name==''){
    alert("Please enter both player names first!");
    document.querySelector("h1").innerHTML="Lets Play!"
    return;
} 
var len = 6
var randomNumber1 = Math.random();
randomNumber1=randomNumber1*len
randomNumber1=Math.floor(randomNumber1)+1

var images = "dice"+randomNumber1+".png"
var randomImages = "images/"+images
document.querySelector(".img1").setAttribute("src",randomImages)



var randomNumber2 =Math.floor(Math.random()*len)+1
var randomImages1 = "images/dice"+randomNumber2+".png"
document.querySelector(".img2").setAttribute("src",randomImages1)



if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML=(player1Name+" win🚩")
}else if(randomNumber1==randomNumber2){
    document.querySelector("h1").innerHTML="Draw!"
}
else{
    document.querySelector("h1").innerHTML=("🚩"+player2Name+" win")
}

}
// const inputField = document.getElementById('myInput');

// inputField.addEventListener('input', () => {
//   const inputValue4 = inputField.value;
  
//     inputField.style.fontFamily = 'Lobster,cursive'; // Change font family to Arial
//     // inputField.style.fontSize = '15px'; // Change font family to Arial
    

    
 
// });
// const inputField2 = document.querySelectorAll('#myInput')[1];

// inputField.addEventListener('input', () => {
//   const inputValue4 = inputField2.value;
  
//     inputField2.style.fontFamily = 'Lobster,cursive'; // Change font family to Arial
//     // inputField2.style.fontSize = '15px'; // Change font family to Arial
    


    
 
// });



