var slideimages = new Array ()
slideimages[0] = new Image()
slideimages[0].src = "./assets/cycle/GI1.jpg"
slideimages[1] = new Image()
slideimages[1].src = "./assets/cycle/ASO2.jpg"
slideimages[2] = new Image()
slideimages[2].src = "./assets/cycle/GI6.jpg"
slideimages[3] = new Image()
slideimages[3].src = "./assets/cycle/TPL1.jpg"
slideimages[4] = new Image()
slideimages[4].src = "./assets/cycle/GI7.jpg"
slideimages[5] = new Image()
slideimages[5].src = "./assets/cycle/ASO4.jpg"
slideimages[6] = new Image()
slideimages[6].src = "./assets/cycle/TPL8.jpg"
slideimages[7] = new Image()
slideimages[7].src = "./assets/cycle/GI8.jpg"
slideimages[8] = new Image()
slideimages[8].src = "./assets/cycle/GI9.jpg"
slideimages[9] = new Image()
slideimages[9].src = "./assets/cycle/TPL7.jpg"
slideimages[10] = new Image()
slideimages[10].src = "./assets/cycle/GI5.jpg"
slideimages[11] = new Image()
slideimages[11].src = "./assets/cycle/TPL5.jpg"

var step=0

function slideit(){
 if (!document.images)
  return
 document.getElementById('slide').src = slideimages[step].src
 if (step<11)
  step++
 else
  step=0
 setTimeout("slideit()",1500)
}

slideit()

function slidelink(){
 if (whichimage == 0)
  slide == 1
 else if (whichimage == 1)
  window.location = "link2.htm"
 else if (whichimage == 2)
  window.location = "link3.htm"
}


// function init() {
//   const [loader] = document.querySelectorAll('.loadingpage');
//
//   function timeout(ms) {
//     return () => new Promise(resolve => setTimeout(resolve, ms))
//   }
//
//   Promise.resolve()
//     .then(timeout(2000))  // time until fade out animation begins
//     .then(() => loader.classList.add('fadeOut'))
//     .then(timeout(3000))  // time until loader removed from DOM allowing app interactiviy
//     .then(() => loader.style.display = 'none')
// }
//
// init();
