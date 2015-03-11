# HTTP Error Util

Simple module to generate Error objects with properties:

* `name`
* `status`
* `message`

This makes it extremely easy to plugin into Express' [error handling middleware](http://expressjs.com/guide/error-handling.html).

## Installation

```sh
$ npm install http-error-util --save
```

## Example

```js
var httpError = require('http-error-util');

new httpError(http.OK, 'OK');
```

## License

MIT
