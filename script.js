// Shery.makeMagnet("" , {
//     ease: "cubic-bezier(0.23, 1, 0.320, 1)",
//     duration: 1,
//   });


function mymenu(){
    let menu = document.querySelector(".menu-button")
let menuclose = document.querySelector(".menu-close")

menu.addEventListener("mouseenter", function(){
    gsap.to(".menu",{
        opacity:1,
        width:"50%",
    })

    // gsap.to("#main",{
    //     opacity:.5,
    // })
})

menuclose.addEventListener("click",function(){
    gsap.to(".menu",{
        opacity:0,
        width:"0%"
       
    })

    // gsap.to("#main",{
    //     opacity:1,
    // })
})
}

mymenu()

function mycursor(){
    let cursor = document.querySelector(".cursor")
    let main = document.querySelector("#main")
    window.addEventListener("mousemove",function(dets){
        gsap.to(cursor,{
            x: dets.x-5,
            y: dets.y-5,
            duration:1,
            ease: "power4.out",
        })
    })

    main.addEventListener("mouseenter",function(dets){
        gsap.to(cursor,{
           scale:1,
            ease: "power4.out",
        })
    })

    main.addEventListener("mouseleave",function(dets){
        gsap.to(cursor,{
            scale:0,
            ease: "power4.out",
        })
    })
    
    window.addEventListener("dblclick",function(dets){
       let tl = gsap.timeline()
    
        tl.to(cursor,{
        scale: 2,
        duration:.3,
        ease: "power4.out",
        });
    
        tl.to(cursor,{
            scale: 1,
            yoyo:true,
            duration:.3,
            ease: "power1.out",
        })
    
    })
}

mycursor()