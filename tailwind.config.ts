import type { Config } from "tailwindcss";
const defaultTheme = require("tailwindcss/defaultTheme");

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            backgroundImage: {},
            colors: {
                "twitter-blue": "#1DA1F2",
            },
            gridTemplateRows: {
                "[auto,auto,1fr]": "auto auto 1fr",
            },
        },
    },
    plugins: [
        require("@tailwindcss/typography"),
        require("daisyui"),
        require("@tailwindcss/aspect-ratio"),
        require("@tailwindcss/forms"),
    ],
    daisyui: {
        themes: ["light", "dark", "cupcake"],
    },
};
export default config;
