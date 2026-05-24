let sum =0
let hasblackjack=false
let isalive=false
let message=""
let messageEl=document.getElementById("message-el")
let sumEl=document.getElementById("sum-el")
//let sumEl=document.querySelector("#sum-el")
let cardEl=document.getElementById("card-el")
let cards=[]

let player={name:"per",chips:145}
playerEl=document.getElementById("player-el")
playerEl.textContent=player.name+":$"+player.chips

function getrandomcard(){
    let randomnumber = Math.floor(Math.random()*13 + 1)
    if (randomnumber > 10) {return 10}
    else if(randomnumber===1) {return 11}
    else{return randomnumber}
}


function startgame(){
    isalive=true
    let firstcard = getrandomcard()
    let secondcard = getrandomcard()

    rendergame()
}


function rendergame(){
cardEl.textContent= "Cards: "
for(let i = 0;i < cards.length;i++){
    cardEl.textContent += cards[i]+" "

}     
sumEl.textContent="sum:"+sum

if(sum<=20){
    message="Do you want to draw a new card?"
}
else if(sum===21){
message="congrats, you got BlackJack!"
    hasblackjack=true
}
else{
   message="you are out of game"
    isalive=false
} 

messageEl.textContent=message
}
function newcard(){
    if(isalive===true && hasblackjack===false){
    let card=getrandomcard()
    sum += card
    cards.push(card)
    rendergame()
}
}
function restart(){
    sum =0
    hasblackjack=false
    isalive=false
    message=""
    messageEl=document.getElementById("message-el")
    sumEl=document.getElementById("sum-el")
    // sumEl=document.querySelector("#sum-el")
    cardEl=document.getElementById("card-el")
    cards=[]
    startgame()
}
