class Images {
	constructor(client) {
		this.client = client;
	}
	/**
     * @method
     * @param {object} options 
     * @param {function} cb 
     */
	get(options = {}, cb) {
		return this.client._request(options, cb);
	}
	/**
	 * @method
	 * @param {number} solStart Accepts an integer starting at 0
	 * @param {number} solEnd 
	 * @param {Array<string>} cameras Accepts IDC or ICC 
     * @param {number} per_page Default 50
     * @param {number} page Default 0
     * @param {function} cb
	 */
	getBy(solStart, solEnd, cameras, per_page = 50, page = 0, cb) {
		this.solStart = solStart ? `${solStart}:sol:gte` : '';
		this.solEnd = solEnd ? `${solEnd}:sol:lte` : '';
		this.cameras = cameras ? cameras.join('|') : '';
		this.per_page = per_page;
		this.page = page;

		const params = {
			'per_page': this.per_page,
			'page': this.page,
			'condition_1': 'insight:mission',
			'condition_2': this.solStart,
			'condition_3': this.solEnd,
			'search': this.cameras,
			'extended': ''
		};

		return this.client._request(params, cb);
	}

}

module.exports = Images;