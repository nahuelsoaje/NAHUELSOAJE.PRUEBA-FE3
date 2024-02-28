import { useState } from 'react'
import './App.css'
import  Form  from './Components/Form'
import Card from './Components/Card'

function App() {
  const [usuario, setUsuario] = useState({
    nombre: '',
    personajeFavorito: ''
})

const [show, setShow] = useState(false)
  return (
    <>
    <h1>Personaje Favorito</h1>
    {<Form setUsuario={setUsuario} setShow={setShow}/>}
    {show && <Card usuario={usuario}/>}
    {console.log(usuario)}
    </> 
  )
}

export default App
