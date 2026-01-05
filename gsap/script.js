// gsap.to("#box1", {
//     x:200,
//     duration: 2,
//     delay: 1,
//     rotate: 360,
//     backgroundColor: "green",
//     borderRadius: "50%",
//     repeat: 1,
//     yoyo: true
// })
// gsap.from("#box2", {
//     opacity: 0,
//     y:200,
//     duration: 2,
//     delay: 1,
//     rotate: 360,
//     backgroundColor: "green",
//     borderRadius: "50%"
// })

gsap.from('#page1 #box', {
    scale: 0,
    duration: 1,
    delay: 1,
    rotate: 360,
    borderRadius: "50%",
    // repeat: -1,
    // yoyo: true
})
gsap.from('#page2 #box', {
    x: 200,
    scale: 0,
    duration: 1,
    rotate: 360,
    scrollTrigger: {
        trigger: "#page2 #box2",
        scroller: "body",
        start: "top 60%",
        // end: "bottom center",
        scrub: true,
        markers: true
    },
    //   animationProperties
})
