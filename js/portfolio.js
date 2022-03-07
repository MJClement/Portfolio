var slideimages = new Array ()
slideimages[14] = new Image()
slideimages[14].src = "./assets/cycle/GI1.jpg"
slideimages[12] = new Image()
slideimages[12].src = "./assets/cycle/ASO2.jpg"
slideimages[2] = new Image()
slideimages[2].src = "./assets/cycle/GI6.jpg"
slideimages[3] = new Image()
slideimages[3].src = "./assets/cycle/TPL1.jpg"
slideimages[4] = new Image()
slideimages[4].src = "./assets/cycle/GI7.jpg"
slideimages[5] = new Image()
slideimages[5].src = "./assets/cycle/ASO4.jpg"
slideimages[21] = new Image()
slideimages[21].src = "./assets/cycle/TPL8.jpg"
slideimages[16] = new Image()
slideimages[16].src = "./assets/cycle/GI8.jpg"
slideimages[8] = new Image()
slideimages[8].src = "./assets/cycle/JACKKWIP.png"
slideimages[9] = new Image()
slideimages[9].src = "./assets/cycle/TPL7.jpg"
slideimages[10] = new Image()
slideimages[10].src = "./assets/cycle/GI5.jpg"
slideimages[11] = new Image()
slideimages[11].src = "./assets/cycle/TPL5.jpg"
slideimages[1] = new Image()
slideimages[1].src = "./assets/cycle/LV11_20.jpg"
slideimages[13] = new Image()
slideimages[13].src = "./assets/cycle/KJ_LB_2.jpg"
slideimages[0] = new Image()
slideimages[0].src = "./assets/cycle/THH_1.jpg"
slideimages[15] = new Image()
slideimages[15].src = "./assets/cycle/BVR_14.jpg"
slideimages[7] = new Image()
slideimages[7].src = "./assets/cycle/BV_RT_3.2.jpg"
slideimages[17] = new Image()
slideimages[17].src = "./assets/cycle/KJ_LB_1.jpg"
slideimages[18] = new Image()
slideimages[18].src = "./assets/cycle/THH_8.jpg"
slideimages[19] = new Image()
slideimages[19].src = "./assets/cycle/BVR_27.jpg"
slideimages[20] = new Image()
slideimages[20].src = "./assets/cycle/THH_4.jpg"
slideimages[6] = new Image()
slideimages[6].src = "./assets/cycle/KJ_LB_6.jpg"
slideimages[22] = new Image()
slideimages[22].src = "./assets/cycle/BVR_9.jpg"
slideimages[23] = new Image()
slideimages[23].src = "./assets/cycle/BVR_5.jpg"

var step=0

function slideit(){
 if (!document.images)
  return
 document.getElementById('slide').src = slideimages[step].src
 if (step<23)
  step++
 else
  step=0
 setTimeout("slideit()",2500)
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
