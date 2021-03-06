const mix = require('laravel-mix');
require("vuetifyjs-mix-extension");


mix.js('resources/js/app.js', 'public/js');
mix.vuetify("vuetify-loader").sass('resources/sass/app.scss', 'public/css');

//webpack

mix.webpackConfig({
    resolve:{
        alias:{
            /// internal plugins
            "#": __dirname + "/resources/js",
            "#Components": __dirname + "/resources/js/components",

            /// External plugins

            "@": __dirname + "/src"
        }
    }
});

