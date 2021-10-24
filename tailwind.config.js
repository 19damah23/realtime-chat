module.exports = {
    mode: "jit",
    purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
    darkMode: "class", // or 'media' or 'class'
    theme: {
        extend: {},
        fontFamily: {
            rubic: ["Rubik", "sans-serif"],
        },
    },
    variants: {
        extend: {},
    },
    plugins: [require("daisyui")],
};
