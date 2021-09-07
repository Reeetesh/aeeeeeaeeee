gsap.timeline({
   scrollTrigger:{
       trigger:"section",
       start:"center center",
       end:"bottom top",
       scrub:true,
       markers:false,
       pin:true
   } 
})

.to("#cur1",{
    scrollTrigger:{
        scrub:1
    },
    x:1500,
})
.to("#cur2",{
    scrollTrigger:{
        scrub:1
    },
    x:-1500,
})
.to("#text",{
    scrollTrigger:{
        scrub:1
    },
    y:100,
    scale:3,
})
.to("#bg",{
    scrollTrigger:{
        scrub:1
    },
    scale:0.8
});

gsap.timeline({
    scrollTrigger:{
        trigger:".sec1",
        start:"center center",
        end:"bottom top",
        scrub:true,
        markers:false,
        pin:true
    } 
})
.from("#click",{y:innerHeight*-1,scale:0.2});

// gsap.timeline({
//     scrollTrigger:{
//         trigger:".sec",
//         start:"center center",
//         end:"bottom top",
//         scrub:true,
//         markers:true,
//         pin:true
//     } 
// })
// .from("#click",{y:innerHeight*-1});

