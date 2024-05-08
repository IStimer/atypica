const purgecss = require('@fullhuman/postcss-purgecss')({
    content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
    defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
});

const cssnano = require('cssnano')({
    preset: 'default',
});

module.exports = {
    plugins: [
        require('autoprefixer'),
        ...(process.env.NODE_ENV === 'production' ? [purgecss, cssnano] : [])
    ],
};
