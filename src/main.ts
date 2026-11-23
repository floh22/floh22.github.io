import './style.css'
import { createApp } from './createApp'
import { parsePath } from './routes'

createApp(parsePath(location.pathname)).mount('#app')
