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
    targets: '.title-text2',
    translateX: ['80%', 0],
    easing: 'easeOutQuart',
    duration: 1000,
    delay: 3500,
});


// logo
const elem_path = document.querySelectorAll('path:not(:first-child)');

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
        // complete: function (anim) {
        //     anime({
        //         targets: elem_path,
        //         fill: '#006828',
        //     });
        // }
    });
}, 4000);


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
    height: '500',
    duration: 500,
    easing: 'linear',
    delay: 6800,
  });