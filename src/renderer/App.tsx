import type { Component } from 'solid-js'
import styles from './App.module.css'
import { Router, Route, Routes } from '@solidjs/router'
import AIAssistant from './components/page/AiAssistant'

const App: Component = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" component={AIAssistant} />
      </Routes>
    </Router>
  )
}

export default App
