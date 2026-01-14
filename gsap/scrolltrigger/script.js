// // gsap.to("#box1", {
// //     x:200,
// //     duration: 2,
// //     delay: 1,
// //     rotate: 360,
// //     backgroundColor: "green",
// //     borderRadius: "50%",
// //     repeat: 1,
// //     yoyo: true
// // })
// gsap.from("#page2 h1", {
//     opacity: 0,
//     x:500,
//     duration: 2,
//     scrollTrigger: {
//         trigger: "#page2 h1",
//         scroller: "body",
//         markers: true,
//         start: "top 60%",
//         end: "top 32%",
//         scrub: true
//     }
// })
// gsap.from("#page2 h2", {
//     opacity: 0,
//     x:-500,
//     duration: 2,
//     scrollTrigger: {
//         trigger: "#page2 h1",
//         scroller: "body",
//         markers: true,
//         start: "top 60%",
//         end: "top 32%",
//         scrub: 2
//     }
// })

// gsap.from('#page1 #box', {
//     scale: 0,
//     duration: 1,
//     delay: 1,
//     rotate: 360,
//     borderRadius: "50%",
//     // repeat: -1,
//     // yoyo: true
// })
// gsap.from('#page2 #box', {
//     x: 200,
//     scale: 0,
//     duration: 1,
//     delay: 1,
//     rotate: 360,
//     scrollTrigger: {
//         trigger: "#page2 #box2",
//         scroller: "body",
//         // start: "top 60%",
//         // end: "bottom center",
//         scrub: true
//     },
// })
// let tl = gsap.timeline({
// 	// yes, we can add it to an entire timeline!
// 	scrollTrigger: {
// 		trigger: '#page3 #box',
// 		pin: true, // pin the trigger element while active
// 		start: 'top top', // when the top of the trigger hits the top of the viewport
// 		end: '+=500', // end after scrolling 500px beyond the start
// 		scrub: 1, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
// 		snap: {
// 			snapTo: 'labels', // snap to the closest label in the timeline
// 			duration: { min: 0.2, max: 3 }, // the snap animation should be at least 0.2 seconds, but no more than 3 seconds (determined by velocity)
// 			delay: 0.2, // wait 0.2 seconds from the last scroll event before doing the snapping
// 			ease: 'power1.inOut' // the ease of the snap animation ("power3" by default)
// 		}
// 	}
// });

// // add animations and labels to the timeline
// tl.addLabel('start')
// 	.from('.box p', { scale: 0.3, rotation: 45, autoAlpha: 0 })
// 	.addLabel('color')
// 	.from('.box', { backgroundColor: '#28a92b' })
// 	.addLabel('spin')
// 	.to('.box', { rotation: 360 })
// 	.addLabel('end');

// var tl = gsap.timeline()

// tl.from("#page1 h2", {
//     y: -30,
//     opacity: 0,
//     duration: 0.6,
//     delay: 0.5
// })
// tl.from("#page1 h4", {
//     y: -30,
//     opacity: 0,
//     duration: 0.6,
//     delay: 0.5,
//     stagger: 0.2
// })  
// tl.from("#page1 h1", {
//     y: 20,
//     opacity: 0,
//     duration: 0.6,
//     delay: 0.2,
//     stagger: 0.2
// })

gsap.to("#page2 h1", {
    transform: "translateX(-200%)",
    scrollTrigger: {
        trigger: "#page2",
        scroller: "body",
        markers: true,
        start: "top",
        end: "top -100%",
        scrub: 2,
        // pin: true
    }
})