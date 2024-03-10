gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
    el: document.querySelector(".main"),
    smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy(".main", {
    scrollTop(value) {
        return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
    }, // we don't have to define a scrollLeft because we're only scrolling vertically.
    getBoundingClientRect() {
        return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
    },
    // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
    pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
});
 // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
 ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

 // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
 ScrollTrigger.refresh();

 var tl1 = gsap.timeline({
    scrollTrigger: {
        trigger: ".page1",
        scroller: ".main",
        start: "top 5%",
        end: "top -100%",
        scrub: 2,
    }
})


tl1.to(".ball img",{
   rotate:360,
})

 
var tl2 = gsap.timeline({
    scrollTrigger:{
        trigger:".ball2",
        scroller:".main",
        //  markers:true,
        start:"top 10%",
        end:"top 70%",
        scrub:2,
    }
})
tl2.to(".ball2 img",{
    top:"170%",
    right:"90%",
    scale:"3",
    rotate:360,
    filter:" drop-shadow(10px 10px 20px  purple)",
})

var tl3= gsap.timeline({
    scrollTrigger:{
        trigger:".page3",
        scroller:".main",
        // markers:true,
        start:"top 20%",
        end:"top 70%",
        scrub:2,
    }     
})
tl3.to(".ball2 img",{
    top:"275%",
    right:"20%",
    scale:"4",
    rotate:360,
    filter:" drop-shadow(10px 10px 20px  purple)",
})


var tl4=gsap.timeline({
    scrollTrigger:{
        trigger:".page4",
        scroller:".main",
        // markers:true,
        start:"top 20%",
        end:"top 70%",
scrub:2,
    }
})
tl4.to(".ball2 img",{
    top:"400%",
    left:"45%",
    rotate:350,
    scale:"4",
    filter:"drop-shadow(10px 10px 20px purple)",
})
tl4.from(".page4 h1",{
    y:50,
    opacity:0,

})
var tl5=gsap.timeline({
    scrollTrigger:{
        trigger:".page5",
        scroller:".main",
        // markers:true,
        start:"top 30%",
        end:"top 90%",
scrub:2,
    }
})
tl5.from(".page5-sec-img img",{
    x:-300,
    scale:2,
    rotate:360,
    opacity:0,
})
tl5.from(".page5-sec-img h1",{
    y:50,
    opacity:0,

})
var tl6=gsap.timeline({
    scrollTrigger:{
        trigger:".page6",
        scroller:".main",
        // markers:true,
        start:"top 30%",
        end:"top 90%",
scrub:2,
    }
})
tl6.from(".page6elem-right img",{
    x:-300,
    scale:2,
    rotate:360,
    opacity:0,
})