document.getElementById("name").onclick = function(){
document.getElementById("image1").style.visibility = "visible";
}
document.getElementById("age").onclick = function(){
document.getElementById("workout").style.visibility = "hidden";
document.getElementById("image1").style.visibility = "visible";
}

document.getElementById("bored").onclick = function(){
document.getElementById("workout").style.visibility = "visible";
document.getElementById("image1").style.visibility = "hidden";
}
//The ones above handel the visibility of the images
$('button').on("click", () =>{
  console.log("get ready!");
  game.setLife();
}); //^^^Make sure to call the function

$('.bored').on("click", (e) =>{
  console.log(e.target);
  $(e.target).css('opacity', 1);

  const bored = $(e.target)
  game.boredDown(bored);
})

$('.age').on("click", (e) =>{
  console.log(e.target);
  $(e.target).css('opacity', 1);

  const age = $(e.target)
  game.ageDown(age);
})

$('.hunger').on("click", (e) =>{
  console.log(e.target);
  $(e.target).css('opacity', 1);

  const hunger = $(e.target)
  game.hungerDown(hunger);
})


let x = document.getElementById("music");
function playAudio() {
  x.play();
}//^^^The one above is for the music

const game = {
  bored: 0,
  hp: 15,
  age: 0,
  hunger:0,
  setLife(){
    const $bored = $("#bored");
    const $hp = $("#hp");
    const $age = $("#age");
    const $hunger = $("#hunger");
    const interval = setInterval(() =>{
    if (this.hp <= 15 ) {
      this.bored++;
      this.age++;
      this.hunger++;
    }if(this.bored >= 10 || this.age >= 10 || this.hunger >= 10) {
      //Health will keep decreasing until you can drop these statuses below 10
      this.hp--;
    }if(this.hp === 0){
      alert("Oh no! Your pet died")
      clearInterval(interval); //test this out
    }
    //Update the values for the DOM
    $bored.text(`Bored: ${this.bored}`)
    $hp.text(`Health: ${this.hp}`)
    $age.text(`Age: ${this.age}`)
    $hunger.text(`Hunger: ${this.hunger}`)
  }, 1250)
  },
  boredDown(bored){
    this.bored--;
  },
  hungerDown(hunger){
    this.hunger--;
  },
  ageDown(age){
    this.age--;
  }
}
