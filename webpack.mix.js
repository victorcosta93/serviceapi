const { mix } = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 */
 
mix.options({ processCssUrls: false, uglify: true})
    .react('resources/assets/js/private.js', 'public/js');
    //.react('resources/assets/js/public.js', 'public/js')
    //.sass('resources/assets/sass/app.scss', 'public/css');
