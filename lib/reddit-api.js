import jsonp from 'jsonp'

class RedditApi {
	constructor() {
		this.redditURL = "http://www.reddit.com/r/perfectloops/top.json?jsonp=callbackFunction"
	}

	load() {
		return new Promise((resolve, reject) => {
			jsonp(this.redditURL, {param: 'jsonp'}, (err, data) => {
				err ? reject(err) : resolve(data.data.children)
			})
		})
	}
}

// export class here
export default new RedditApi()