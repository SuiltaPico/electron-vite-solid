import { render } from 'solid-js/web'

import './index.css'
import 'uno.css'
import '@unocss/reset/tailwind.css'

import App from './App'

const root = document.getElementById('root')

render(() => <App></App>, root!)
