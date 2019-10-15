const sections = document.querySelectorAll('.paralex');


// Init ScrollMagic
let controller = new ScrollMagic.Controller();

// create scene for every slide
// for (let i = 0; i < sections.length; i++) {
//   var tween = TweenMax.to(sections[i].querySelector('img'), 1, { x: '100vw' });

//   new ScrollMagic.Scene({ triggerElement: sections[i], triggerHook: 0, triggerOffset: '-100%', duration: '100%' })
//     .setPin(sections[i], { pushFollowers: false })
//     .setTween(tween)
//     .addTo(controller);
// }

// Animate JS
for (let i = 0; i < sections.length; i++) {
  let animImg = anime({
    targets: sections[i].querySelector('img'),
    translateX: ['70vw', '-70vw'],
    elasticity: 200,
    easing: 'easeInOutSine',
    autoplay: false,
  });
  let animTxt = anime({
    targets: sections[i].querySelector('h1'),
    translateX: ['-100vw', '100vw'],
    elasticity: 200,
    easing: 'easeInOutSine',
    autoplay: false
  });

  new ScrollMagic.Scene({ triggerElement: sections[i], triggerHook: 0, triggerOffset: '-100%', duration: '100%' })
    .setPin(sections[i], { pushFollowers: false })
    .on('progress', function (event) {
      animImg.seek(event.progress * 1000);
      animTxt.seek(event.progress * 1000);
    })
    .addTo(controller);
}