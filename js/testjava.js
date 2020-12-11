var tl = new TimelineMax({repeat:-1});
TweenMax.set ("#demo", {xPercent:-47, yPercent:-47});
tl.from("circle", 12, {drawSVG:0, ease:Linear.easeNone})


gsap.from('.header',{duration:6,y:'-100%',rotation: 360,scale: 5,ease: 'circ'})

gsap.from('.right', {duration:2,x:'-100vw',y:'-500vw', delay: 1, opacity: -1, rotation: 360,scale: 50,ease: 'back' })
gsap.from('.header',{duration:5,x:'-150vw', ease: 'bounce'})
gsap.from('.right2', {duration:4,x:'-100vw',y:'400vw', delay: 1.5, opacity: -1,rotation: 360,scale: 50, ease: 'back' })
gsap.from('.right3', {duration:2,x:'-100vw',y:'-200vw', delay: 2, opacity: -1,rotation: 360,scale: 50, ease: 'back' })
gsap.from('.right4', {duration:5,x:'-100vw',y:'100vw', delay: 3.5, opacity: -1,rotation: 360,scale: 50, ease: 'back' })
gsap.from('.right5', {duration:4,x:'-100vw',y:'300vw', delay: 3, opacity: -1,rotation: 360,scale: 50, ease: 'back' })
gsap.from('.right6', {duration:7,x:'-100vw',y:'400vw', delay: 3.5, opacity: -1,rotation: 360,scale: 50, ease: 'bounce' })

gsap.from('#demo', {duration:3,x:'-100vw',y:'800vw', delay: 4.5, opacity: -10,scale: 50, ease: 'power5.in' })

