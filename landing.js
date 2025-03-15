particlesJS('particles-js', {
    particles: {
        number: { value: 80 },
        color: { value: '#ffffff' },
        shape: {
            type: ['circle', 'triangle', 'polygon'],
            polygon: { nb_sides: 6 }
        },
        opacity: {
            value: 0.5,
            random: true
        },
        size: {
            value: 3,
            random: true
        },
        move: {
            enable: true,
            speed: 2,
            direction: 'none',
            random: true,
            out_mode: 'out'
        }
    },
    interactivity: {
        detect_on: 'canvas',
        events: {
            onhover: {
                enable: true,
                mode: 'grab'
            },
            onclick: {
                enable: true,
                mode: 'push'
            }
        }
    }
});
