function init(){
    
gsap.registerPlugin(ScrollTrigger);
const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
locoScroll.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, 
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

ScrollTrigger.refresh();

}
init()


var crsr = document.querySelector("#cursor")
var main = document.querySelector("#main")
document.addEventListener("mousemove",function(dets){
  crsr.style.left = dets.x+20+"px"
  crsr.style.top = dets.y+20+"px"

})

var crsr = document.querySelector("#cursor")
var videoo = document.querySelector("#page1 video")
videoo.addEventListener("mousemove",function(dets){
  crsr.style.width = "100px"
  crsr.style.height = "25px"
  crsr.style.borderRadius = "20px"
  crsr.style.textAlign = "center"
  crsr.innerHTML = "sound on"
  crsr.style.color = "white"
  crsr.style.left = dets.x+"px"
  crsr.style.top = dets.y+"px"

})

var crsr = document.querySelector("#cursor")
var videoo = document.querySelector("#page1 video")
videoo.addEventListener("mouseleave",function(dets){
  crsr.style.width = "20px"
  crsr.style.height = "20px"
  crsr.innerHTML = ""

})

gsap.from("#page1 h1, #page1 h2",{
  y:19,
  rotate:3,
  opacity:0,
  delay:0.7,
  duration:1
})

var tl = gsap.timeline({
    scrollTrigger:{
        trigger:"#page1 h1",
        scroller:"#main",
        // markers:true,
        start:"top 27%",
        end:"top 0",
        scrub:3
    }
})

tl.to("#page1 h1",{
    x:-100,
    scale:1.1,
},"same")
tl.to("#page1 h2",{
    x:100,
    scale:1.1,
},"same")

tl.to("#page1 video",{
    width:"87%"
},"same")






var tl2 = gsap.timeline({
  scrollTrigger:{
      trigger:"#page1 h1",
      scroller:"#main",
      // markers:true,
      start:"top -115%",
      end:"top -120%",
      scrub:3
  }
})


tl2.to("#main",{
  backgroundColor:"#fff"
})

function page4(){
  var tl3 = gsap.timeline({
    scrollTrigger:{
        trigger:"#page3 img",
        scroller:"#main",
        // markers:true,
        start:"top 45%",
        end:"top 0%",
        scrub:2
    }
  })
  
  tl3.to("#page3 img",{
    x:-100,
    // scale:1.1,
  },"sames")
  tl3.to("#page3 video",{
    x:100,
    // scale:1.1,
  },"sames")
  
}
page4()


var tl4 = gsap.timeline({
  scrollTrigger:{
      trigger:"#page3 img",
      scroller:"#main",
      // markers:true,
      start:"top 35%",
      end:"top 0%",
      scrub:5
  }
})


tl4.to("#main",{
  backgroundColor:"#0f0d0d"
})

var boxes = document.querySelectorAll(".box")
boxes.forEach(function(elem){
    elem.addEventListener("mouseenter",function(){
    var att = elem.getAttribute("data-image")
    crsr.style.width = "350px"
    crsr.style.height = "300px"
    crsr.style.borderRadius = "20px"
    crsr.style.backgroundImage = `url(${att})`
    })
    elem.addEventListener("mouseleave",function(){
      elem.style.backgroundColor = "transparent"
      crsr.style.width = "20px"
      crsr.style.height = "20px"
      crsr.style.borderRadius = "50%"
      crsr.style.backgroundImage = `none`
    })
})



// var h4 = document.querySelectorAll("#nav h4")
// var purple = document.querySelector("#purple")
// h4.forEach(function(elem){
//   elem.addEventListener("mouseenter",function(){
//     purple.style.display = "block"
//     purple.style.opacity = "1"
//     crsr.style.width = "30px"
//     crsr.style.height = "30px"
//     crsr.style.Color = "#010101"
//     crsr.style.zIndex = 104


//   })
//   elem.addEventListener("mouseleave",function(){
//     purple.style.display = "none"
//     purple.style.opacity = "0"

//   })
// })

var work = document.querySelector("#nav #nav-part2 #work")
var purple = document.querySelector("#purple")
work.addEventListener("mouseenter",function(){
      purple.style.display = "block"
    purple.style.opacity = "1"
    crsr.style.width = "30px"
    crsr.style.height = "30px"
    crsr.style.Color = "#010101"
    crsr.style.zIndex = 104
})
work.addEventListener("mouseleave",function(){
      purple.style.display = "none"
    purple.style.opacity = "0"
    crsr.style.width = "20px"
    crsr.style.height = "20px"
})

var studio = document.querySelector("#nav #nav-part2 #Studio")
var purple2 = document.querySelector("#purple2")
studio.addEventListener("mouseenter",function(){
      purple2.style.display = "block"
    purple2.style.opacity = "1"
    crsr.style.width = "30px"
    crsr.style.height = "30px"
    crsr.style.Color = "#010101"
    crsr.style.zIndex = 104
    // purple.innerHTML =" studio studio"
})
studio.addEventListener("mouseleave",function(){
      purple2.style.display = "none"
    purple2.style.opacity = "0"
    crsr.style.width = "20px"
    crsr.style.height = "20px"
})

var contact = document.querySelector("#nav #nav-part2 #contact")
var purple3 = document.querySelector("#purple3")
contact.addEventListener("mouseenter",function(){
      purple3.style.display = "block"
    purple3.style.opacity = "1"
    crsr.style.width = "30px"
    crsr.style.height = "30px"
    crsr.style.Color = "#010101"
    crsr.style.zIndex = 104
    // purple.innerHTML =" studio studio"
})
contact.addEventListener("mouseleave",function(){
      purple3.style.display = "none"
    purple3.style.opacity = "0"
    crsr.style.width = "20px"
    crsr.style.height = "20px"
})



var gola = document.querySelector("#footer-last #gola")
var golah3 = document.querySelector("#footer-last #gola h3")

gola.addEventListener("mouseenter",function(){
  gola.style.backgroundColor = "#0f0d0d"
  golah3.style.color = "white"
  gola.style.transition = "all linear 0.15s"
})
gola.addEventListener("mouseleave",function(){
  gola.style.backgroundColor = "white"
  golah3.style.color = "#0f0d0d"
})













