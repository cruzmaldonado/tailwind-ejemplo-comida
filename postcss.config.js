const purgecss = require('@fullhuman/postcss-purgecss')
module.exports ={
    Plugin:[
        require('tailwindcss'),
        require('autoprefixer'),
        require('cssnano')({
            preset: 'default',
        }),
        purgecss({
            content: ['./**/*.html']
          }),
          
    ]
}