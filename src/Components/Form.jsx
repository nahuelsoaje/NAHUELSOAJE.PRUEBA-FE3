import React, { useState } from 'react'

const Form = ({usuario,setUsuario,setShow}) => {

const [err, setErr] = useState(false)



    const handleSubmit = (e) =>{
      e.preventDefaul()

      if (usuario.nombre.length >= 3 && usuario.personajeFavorito.length >= 6){
        setShow(true)

      }else{
        setErr(true)
      }
    }
  return (
  <>
    <form onSubmit={handleSubmit}>
         <label >ingresa tu Nombre: </label>
            <input type="text" onChange={({target}) => setUsuario({...usuario, nombre: target.value})}/>
            <label >Personaje Favorito: </label>
            <input type="text" onChange={({target}) => setUsuario({...usuario, personajeFavorito: target.value})}/>
            <button>Enviar</button>
    </form>
    {err && <p>Coloque la información correctamente.</p>}
  </>
  )
}

export default Form
