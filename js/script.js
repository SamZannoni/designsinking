window.addEventListener("load", setup);

var sourcesSounds = ["ok", "ahoui", "ahoui2", "whyhere", "why", "whatif", "userExp", "toux1", "toux2", "thinkOut", "teamWork", "teambuilding", "productivity", "postit", "nowifi", "noproduct", "noproblem", "mouche", "mindmap", "miaou", "meow", "designthinking", "mark", "ludwig", "iwannadie", "experiencinglife", "development", "checkout", "boost"];
var activeDiv;
var compteur = 0;
var compteurZindex = 0;
var compteurOpacity = 1;
var myInterval;

function setup() {


  document.addEventListener('keydown', function(event) {
    var goodmdp = "digitaltools";
    var input = document.getElementById("mdp");

    if(event.keyCode == 13) {
      if (input.value == "digitaltools"){
        // console.log(input.value)
        myInterval = setInterval(lockScreenDisapear, 1000/2);
      }
      else {
        alert('!!!!! WRONG PASSWORD !!!!! TRY AGAIN (っ◔◡◔)っ ♥ ');
      }
    }
  });

  function lockScreenDisapear(){
    compteurOpacity -= 0.1;
    var lockScreen = document.getElementById("lockScreen");
    lockScreen.style.opacity = compteurOpacity;
    moveAllStars();
    if (compteurOpacity <= 0){
      clearInterval(myInterval);
    }
  }



  var imgs = document.getElementsByClassName("imgs");

  for (i = 0; i < imgs.length; i++) {
    imgs[i].addEventListener("mousedown", DragStartNow)
    imgs[i].style.left = random(0, 10000) + "px";
    imgs[i].style.top = random(0, 10000) + "px";
    imgs[i].customIndex = i;
    imgs[i].ondragstart = function() {
      return false;
    };
  }



  function DragStartNow(event) {

    //A régler -->
    compteurZindex++;

    activeDiv = event.target;

    let shiftX = event.clientX - imgs[activeDiv.customIndex].getBoundingClientRect().left;
    let shiftY = event.clientY - imgs[activeDiv.customIndex].getBoundingClientRect().top;

    imgs[activeDiv.customIndex].style.position = 'absolute';
    imgs[activeDiv.customIndex].style.zIndex = compteurZindex;


    function moveAt(pageX, pageY) {
      imgs[activeDiv.customIndex].style.left = pageX - shiftX + 'px';
      imgs[activeDiv.customIndex].style.top = pageY - shiftY + 'px';
    }

    function DragMove(event) {
      moveAt(event.pageX, event.pageY, activeDiv);
    }

    document.addEventListener("mousemove", DragMove);

    document.onmouseup = function() {
      document.removeEventListener('mousemove', DragMove);
      imgs[activeDiv.customIndex].onmouseup = null;

    };
  }

  for (i = 0; i < 1000; i++) {
    //creationStar
    var creationStar = document.createElement("div");
    creationStar.classList = "stars";
    creationStar.innerHTML = "&#10038;";
    creationStar.style.left = random(0, 10000) + "px";
    creationStar.style.top = random(0, 10000) + "px";
    document.body.appendChild(creationStar);
  }

  for (i = 0; i < 1000; i++) {
    //creationStar2
    var creationStar2 = document.createElement("div");
    creationStar2.classList = "stars2";
    creationStar2.innerHTML = "&#10023;";
    creationStar2.style.left = random(0, 10000) + "px";
    creationStar2.style.top = random(0, 10000) + "px";
    document.body.appendChild(creationStar2);
  }

  var stars = document.getElementsByClassName("stars");

  var stars2 = document.getElementsByClassName("stars2");

  for (i = 0; i < stars.length; i++) {
    stars[i].addEventListener("mouseenter", SoundOn);
    stars[i].customIndex = i;
  }

  function moveAllStars(){
    for (i = 0; i < stars.length; i++) {
      stars[i].style.left = random(0, 10000) + "px";
      stars[i].style.top = random(0, 10000) + "px";
    }
    for (i = 0; i < stars2.length; i++) {
      stars2[i].style.left = random(0, 10000) + "px";
      stars2[i].style.top = random(0, 10000) + "px";
    }
  }

  for (i = 0; i < stars2.length; i++) {
    stars2[i].addEventListener("mouseenter", SoundOn);
    stars2[i].customIndex = i;
  }

  for (i = 0; i < sourcesSounds.length; i++) {
    var sound = document.createElement("audio");
    sound.src = "sound/" + sourcesSounds[i] + ".m4a";
    sound.classList = 'audios';
    document.body.appendChild(sound);
  }

  function SoundOn(event) {
    var sound = document.getElementsByClassName("audios");
    sound[random(0, sourcesSounds.length)].play();
  }


  function random(from, to) {
    const randomize = Math.floor(Math.random() * (to - from + 1)) + from;
    return randomNumber = randomize;

  }



}
