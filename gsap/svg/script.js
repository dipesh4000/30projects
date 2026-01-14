var initialPath = "M 10 150 Q 500 150 950 150"
var finalPath = "M 10 150 Q 500 150 950 150"

var string = document.querySelector("#string")

string.addEventListener("mousemove", (e) => {
    initialPath = `M 10 150 Q ${e.clientX} ${e.clientY} 950 150`
    gsap.to("svg path", {
        attr: {d:initialPath},
        duration: 0.3,
        ease: "power3.out"
    })
})
string.addEventListener("mouseleave", (e) => {
    gsap.to("svg path", {
        attr: {d: finalPath},
        duration: 1.3,
        ease: "elastic.out(1.2,0.2)"
    })
})
//writing js inside a variable is called template literal