require('dotenv').config();
let mix = require('laravel-mix');

const BrowserSyncPlugin = require('browser-sync-webpack-plugin');

mix
  .js('resources/assets/js/app.js', 'public/js')
  .styles([
    'node_modules/open-sans-all/css/open-sans.css',
    'node_modules/font-awesome/css/font-awesome.css',
    'resources/assets/css/style.css'
  ], 'public/css/style.css')
  .copy('node_modules/open-sans-all/fonts',  'public/fonts')
  .copy('node_modules/font-awesome/fonts',  'public/fonts')
  .copy('resources/assets/images', 'public/images')
  .browserSync({
    proxy: process.env.APP_URL,
    open: false
  })
;

mix.webpackConfig({
   plugins: [
      new BrowserSyncPlugin(
         {
            host: '192.168.10.10',
            port: 3000,
            proxy: 'http://app.app',
            files: [
               './**/*.css',
               './app/**/*',
               './config/**/*',
               './resources/views/**/*',
               './routes/**/*'
            ],
            watchOptions: {
              usePolling: true,
              interval: 500
            },
            open: false
         },
         {
            reload: false
         }
      )
   ]
})
