let randomNum = Math.floor(Math.random() * 100 + 1);
let guessHx = [];
let resultBox = document.getElementById('result');
let guessbox = document.getElementById('guess-hx');
// console.log(randomNum)

function checkGuess(){
    let guessInput = document.getElementById('input-box');
    let guess = guessInput.value * 1; 
    guessHx.push(guess);
    guessbox.innerText = guessHx;

    let h2 = document.createElement('h2');
    // let existingElement = resultBox.querySelector("h2");
    resultBox.appendChild(h2);

    if (guess === randomNum){
  
      let img = document.createElement('img');
      img.src = "https://thumbs.dreamstime.com/z/cartoon-office-celebration-15570488.jpg?w=768";

      resultBox.children[0].innerText = 'Correct!';
      resultBox.appendChild(img);
      guessbox.innerText = "";

    } else if (guess > randomNum){
      resultBox.children[0].innerText = 'Too High!';
    } else {
      resultBox.children[0].innerText = 'Too Low!';
    }
    guessInput.value = '';
}
