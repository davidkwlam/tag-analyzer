# Tag Analyzer

This is an application that allows a user to enter a URL and get a list of
tags in the resulting html.

### Coding style

As much as possible, this project adheres to coding style outlined in the [Angular 1 Style Guide](https://github.com/johnpapa/angular-styleguide/blob/master/a1/README.md).

### Getting started

1. Install the dev and front-end dependencies by running:
```shell
npm install
```
3. Serve the assets by running:
```shell
npm start
```
4. Browse to the app at `http://localhost:8000/app/index.html`.

### Testing

There are tests! The easiest way to run the unit tests is to use the supplied npm script:

```shell
npm test
```

### Notes

##### Cross-origin resource sharing

Because this app grabs webpages from arbitrary URLs, all GETs are subject to CORS rules. That is, downloading resources from third-party domains (i.e. any domain other than the one serving this app) will not be allowed unless the server at that domain explicitly allows it, by including an `Access-Control-Allow-Origin` header in the response.

So how does Tag Analyzer get around this? By routing all requests through a proxy: `https://tag-analyzer-proxy.herokuapp.com`. The app will request an URL from the proxy, which then grabs the resource and returns it to the app. The response from the proxy will have the contents of the requested URL--with the addition of a `Access-Control-Allow-Origin: *` header.

The source code for this proxy can be found at `https://github.com/Rob--W/cors-anywhere/`.
