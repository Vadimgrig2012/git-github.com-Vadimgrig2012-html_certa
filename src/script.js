anime({
    targets: '.box-anim',
    width: [0, '50vw'],
    easing: 'easeOutQuart',
    duration: 2000,
    delay: 3000,
});







let text = ['Вообще все', 'Совсем все', 'Очень все', 'Прям все-все', 'Мы можем все']
anime({
    targets: '.title-text',
    translateX: ['-200%', 0],
    easing: 'easeOutQuart',
    duration: 1000,
    delay: 4000,
    complete: (anim) => {
        let i = 0;
        setInterval(() => {
          document.querySelector('.title-text').textContent = text[i];
          i = (i + 1) % text.length;
        }, 5000);
    }
});



anime({
    targets: '.border',
    width: '50%',
    easing: 'easeInOutQuad',
    duration: 1000,
    delay: 5000,
    complete: (anim) => {
        anime({
            targets: '.border',
            width: '0%',
            easing: 'easeInOutQuad',
            duration: 1000,
            delay: 2500,
        })
    }
});

anime({
    targets: '.title-text2',
    translateX: ['100%', 0],
    easing: 'easeOutQuart',
    duration: 1000,
    delay: 5000,
});

anime({
    targets: '.border2',
    width: '30%',
    easing: 'easeInOutQuad',
    duration: 1000,
    delay: 6000
});






// logo
// const elem_path = document.querySelectorAll('path');

setTimeout(function () {
    document.querySelector('.logo').style.opacity = 1;
    anime({
        targets: ['g path', 'g rect'],
        strokeDashoffset: [anime.setDashoffset, 0],
        easing: 'easeInOutSine',
        duration: 1500,
        delay: function (el, i) { return i * 150 },
        direction: 'alternate',
        loop: false,
    });
}, 6500);







let bigtext = document.querySelector('.bigtext');

anime({
    targets: '.line1',
    height: '100%',
    easing: 'easeInOutQuad',
    delay: 1000,
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
    delay: 1000,
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
    delay: 9000,
});

anime({
    targets: '.box-subtitle-2',
    width: '48vw',
    duration: 500,
    easing: 'linear',
    delay: 10000,
    complete: (anim) => {
        anime({
            targets: '.box-subtitle-2',
            easing: 'easeInOutQuad',
            height: '50vh',
        });
    }
});








let paths = [
    { id: '#path1', d: 'M684.176 271.257L667.336 261.09L676.336 278.581L684.176 271.257Z', fill: "none"},
    { id: '#path2', d: 'M552.336 260.326L504.17 237.149L541.065 275.827L552.336 260.326Z', fill: "none"},
    { id: '#path3', d: 'M619.297 265.77L615.521 326.002L659.436 284.606L619.297 265.77Z', fill: "none"},
    { id: '#path4', d: 'M581.99 274.804L616.191 328.057L618.288 264.803L581.99 274.804Z', fill: "none"},
    { id: '#path5', d: 'M556.236 315.351L616.464 327.179L579.566 278.13L556.236 315.351Z', fill: "none"},
    { id: '#path6', d: 'M661.296 283.205L620.294 324.072L678.185 323.931L661.296 283.205Z', fill: "none"},
    { id: '#path7', d: 'M680.017 324.191L618.439 324.303L670.482 357.218L680.017 324.191Z', fill: "none"},
    { id: '#path8', d: 'M669.342 357.077L619.825 324.506L637.695 381.018L669.342 357.077Z', fill: "none"},
    { id: '#path9', d: 'M634.301 381.18L619.329 323.186L602.538 380.68L634.301 381.18Z', fill: "none"},
    { id: '#path10', d: 'M601.377 382.292L615.695 325.781L564.603 353.855L601.377 382.292Z', fill: "none"},
    { id: '#path11', d: 'M562.3 355.739L620.049 326.223L556.075 315.573L562.3 355.739Z', fill: "none"},
    { id: '#path12', d: 'M683.344 261.531L695.807 335.621L704.676 261.015L683.344 261.531Z', fill: "none"},
    { id: '#path13', d: 'M663.021 260.381L612.655 235.848L559.99 254.952L663.021 260.381Z', fill: "none"},
    { id: '#path14', d: 'M565.96 263.02L498.602 234.213L568.991 254.519L565.96 263.02Z', fill: "none"},
    { id: '#path15', d: 'M560.004 257.91L527.386 289.752L540.43 333.429L560.004 257.91Z', fill: "none"},
    { id: '#path16', d: 'M496.713 231.172L500.856 268.851L538.454 273.673L496.713 231.172Z', fill: "none"},
    { id: '#path17', d: 'M496.331 254.067L444.881 267.25L497.991 267.686L496.331 254.067Z', fill: "none"},
    { id: '#path18', d: 'M473.931 235.695L440.461 266.716L485.08 257.139L473.931 235.695Z', fill: "none"},
    { id: '#path19', d: 'M543.605 343.634L518.187 270.616L440.95 267.15L543.605 343.634Z', fill: "none"},
    { id: '#path20', d: 'M541.174 341.354L477.728 296.88L413.373 340.028L541.174 341.354Z', fill: "none"},
    { id: '#path21', d: 'M412.715 340.715L390.389 259.315L375.215 342.346L412.715 340.715Z', fill: "none"},
    { id: '#path22', d: 'M473.191 300.3L400.654 230.354L410.316 330.658L473.191 300.3Z', fill: "none"},
    { id: '#path23', d: 'M398.977 229.76L438.102 265.536L477.934 230.549L398.977 229.76Z', fill: "none"},
    { id: '#path24', d: 'M609.986 233.969L663.209 212.249L680.97 266.921L609.986 233.969Z', fill: "none"},
    { id: '#path25', d: 'M563.789 229.173L660.638 212.694L570.121 250.876L563.789 229.173Z', fill: "none"},
    { id: '#path26', d: 'M375.424 270.138L378.58 316.381L351.931 278.457L375.424 270.138Z', fill: "none"},
    { id: '#path27', d: 'M369.016 338.894L354.302 340.027L353.757 325.279L369.016 338.894Z', fill: "none"},
    { id: '#path28', d: 'M571.843 207.802L660.753 211.582L572.978 226.242L571.843 207.802Z', fill: "none"},
    { id: '#path29', d: 'M703.062 176.473L702.863 251.521L694.036 176.994L703.062 176.473Z', fill: "none"},
    { id: '#path30', d: 'M682.767 261.171L694.444 181.203L703.113 261.553L682.767 261.171Z', fill: "none"},
    { id: '#path31', d: 'M557.922 246.092L513.265 206.681L572.787 208.828L557.922 246.092Z', fill: "none"},
    { id: '#path32', d: 'M512.427 205.661L557.459 247.005L498.047 232.6L512.427 205.661Z', fill: "none"},
    { id: '#path33', d: 'M694.876 177.01L681.768 268.304L657.317 179.374L694.876 177.01Z', fill: "none"},
    { id: '#path34', d: 'M547.093 193.559L630.286 195.466L547.662 205.367L547.093 193.559Z', fill: "none"},
    { id: '#path35', d: 'M640.185 198.472L603.963 172.607L647.217 183.1L640.185 198.472Z', fill: "none"},
    { id: '#path36', d: 'M638.145 170.838L689.73 176.603L637.91 179.597L638.145 170.838Z', fill: "none"},
    { id: '#path37', d: 'M636.91 179.261L596.251 171.101L637.717 170.56L636.91 179.261Z', fill: "none"},
    { id: '#path38', d: 'M611.066 192.556L541.791 194.553L608.919 177.324L611.066 192.556Z', fill: "none"},
    { id: '#path39', d: 'M539.953 179.942L586.094 181.829L541.874 195.139L539.953 179.942Z', fill: "none"},
    { id: '#path40', d: 'M540.505 176.191L591.594 181.588L540.223 181.176L540.505 176.191Z', fill: "none"},
    { id: '#path41', d: 'M592.366 179.658L545.52 176.511L592.436 174.671L592.366 179.658Z', fill: "none"},
    { id: '#path42', d: 'M541.113 171.777L595.03 172.881L541.256 176.953L541.113 171.777Z', fill: "none"},
    { id: '#path43', d: 'M660.543 210.104L525.644 206.639L660.335 198.387L660.543 210.104Z', fill: "none"},
    { id: '#path44', d: 'M542.275 163.726L606.573 169.456L542.052 171.465L542.275 163.726Z', fill: "none"},
    { id: '#path45', d: 'M473.583 234.007L514.071 200.951L489.468 247.067L473.583 234.007Z', fill: "none"},
    { id: '#path46', d: 'M515.481 207.505L525.887 173.576L541.354 205.518L515.481 207.505Z', fill: "none"},
    { id: '#path47', d: 'M538.845 201.548L525.032 170.292L546.678 196.734L538.845 201.548Z', fill: "none"},
    { id: '#path48', d: 'M537.104 161.307L539.279 186.433L523.286 166.933L537.104 161.307Z', fill: "none"},
    { id: '#path49', d: 'M517.566 96.9793L517.063 110.734L511.339 98.217L517.566 96.9793Z', fill: "none"},
    { id: '#path50', d: 'M512.647 96.9283L514.413 81.8468L518.704 96.4125L512.647 96.9283Z', fill: "none"},
    { id: '#path51', d: 'M524.268 174.929L516.826 205.657L514.015 174.166L524.268 174.929Z', fill: "none"},
    { id: '#path52', d: 'M544.29 131.657L539.307 181.299L532.818 131.832L544.29 131.657Z', fill: "none"},
    { id: '#path53', d: 'M514.306 173.867L521.56 130.792L524.095 174.4L514.306 173.867Z', fill: "none"},
    { id: '#path54', d: 'M522.72 116.215L514.404 166.762L513.401 115.546L522.72 116.215Z', fill: "none"},
    { id: '#path55', d: 'M524.095 165.778L521.087 118.174L537.462 162.974L524.095 165.778Z', fill: "none"},
    { id: '#path56', d: 'M529.617 114.644L536.016 160.426L521.337 116.591L529.617 114.644Z', fill: "none"},
    { id: '#path57', d: 'M520.112 74.1423L518.454 103.887L513.755 74.469L520.112 74.1423Z', fill: "none"},
    { id: '#path58', d: 'M516.548 115.382L521.615 74.4018L530.071 114.819L516.548 115.382Z', fill: "none"},
    { id: '#path59', d: 'M512.314 73.8644L514.835 30.2773L520.954 73.5063L512.314 73.8644Z', fill: "none"},
    { id: '#path60', d: 'M353.654 276.084L349.668 228.945L373.215 269.976L353.654 276.084Z', fill: "none"},
    { id: '#path61', d: 'M374.017 272.393L350.225 229.648L393.852 251.783L374.017 272.393Z', fill: "none"},
    { id: '#path62', d: 'M352.809 325.198L350.892 276.315L379.815 315.771L352.809 325.198Z', fill: "none"},
    { id: '#path63', d: 'M392.731 250.532L349.157 229.369L397.598 229.473L392.731 250.532Z', fill: "none"},
    { id: '#path64', d: 'M541.209 25.8506L533.495 137.373L515.395 27.0591L541.209 25.8506Z', fill: "none"},
    { id: '#path65', d: 'M534.453 130.779L542.346 32.9255L544.525 131.073L534.453 130.779Z', fill: "none"},
    { id: '#path66', d: 'M340.185 232.195L323.804 239.807L313.969 224.657L340.185 232.195Z', fill: "none"},
    { id: '#path67', d: 'M304.4 211.332L287.614 225.018L292.036 203.816L304.4 211.332Z', fill: "none"},
    { id: '#path68', d: 'M348.58 228.747L352.568 277.505L321.998 239.311L348.58 228.747Z', fill: "none"},
    { id: '#path69', d: 'M306.091 207.876L329.675 250.737L286.157 228.39L306.091 207.876Z', fill: "none"},
    { id: '#path70', d: 'M541.861 26.7804L352.493 15.2003L541.999 6.16219L541.861 26.7804Z', fill: "none"},
    { id: '#path71', d: 'M346.362 6.33131L349.227 16.2515L339.966 20.8179L346.362 6.33131Z', fill: "none"},
    { id: '#path72', d: 'M347.245 5.62043L525.354 6.51253L347.453 15.1692L347.245 5.62043Z', fill: "none"},
    { id: '#path73', d: 'M350.819 16.575L352.264 34.2152L339.036 22.4555L350.819 16.575Z', fill: "none"},
    { id: '#path74', d: 'M341.266 39.3982L339.161 21.4323L351.247 34.8911L341.266 39.3982Z', fill: "none"},
    { id: '#path75', d: 'M326.975 40.6073L339.358 22.8684L340.966 44.4419L326.975 40.6073Z', fill: "none"},
    { id: '#path76', d: 'M338.294 44.8827L287.531 220.886L324.834 41.5467L338.294 44.8827Z', fill: "none"},
    { id: '#path77', d: 'M271.255 226.252L323.937 45.4844L284.45 229.586L271.255 226.252Z', fill: "none"},
    { id: '#path78', d: 'M280.612 196.843L274.469 216.785L270.909 196.224L280.612 196.843Z', fill: "none"},
    { id: '#path79', d: 'M252.269 208.877L269.625 196.231L272.924 217.451L252.269 208.877Z', fill: "none"},
    { id: '#path80', d: 'M252.154 208.758L249.236 189.55L267.744 195.461L252.154 208.758Z', fill: "none"},
    { id: '#path81', d: 'M203.744 296.082L271.862 315.384L206.896 343.525L203.744 296.082Z', fill: "none"},
    { id: '#path82', d: 'M211.346 343.023L276.579 312.901L242.859 376.349L211.346 343.023Z', fill: "none"},
    { id: '#path83', d: 'M244.739 375.231L272.887 315.727L284.891 380.449L244.739 375.231Z', fill: "none"},
    { id: '#path84', d: 'M285.352 381.168L272.864 313.411L325.903 357.386L285.352 381.168Z', fill: "none"},
    { id: '#path85', d: 'M328.758 357.312L270.892 314.622L342.799 315.124L328.758 357.312Z', fill: "none"},
    { id: '#path86', d: 'M344.278 314.603L274.724 313.573L326.721 267.367L344.278 314.603Z', fill: "none"},
    { id: '#path87', d: 'M326.939 266.532L273.46 316.026L300.324 248.291L326.939 266.532Z', fill: "none"},
    { id: '#path88', d: 'M298.732 245.319L274.306 316.146L259.897 242.624L298.732 245.319Z', fill: "none"},
    { id: '#path89', d: 'M258.569 241.893L273.446 315.981L226.123 257.067L258.569 241.893Z', fill: "none"},
    { id: '#path90', d: 'M225.823 257.35L270.921 314.744L201.443 292.37L225.823 257.35Z', fill: "none"},
    { id: '#path91', d: 'M238.834 86.0074L253.426 4.9184L257.092 87.2284L238.834 86.0074Z', fill: "none"},
    { id: '#path92', d: 'M251.583 5.54209L237.887 82.4842L225.287 5.35513L251.583 5.54209Z', fill: "none"},
    { id: '#path93', d: 'M222.704 82.3249L225.343 7.33748L238.921 81.1327L222.704 82.3249Z', fill: "none"},
    { id: '#path94', d: 'M205.273 93.2024L225.17 8.06523L219.841 95.3339L205.273 93.2024Z', fill: "none"},
    { id: '#path95', d: 'M223.809 2.95949L204.714 90.2144L192.185 1.77763L223.809 2.95949Z', fill: "none"},
    { id: '#path96', d: 'M241.034 101.942L224.441 82.5053L248.864 90.0286L241.034 101.942Z', fill: "none"},
    { id: '#path97', d: 'M224.464 96.2244L209.004 122.537L202.018 92.8292L224.464 96.2244Z', fill: "none"},
    { id: '#path98', d: 'M248.769 107.722L211.558 124.129L226.051 86.1313L248.769 107.722Z', fill: "none"},
    { id: '#path99', d: 'M192.224 121.785L191.724 9.19291L207.077 120.735L192.224 121.785Z', fill: "none"},
    { id: '#path100', d: 'M217.866 148.302L224.15 123.513L228.96 148.63L217.866 148.302Z', fill: "none"},
    { id: '#path101', d: 'M241.957 109.791L249.043 145.902L224.801 118.215L241.957 109.791Z', fill: "none"},
    { id: '#path102', d: 'M230.112 155.526L226.429 118.498L249.602 147.613L230.112 155.526Z', fill: "none"},
    { id: '#path103', d: 'M214.892 161.351L218.494 148.162L230.603 154.511L214.892 161.351Z', fill: "none"},
    { id: '#path104', d: 'M189.578 136.955L189.496 146.497L179.977 147.157L189.578 136.955Z', fill: "none"},
    { id: '#path105', d: 'M247.654 177.135L215.135 161.614L248.73 148.583L247.654 177.135Z', fill: "none"},
    { id: '#path106', d: 'M248.188 189.382L251.672 230.283L241.792 190.44L248.188 189.382Z', fill: "none"},
    { id: '#path107', d: 'M210.708 223.864L241.54 189.276L252.629 234.265L210.708 223.864Z', fill: "none"},
    { id: '#path108', d: 'M204.998 231.445L207.579 245.07L196.302 236.999L204.998 231.445Z', fill: "none"},
    { id: '#path109', d: 'M206.663 230.188L223.452 237.574L207.582 246.769L206.663 230.188Z', fill: "none"},
    { id: '#path110', d: 'M207.113 247.462L222.223 238.31L221.346 255.953L207.113 247.462Z', fill: "none"},
    { id: '#path111', d: 'M214.645 160.969L194.188 240.088L249.821 180.228L214.645 160.969Z', fill: "none"},
    { id: '#path112', d: 'M222.848 255.633L263.501 236.525L219.61 226.968L222.848 255.633Z', fill: "none"},
    { id: '#path113', d: 'M173.1 146.933L179.128 248.446L190.999 147.449L173.1 146.933Z', fill: "none"},
    { id: '#path114', d: 'M191.464 120.572L178.456 258.42L222.497 127.15L191.464 120.572Z', fill: "none"},
    { id: '#path115', d: 'M177.28 259.145L219.475 137.436L186.622 261.992L177.28 259.145Z', fill: "none"},
    { id: '#path116', d: 'M185.199 268.327L195.375 238.136L221.596 256.234L185.199 268.327Z', fill: "none"},
    { id: '#path117', d: 'M201.851 289.478L185.345 267.986L210.874 258.894L201.851 289.478Z', fill: "none"},
    { id: '#path118', d: 'M193.791 281.584L202.059 287.611L201.21 297.807L193.791 281.584Z', fill: "none"},
    { id: '#path119', d: 'M186.518 261.415L179.243 283.932L177.815 260.312L186.518 261.415Z', fill: "none"},
    { id: '#path120', d: 'M201.431 298.972L178.033 291.484L184.56 267.8L201.431 298.972Z', fill: "none"},
    { id: '#path121', d: 'M197.595 333.595L191.498 313.649L202.148 295.716L197.595 333.595Z', fill: "none"},
    { id: '#path122', d: 'M193.381 340.627L192.67 317.021L197.491 340.14L193.381 340.627Z', fill: "none"},
    { id: '#path123', d: 'M192.773 342.816L183.123 326.578L191.919 309.863L192.773 342.816Z', fill: "none"},
    { id: '#path124', d: 'M199.58 298.346L177.111 333.759L179.132 291.868L199.58 298.346Z', fill: "none"},
    { id: '#path125', d: 'M173.733 337.326L182.76 326.579L190.232 338.459L173.733 337.326Z', fill: "none"},
    { id: '#path126', d: 'M176.147 351.904L175.843 336.94L190.686 338.863L176.147 351.904Z', fill: "none"},
    { id: '#path127', d: 'M174.702 345.669L99.7197 340.725L174.767 336.896L174.702 345.669Z', fill: "none"},
    { id: '#path128', d: 'M90.0059 336.388L155.997 337.714L90.0274 339.858L90.0059 336.388Z', fill: "none"},
    { id: '#path129', d: 'M142.804 353.314L108.207 344.567L143.572 349.336L142.804 353.314Z', fill: "none"},
    { id: '#path130', d: 'M174.113 352.381L94.7323 341.503L174.732 345.936L174.113 352.381Z', fill: "none"},
    { id: '#path131', d: 'M82.4601 341.133L109.869 346.063L82.0239 345.603L82.4601 341.133Z', fill: "none"},
    { id: '#path132', d: 'M88.9245 340.313L62.3623 336.338L89.2193 336.577L88.9245 340.313Z', fill: "none"},
    { id: '#path133', d: 'M81.2016 345.699L54.104 336.354L82.6378 339.082L81.2016 345.699Z', fill: "none"},
    { id: '#path134', d: 'M55.5604 337.618L71.529 343.768L54.4461 342.772L55.5604 337.618Z', fill: "none"},
    { id: '#path135', d: 'M53.5524 341.765L31.6847 333.855L54.8468 335.924L53.5524 341.765Z', fill: "none"},
    { id: '#path136', d: 'M29.3409 332.827L53.3004 343.146L27.3318 340.66L29.3409 332.827Z', fill: "none"},
    { id: '#path137', d: 'M27.0014 340.008L3.98377 333.213L27.9817 332.927L27.0014 340.008Z', fill: "none"},
    
];


setTimeout(function (){
    let timeline = anime.timeline({ autoplay: true, direction: 'alternate', loop: true});

    paths.forEach(function (path, index) {
        let animation = {
            targets: path.id,
            d: {
                value: path.d,
                duration: 20,
                easing: 'easeInOutQuad',
            },             
        };
        if (index === 0 || index === paths.length - 1) {
            animation.endDelay = 1000;
        }
        timeline.add(animation);
    });

    timeline
        .add({
            targets: 'path:first-child',
            opacity: {
                value: 1,
                duration: 20,
                easing: 'easeInOutQuad',
            },
        })
},10500);


const logo = document.querySelector('.svg-box1');
anime({
  targets: logo,
  width: 600,
  height: 400,
  easing: 'easeInOutQuad',
  opacity: [0, 1],
  delay: 9500,
});