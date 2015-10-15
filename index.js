'use strict';
var Filter = require('broccoli-filter');
var RSVP = require('rsvp');
var tempWrite = require('temp-write');
var cc = require('closurecompiler');

function CCFilter(inputTree, options) {
	if (!(this instanceof CCFilter)) {
		return new CCFilter(inputTree, options);
	}

	Filter.call(this, inputTree);

	this.inputTree = inputTree;
	this.options = options || {};
}

CCFilter.prototype = Object.create(Filter.prototype);
CCFilter.prototype.constructor = CCFilter;

CCFilter.prototype.extensions = ['js'];
CCFilter.prototype.targetExtension = 'js';

CCFilter.prototype.processString = function (str) {
	var opts = this.options;

	return tempWrite(str).then(function (tempFile) {
		return new RSVP.Promise(function (resolve, reject) {
			cc.compile(tempFile, opts, function (err, data) {
				if (err) {
					// it's only an error if no data. weird API...
					if (!data) {
						reject(err);
					}

					console.log(err);
				}

				resolve(data);
			});
		});
	});
};

module.exports = CCFilter;
