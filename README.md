# Node.js wrapper for the NASA InSight Lander images API

## Installation

```npm install nasa-insight-api --save```

## Authentication

Sign up for a NASA developer API Key [here](https://api.nasa.gov/api.html#authentication). Create a new instance of the client library with:

```javascript
const Insight = require('nasa-insight-api');

const insight = new Insight({apiKey: 'YOUR_KEY'});
```

## Usage

```javascript
insight.images.get(options = {}, (err, res, body) => console.log(body));
```

### Available Methods

```javascript
insight.images.get(options = {}, cb)
insight.images.getBy(solStart, solEnd, cameras, per_page, page, cb)
```

## License
MIT