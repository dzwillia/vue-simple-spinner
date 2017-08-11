# vue-simple-spinner
> A simple, flexible spinner for Vue.js

vue-simple-spinner is designed to be a lightweight [Vue.js](http://vuejs.org) spinner requiring minimal configuration.

## Documentation
[https://github.com/dzwillia/vue-simple-spinner/](https://github.com/dzwillia/vue-simple-spinner/)

## Demo

[https://dzwillia.github.io/vue-simple-spinner/examples](https://dzwillia.github.io/vue-simple-spinner/examples)

## JsFiddle Demo

[http://jsfiddle.net/dzwillia/kc5ka8zu](http://jsfiddle.net/dzwillia/kc5ka8zu)

## Requirements
* [Vue.js](http://vuejs.org/) (^v2.1.4)

## Browser support
IE 10+ (due to [CSS animation support](https://caniuse.com/#feat=css-animation)).

## Installation

### NPM

```bash
npm install vue-simple-spinner --save
```

## Usage
> All styling for this component is done via computed styles in the `Spinner.vue` component and requires no external CSS files.

### ES6

*The following examples can also be used with CommonJS by replacing ES6-specific syntax with CommonJS equivalents.*

```js
import Vue from 'vue'
import Spinner from 'vue-simple-spinner'

new Vue({
  components: {
    Spinner
  }
})
```

### Globals (script tag)

Add a script tag pointing to `dist/vue-simple-spinner.min.js` *after* adding Vue.

Example:

```html
<html>
<head>
  ...
</head>
<body>
  <div id="app">
    <vue-simple-spinner></vue-simple-spinner>
  </div>

  <script src="path/to/vue.js"></script>
  <script src="path/to/vue-simple-spinner.js"></script>
  <script>
    new Vue({
      el: '#app'
    })
  </script>
</body>
</html>
```

## License
vue-simple-spinner is open source and released under the [MIT License](LICENSE).

Copyright (c) 2017 [David Z Williams](https://twitter.com/padredaveo).

> *PS: I would love to know if you're using vue-simple-spinner. Tweet to me at [@padredaveo](https://twitter.com/padredaveo)*.


