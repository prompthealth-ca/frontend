/***************************************************************************************************
 * Load `$localize` onto the global scope - used if i18n tags appear in Angular templates.
 */
import '@angular/localize/init';
import 'zone.js/dist/zone-node';

import { ngExpressEngine } from '@nguniversal/express-engine';
import * as express from 'express';
import { join } from 'path';

import { existsSync } from 'fs';
import * as domino from 'domino';

import { AppServerModule } from './src/main.server';
import { APP_BASE_HREF } from '@angular/common';

// The Express app is exported so that it can be used by serverless Functions.
export function app() {
  const server = express();
  const distFolder = join(process.cwd(), 'dist/wellness-frontend/browser');
  const indexHtml = existsSync(join(distFolder, 'index.original.html')) ? 'index.original.html' : 'index';

  const template = join(distFolder, 'index.html');
  const win = domino.createWindow(template)
  global['window'] = win;
  global['document'] = win.document;
  global['navigator'] = win.navigator;

  // Our Universal express-engine (found @ https://github.com/angular/universal/tree/master/modules/express-engine)
  server.engine('html', ngExpressEngine({
    bootstrap: AppServerModule,
  }));

  server.set('view engine', 'html');
  server.set('views', distFolder);

  // Example Express Rest API endpoints
  // app.get('/api/**', (req, res) => { });
  // Serve static files from /browser
  server.get('*.*', express.static(distFolder, {
    maxAge: '1y'
  }));


  server.get('/blogs', (req, res) => {
    res.render(indexHtml, { req, providers: [
      { provide: APP_BASE_HREF, useValue: req.baseUrl }
    ]},
    (err, html) => {
      if(err){
        console.log(err);
      }
      showMeta(html);
      res.send(html);
    });
  });
  server.get('/blog-category/:id', (req, res) => {
    res.render(indexHtml, { req, providers: [
      { provide: APP_BASE_HREF, useValue: req.baseUrl }
    ]},
    (err, html) => {
      if(err){
        console.log(err);
      }
      showMeta(html);
      res.send(html);
    });
  });

  server.get('/blog-detail/:slug', (req, res) => {
    res.render(indexHtml, { req, providers: [
      { provide: APP_BASE_HREF, useValue: req.baseUrl }
    ]},
    (err, html) => {
      if(err){
        console.log(err);
      }
      showMeta(html);
      res.send(html);
    });
  });
  server.get('/dashboard/detail/:id', (req, res) => {
    res.render(indexHtml, { req, providers: [
      { provide: APP_BASE_HREF, useValue: req.baseUrl }
    ]},
    (err, html) => {
      if(err){
        console.log(err);
      }
      showMeta(html);
      res.send(html);
    });      
  });

  server.get('/dashboard/listing', (req, res) => {
    res.render(indexHtml, { req, providers: [
      { provide: APP_BASE_HREF, useValue: req.baseUrl }
    ]},
    (err, html) => {
      if(err){
        console.log(err);
      }
      showMeta(html);
      res.send(html);
    });      
  });

  server.use('/products', (req,res) => {
    res.render(indexHtml, { req, providers: [
      { provide: APP_BASE_HREF, useValue: '/products' + req.baseUrl }
    ]},
    (err, html) => {
      if(err){
        console.log(err);
      }
      showMeta(html);
      res.send(html);
    });
  });

  server.use('/plans', (req,res) => {
    res.render(indexHtml, { req, providers: [
      { provide: APP_BASE_HREF, useValue: '/plans' + req.baseUrl }
    ]},
    (err, html) => {
      if(err){
        console.log(err);
      }
      showMeta(html);
      res.send(html);
    });
  });
  
  server.get('/subscriptionplan', (req, res) => {
    res.render(indexHtml, { req, providers: [
      { provide: APP_BASE_HREF, useValue: req.baseUrl }
    ]},
    (err, html) => {
      if(err){
        console.log(err);
      }
      showMeta(html);
      res.send(html);
    });    
  });

  server.get('/', (req, res) => {
    res.render(indexHtml, { req, providers: [
      { provide: APP_BASE_HREF, useValue: req.baseUrl }
    ]},
    (err, html) => {
      if(err){
        console.log(err);
      }
      showMeta(html);
      res.send(html);
    });
  });

  // All regular routes use the Universal engine
  server.get('*', (req, res) => {
    console.log('client side rendering');
    // console.log('====TEST UNIVERSAL===');
    // console.log('baseUrl: ' + req.baseUrl);
    console.log('originalUrl: ' + req.originalUrl);
    res.sendFile(join(distFolder, 'index.html'));

    // res.render(indexHtml, { req, providers: [{ provide: APP_BASE_HREF, useValue: req.baseUrl }] });
  });

  return server;
}

function run() {
  const port = process.env.PORT || 4200 ;

  // Start up the Node server
  const server = app();
  server.listen(port, () => {
    console.log(`Node Express server listening on http://localhost:${port}`);
  });
}

// Webpack will replace 'require' with '__webpack_require__'
// '__non_webpack_require__' is a proxy to Node 'require'
// The below code is to ensure that the server is run only when not requiring the bundle.
declare const __non_webpack_require__: NodeRequire;
const mainModule = __non_webpack_require__.main;
const moduleFilename = mainModule && mainModule.filename || '';
if (moduleFilename === __filename || moduleFilename.includes('iisnode')) {
  run();
}

export * from './src/main.server';

function showMeta(html: string) {
  console.log('=============== SHOW META START');
  console.log(html.match(/<title>.*<\/title>/)[0]);
  var meta = [
    'og:title','twitter:title',
    'keyword',
    'description', 'og:description', 'twitter:description',
    'og:site_name', 'twitter:site',
    'og:url',
    'og:type',
    'twitter:card',
    'og:image', 'twitter:image'
  ];
  meta.forEach(m=>{
    var regEx = new RegExp(`<meta name="${m}" content="(.*?)">`);
    var match = html.match(regEx);
    if(match){ console.log(m, ': ', match[1]); }
  });
  console.log('=============== SHOW META END');
}