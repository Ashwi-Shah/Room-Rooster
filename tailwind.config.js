/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            keyframes: {
                scrollBackground: {
                    '0%': { 
                        'background-image': 'url("/src/assets/img/home-img1.jpg")', 
                        'background-position': '0 0' 
                    },
                    '33.33%': { 
                        'background-image': 'url("/src/assets/img/home-img1.jpg")', 
                        'background-position': '100% 100%' 
                    },
                    '33.34%': { 
                        'background-image': 'url("/src/assets/img/home-img2.jpg")', 
                        'background-position': '0 0' 
                    },
                    '66.66%': { 
                        'background-image': 'url("/src/assets/img/home-img2.jpg")', 
                        'background-position': '100% 100%' 
                    },
                    '66.67%': { 
                        'background-image': 'url("/src/assets/img/home-img3.webp")', 
                        'background-position': '0 0' 
                    },
                    '100%': { 
                        'background-image': 'url("/src/assets/img/home-img3.webp")', 
                        'background-position': '100% 100%' 
                    },
                },
                backInUp: {
                    '0%': { opacity: '0', transform: 'translateY(10px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                  },
            },
            animation: {
                scrollBackground: 'scrollBackground 60s linear infinite',
                backInUp: 'backInUp 1.5s ease-out forwards',

            },
        },
    },
    plugins: [],
  };
  