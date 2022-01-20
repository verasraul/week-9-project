window.onload = function () {
  const body = document.body;

  console.log(body);

  //Create duck function using steps 1-4
  function makeDuck() {
    const duck = document.createElement("div");
    duck.className = "duck";
    document.body.appendChild(duck);

    setInterval(function () {
      duck.classList.toggle("flap");
    }, 250);

    //Move duck function using random
    function moveDuck() {
      duck.style.top = Math.random() * window.innerWidth + "px";
      duck.style.left = Math.random() * window.innerHeight + "px";
    }
  
    //Change their movement every second = 1000ms
    setInterval(moveDuck, 1000);

    duck.addEventListener("click", function () {
      duck.classList.add("shot");
      setTimeout(function () {
        duck.remove();
        checkForWinner();
      }, 1000);
    });
  }

  for (let i = 0; i < 6; i++){
    makeDuck();
  }

  function checkForWinner() {
    if (document.getElementsByClassName("duck").length === 0)
      alert("YOU WIN!");
  }
};