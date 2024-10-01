/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            backgroundImage: {
                // 'Wall': 'url("./assets/Wall.jpg")'
            }
        },
        fontFamily: {
            'roboto': ['Roboto', 'sans-serif'],
            'volaroid': ['Volaroid san', 'sans-serif'],
            'sancoale': ['Sancoale', 'sans-serif'],
            'cholla': ['ChollaSlabThin', 'sans-serif'],
            'phobes': ['Phobes', 'sans-serif'],
        },
        screens: {
            'navlim': '790px',
        },
    },
    plugins: [],
}