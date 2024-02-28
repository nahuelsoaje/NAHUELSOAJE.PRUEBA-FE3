
const Card = ({usuario}) => {
 
  return (
    <div> 
      <h3>nombre: {usuario.nombre}</h3>
      <h4>personaje favorito: {usuario.personajeFavorito}</h4>
      
    </div>
  )
}

export default Card