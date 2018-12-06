const assert = require('assert');
const Insight = require('../src/client');

describe('client', function () {
	let insight;
	describe('construction', function () {
		before(() => {
			insight = new Insight({apiKey: 'DEMO_KEY'});
		});
		it('should instantiate all methods',
			function () {
				return assert(typeof insight.images === 'object');
			});
	});
});