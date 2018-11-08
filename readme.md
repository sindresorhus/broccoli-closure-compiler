# Deprecated

The project this plugin depends on, ClosureCompiler.js, is no longer maintained.

---

# [broccoli](https://github.com/joliss/broccoli)-closure-compiler [![Build Status](https://travis-ci.org/sindresorhus/broccoli-closure-compiler.svg?branch=master)](https://travis-ci.org/sindresorhus/broccoli-closure-compiler)

> Minify JavaScript with [Closure Compiler](https://github.com/dcodeIO/ClosureCompiler.js)

*Issues with the output or Java should be reported on the Closure Compiler [issue tracker](https://github.com/dcodeIO/ClosureCompiler.js/issues).*


## Install

```
$ npm install --save-dev broccoli-closure-compiler
```


## Usage

```js
var closure-compiler = require('broccoli-closure-compiler');
tree = closure-compiler(tree, options);
```


## API

### closure-compiler(tree, [options])

See the Closure Compiler [options](https://github.com/dcodeIO/ClosureCompiler.js#closurecompiler-api).


## License

MIT © [Sindre Sorhus](http://sindresorhus.com)
