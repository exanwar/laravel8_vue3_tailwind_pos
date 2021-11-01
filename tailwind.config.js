const colors = require('tailwindcss/colors')
module.exports = {
    purge: [
        "./resources/**/*.blade.php",
        "./resources/**/*.js",
        "./resources/**/*.vue",
    ],
    darkMode: 'class', // or 'media' or 'class'
    theme: {
        screens: {
            xs: '480px',
            sm: '640px',
            md: '768px',
            lg: '1024px',
            xl: '1280px',
            '2xl': '1536px',
        },
        extend: {
            animation: {
                bounce: 'bounce 4s infinite',
            },
            spacing: {
                68: '17rem',
                76: '19rem',
                84: '21rem',
                88: '22rem',
                92: '23rem',
            },
            colors: {
                dashboard: {
                    background: '#F2F3F3',
                    'scroll-stick': '#A3A3A3',
                    blue: '#7367f0',
                    'nav-parent-active': '#F5F5F5',
                    'royal-blue': '#5631a9',
                    modal: '#00000085',
                },
                teal: colors.teal,
                amber: colors.amber,
                rose: colors.rose,
                orange: colors.orange,
                fuchsia: colors.fuchsia,
                indigo: colors.indigo,
                table: {
                    'light-bg': '#687DED',
                },
            },
            backgroundImage: (theme) => ({
                'nav-child-active':
                    'linear-gradient(118deg,#7367f0,rgba(115,103,240,.7))',
            }),
            fontFamily: {
                nunito: ['Nunito', 'sans-serif'],
                montserrat: ['Montserrat', 'sans-serif'],
            },
            zIndex: {
                '-50': '-50',
            },
            width:{
                '0.7/10':   '7%',
                '1/10'  :   '10%',
                '1.3/10':   '13%',
                '2/10'  :   '20%',
                '3/10'  :   '30%',
                '4/10'  :   '40%',
                '5/10'  :   '50%',
                '6/10'  :   '60%',
                '7/10'  :   '70%',
                '8/10'  :   '80%',
                '9/10'  :   '90%',
            }
        },
    },
    variants: {
        scrollbar: ['rounded'],
        extend: {
            borderColor: ['checked'],
            backgroundColor: [
                'responsive',
                'dark',
                'hover',
                'focus',
                'even',
                'odd',
                'checked'
            ],
            tableLayout: ['hover', 'focus'],
            animation: ['responsive', 'motion-safe', 'motion-reduce'],
            opacity: ['disabled'],
        },
    },
    plugins: [
        require('tailwind-scrollbar'),
    ],
};
