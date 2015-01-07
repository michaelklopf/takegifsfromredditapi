//let state = "compiled and loaded"
//console.log(`dynamically ${state}!`)
import RedditApi from './reddit-api'
import ExtractGifs from './extract-gifs'
import DisplayGifs from './display-gifs'

RedditApi.load()
	.then(ExtractGifs)
	.then(DisplayGifs)
	//.then(urls => console.log(urls))
	//.then(posts => console.log(posts))

export default {}