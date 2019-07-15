import Reactotron from 'reactotron-react-js'
import { reactotronRedux } from 'reactotron-redux'

const reactotron = Reactotron.configure({ name: 'Saas' })
	.use(reactotronRedux())
	.connect()

console.tron = reactotron
console.tron.clear()

export default reactotron
