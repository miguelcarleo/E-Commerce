// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import './App.css'
import NavBar from './components/NavBar/NavBar'
import 'bootstrap/dist/css/bootstrap.min.css'
import './styles/estilos.css'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'


function App() {
  return (
    <>
    <NavBar/>
    <ItemListContainer saludo ={'Hola!'}/>
    </>
  )
}

export default App
