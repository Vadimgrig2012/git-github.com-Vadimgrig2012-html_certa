anime({
    targets: '.box-anim',
    width: [0, '50vw'],
    easing: 'easeOutQuart',
    duration: 2000,
    delay: 2000,
});








anime({
    targets: '.title-text',
    translateX: ['-200%', 0],
    easing: 'easeOutQuart',
    duration: 1000,
    delay: 3000,
});


anime({
    targets: '.border',
    width: '50%',
    easing: 'easeInOutQuad',
    duration: 1000,
    delay: 4000
  });

anime({
    targets: '.title-text2',
    translateX: ['100%', 0],
    easing: 'easeOutQuart',
    duration: 1000,
    delay: 3500,
});

anime({
    targets: '.border2',
    width: '30%',
    easing: 'easeInOutQuad',
    duration: 1000,
    delay: 4000
  });






// logo
const elem_path = document.querySelectorAll('path');

setTimeout(function () {
    document.querySelector('.logo').style.opacity = 1;
    anime({
        targets: ['path', 'rect'],
        strokeDashoffset: [anime.setDashoffset, 0],
        easing: 'easeInOutSine',
        duration: 1500,
        delay: function (el, i) { return i * 150 },
        direction: 'alternate',
        loop: false,
    });
}, 4000);







let bigtext = document.querySelector('.bigtext');

anime({
    targets: '.line1',
    height: '100%',
    easing: 'easeInOutQuad',
    complete: (anim) => {
        anime({
            targets: '.line1',
            bottom: '100%',
            easing: 'easeInOutQuad',
        });
        anime({
            targets: bigtext,
            complete: function () {
                bigtext.remove();
            }
        });
    }
});


anime({
    targets: '.line2',
    height: '100%',
    easing: 'easeInOutQuad',
    complete: (anim) => {
        anime({
            targets: '.line2',
            top: '100%',
            easing: 'easeInOutQuad',
            height: 0,
        });
    }
});







anime({
    targets: '.box-subtitle',
    height: '50vh',
    duration: 500,
    easing: 'linear',
    delay: 6800,
});