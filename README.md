<img src="http://btccore.io/css/images/module-message.png" alt="btccore message" height="35">
# Bitcoin Message Verification and Signing for Btccore


[![NPM Package](https://img.shields.io/npm/v/btccore-message.svg?style=flat-square)](https://www.npmjs.org/package/btccore-message)
[![Build Status](https://img.shields.io/travis/owstack/btccore-message.svg?branch=master&style=flat-square)](https://travis-ci.org/owstack/btccore-message)
[![Coverage Status](https://img.shields.io/coveralls/owstack/btccore-message.svg?style=flat-square)](https://coveralls.io/r/owstack/btccore-message?branch=master)

btccore-message adds support for verifying and signing bitcoin messages in [Node.js](http://nodejs.org/) and web browsers.

See [the main btccore repo](https://github.com/owstack/btccore) for more information.

## Attribution

This repository was created by copy forking [bitcore-message commit 98a5431] (https://github.com/bitpay/bitcore-message/commit/98a54319246bfabd442f94cac42ab5c9486d3b46).

## Getting Started

```sh
npm install btccore-message
```

```sh
bower install btccore-message
```

To sign a message:

```javascript
var btccore = require('btccore-lib');
var Message = require('btccore-message');

var privateKey = btccore.PrivateKey.fromWIF('cPBn5A4ikZvBTQ8D7NnvHZYCAxzDZ5Z2TSGW2LkyPiLxqYaJPBW4');
var signature = Message('hello, world').sign(privateKey);
```

To verify a message:

```javascript
var address = 'n1ZCYg9YXtB5XCZazLxSmPDa8iwJRZHhGx';
var signature = 'H/DIn8uA1scAuKLlCx+/9LnAcJtwQQ0PmcPrJUq90aboLv3fH5fFvY+vmbfOSFEtGarznYli6ShPr9RXwY9UrIY=';
var verified = Message('hello, world').verify(address, signature);
```

## Contributing

See [CONTRIBUTING.md](https://github.com/owstack/btccore/blob/master/CONTRIBUTING.md) on the main btccore repo for information about how to contribute.

## License

Code released under [the MIT license](https://github.com/owstack/btccore/blob/master/LICENSE).

Copyright 2017 Open Wallet Stack. Btccore is a trademark maintained by Ope Wallet Stack.

