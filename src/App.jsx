import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MyComponent from './Components/StudentCard'
import MyComponentProps from './Components/StudentCardProps'

function App() {
  return (
    <>
    <MyComponent></MyComponent>
    <MyComponentProps name="Abdulmuhaymin" ID="202275600" Department="ICS"></MyComponentProps>
    </>
  )
}

export default App
