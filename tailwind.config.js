/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            screens: {
                'sm': '300px', 
                'md': '576px',   
                'lg': '768px', 
                'xl': '992px',  
                '2xl': '1200px', 
                '3xl': '1536px', 
                '4xl': '1920px', 
                '5xl': '2000px',
              },
            keyframes: {
                scrollBackground: {
                    '0%': { 
                        'background-image': 'url("/src/assets/img/home-img1.jpg")', 
                        'background-position': '0% 0%' 
                    },
                    '33.33%': { 
                        'background-image': 'url("/src/assets/img/home-img1.jpg")', 
                        'background-position': '100% 100%' 
                    },
                    '33.34%': { 
                        'background-image': 'url("/src/assets/img/home-img2.jpg")', 
                        'background-position': '0% 0%' 
                    },
                    '66.66%': { 
                        'background-image': 'url("/src/assets/img/home-img2.jpg")', 
                        'background-position': '100% 100%' 
                    },
                    '66.67%': { 
                        'background-image': 'url("/src/assets/img/home-img3.webp")', 
                        'background-position': '0% 0%' 
                    },
                    '100%': { 
                        'background-image': 'url("/src/assets/img/home-img3.webp")', 
                        'background-position': '100% 100%' 
                    },
                },
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
            },
            animation: {
                scrollBackground: 'scrollBackground 60s linear infinite',
                fadeIn: 'fadeIn 1s ease-in-out',
            },
        },
    },
    plugins: [],
};
