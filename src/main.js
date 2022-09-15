import "./style.css";
/* Import af Motion One bibliotek */
import { animate, stagger, inView, scroll, timeline } from "motion"

animate( "body", { opacity: [ 0, 1] }, { duration: 5 })
animate(".mereanimate", 
  { opacity: [ 0.4, 1, 0, 0.8], scale: [0.95, 1, 0.7, 0.9] }, 
  { delay: 5, duration: 4, direction: "alternate", repeat: Infinity }
)

 //Progress bar
 scroll(
  animate(".progress-bar", { scaleX: [0, 1] })
);

//Horizontal scroll
const items = document.querySelectorAll("#horisontalliste li");
scroll(
   animate("#horisontalliste", {
     transform: ["none", `translateX(-${items.length - 1}00vw)`]
   }),
   { target: document.querySelector("#horisontalscrollsection") }
 ); 


//Parallax
document.querySelectorAll(".parallaxcontainer1").forEach(( parallaxcontainer ) => {
  const elementderskalparallaxes = parallaxcontainer.querySelector("img");
  scroll(animate(elementderskalparallaxes, { y: [0, 10] }), {
    target: elementderskalparallaxes
  });
});

document.querySelectorAll(".parallaxcontainer4").forEach(( parallaxcontainer ) => {
  const elementderskalparallaxes = parallaxcontainer.querySelector("img");
  scroll(animate(elementderskalparallaxes, { y: [ 100, 600] }), {
    target: elementderskalparallaxes
  });
});

//Snapped scroll buttom

document.querySelectorAll(".snap").forEach((section) => {
  const header = section.querySelector(".photostyle");
  scroll(animate(header, { y: [-100, 200] }), {
    target: header
  });

 
  animate(
    " li, h1",
    { opacity: [0, 1] },
    { 
        delay: stagger(0.5, { start: 1 })
    } 
    
  )
  inView( ".fotoinview" , () =>{
    animate( ".fotoinview", { x: [-2000, 0 ] }, { duration:3 })
  })
  inView( ".fotoinview1" , () =>{
    animate( ".fotoinview1", { x: [+2000, 0 ] }, { duration:3 })
  })
  
  scroll(
    animate(".scrollzoomimg", { 
      scale: [1, 1.5]    
    }),
    { 
      target: document.querySelector(".scrollzoomimg"),
      offset: ["0.5 0.5", "0.2 0.2"]
   }
  )
  
  
});



