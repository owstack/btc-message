Btc Message
=======

[![NPM Package](https://img.shields.io/npm/v/btc-message.svg?style=flat-square)](https://www.npmjs.org/package/btc-message)
[![Build Status](https://img.shields.io/travis/owstack/btc-message.svg?branch=master&style=flat-square)](https://travis-ci.org/owstack/btc-message)
[![Coverage Status](https://img.shields.io/coveralls/owstack/btc-message.svg?style=flat-square)](https://coveralls.io/r/owstack/btc-message?branch=master)

Adds support for verifying and signing bitcoin messages in [Node.js](http://nodejs.org/) and web browsers.

## Attribution

This repository was created by copy forking [bitcore-message commit 98a5431](https://github.com/bitpay/bitcore-message/commit/98a54319246bfabd442f94cac42ab5c9486d3b46).

## Getting Started

```sh
npm install btc-message
```

```sh
bower install btc-message
```

To sign a message:

```javascript
var btcLib = require('btc-lib');
var Message = require('btc-message');

var privateKey = btc.PrivateKey.fromWIF('cPBn5A4ikZvBTQ8D7NnvHZYCAxzDZ5Z2TSGW2LkyPiLxqYaJPBW4');
var signature = Message('hello, world').sign(privateKey);
```

To verify a message:

```javascript
var address = 'n1ZCYg9YXtB5XCZazLxSmPDa8iwJRZHhGx';
var signature = 'H/DIn8uA1scAuKLlCx+/9LnAcJtwQQ0PmcPrJUq90aboLv3fH5fFvY+vmbfOSFEtGarznYli6ShPr9RXwY9UrIY=';
var verified = Message('hello, world').verify(address, signature);
```

## Contributing

See [CONTRIBUTING.md](https://github.com/owstack/btc/blob/master/CONTRIBUTING.md) on the main btc repo for information about how to contribute.

## License

Code released under [the MIT license](https://github.com/owstack/btc/blob/master/LICENSE).

Copyright 2017 Open Wallet Stack.

