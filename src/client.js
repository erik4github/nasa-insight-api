const request = require('request');
const Images = require('./images');

const TIMEOUT_WAIT = 15000;

/**
 * @class
 * @classdesc Insight API wrapper class
 */
class Insight {
	constructor(options = () => {}) {
		this.options = options;
		this.apiKey = options.apiKey || 'DEMO_KEY';

		this.images = new Images(this);
	}
	/**
     * @method
     * @param {object} params
     * @param {function} cb
     */
	_request(params, cb = () => {}) {

		Object.defineProperty(params, 'API_KEY', {
			'value': this.apiKey,
			enumerable: true
		});

		const options = {
			url: 'https://mars.nasa.gov/api/v1/raw_image_items/',
			method: 'GET',
			qs: params,
			useQuerystring: true,
			headers: {
				'api_key': this.apiKey,
				'Content-Type': 'application/json; charset=utf-8'
			},
			json: true,
			timeout: TIMEOUT_WAIT
		};

		request(options, cb);
	}
}

module.exports = Insight;