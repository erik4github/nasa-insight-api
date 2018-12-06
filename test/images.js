const assert = require('assert');
const Insight = require('../src/client');

const pluck = (arr, key) => arr.map(v => v[key]);

const insight = new Insight();

const testOptions = {
	'per_page': 50,
	'page': 0,
	'condition_1': 'insight:mission',
	'condition_2': '',
	'condition_3': '',
	'search': '',
	'extended': ''
};

const testArgs = [1, 4, '', 50, 0];

describe('images', function () {
	describe('get', function () {
		it('Should return a JSON response from the API',
			function () {
				return insight.images.get(testOptions, (err, body, res) => assert(typeof res === 'object'));
			});
	});
	describe('getBy', function () {
		it('Should return a JSON response from the API',
			function () {
				return insight.images.getBy(...testArgs, (err, body, res) => assert(typeof res === 'object'));
			}
		),
		it('Should return a JSON response inline with the given arguments',
			function () {
				return insight.images.getBy(...testArgs, (err, body, res) => {
					let sols = pluck(res.items, 'sol');
					assert.strictEqual(testArgs[0], sols.shift());
					assert.strictEqual(testArgs[1], sols.pop());
				});
			});
	});
});