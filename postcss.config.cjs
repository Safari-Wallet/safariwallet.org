`use strict`;
const autoprefixer = require(`autoprefixer`);
const cssnano = require(`cssnano`);
const postcssNested = require(`postcss-nested`);
const tailwindcss = require(`tailwindcss`);

module.exports = {
    plugins: [
        autoprefixer,
        process.env.NODE_ENV !== `development` && cssnano({
            preset: `default`,
        }),
        postcssNested,
        tailwindcss
    ],
};