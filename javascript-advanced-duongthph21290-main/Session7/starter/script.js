'use strict';
let secretNumber = Math.trunc(Math.random() *20)+1;
let score = 20;
// document.querySelector('.number').textContent = secretNumber;
document.querySelector('.check').addEventListener
('click',function(){
    const guess = Number (document.querySelector('.guess').value);
    console.log(guess, typeof guess);
    if(!guess){
        document.querySelector('.message').textContent = "Hãy nhập giá trị !";
    }else if(guess === secretNumber){
        document.querySelector('.message').textContent = "Win";
        document.querySelector('.number').textContent = secretNumber;
        document.querySelector('.body').style.backgroundColor = '#04AA6D';

    }else if(guess > secretNumber){
        if(score >1){
        document.querySelector('.message').textContent = "Cao";
        score--;
        document.querySelector('.score').textContent = score;
        
        }else{
        document.querySelector('.message').textContent = "Lose";
        document.querySelector('.score').textContent = 0;

        }
    }else if(guess < secretNumber){
        if(score >1){
            document.querySelector('.message').textContent = "Thấp";
            score--;
            document.querySelector('.score').textContent = score;
            
            }else{
            document.querySelector('.message').textContent = "Lose";
            document.querySelector('.score').textContent = 0;
    
            }
    }
});
document.querySelector('.again').addEventListener
('click',function(){
    score = 20;
    secretNumber = Math.trunc(Math.random() *20)+1;
    document.querySelector('.message').textContent = "Start game...";
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = "?";
    document.querySelector('.guess').value = "";
    document.querySelector('.body').style.backgroundColor = '#222';

});