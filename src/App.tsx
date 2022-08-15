import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { MainHeader } from './components/mainheader'
import { Header } from './components/header'
import { Month } from './components/month'
import { Weeks } from './components/weeks'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">

      <Header />
      <MainHeader />
      <Month />
      <Weeks />
      



    </div>
  )
}

export default App
