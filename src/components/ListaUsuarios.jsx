import React, {useState, useEffect} from 'react'
import Usuario from './Usuario'
import axios from 'axios'
import './listaUsuarios.css'

const ListaUsuarios = () => {
  const [usuarios, setUsuarios] = useState([])

  //solicitud al servidor
  useEffect(() => {
    axios.get('https://users-app-two.vercel.app/api/usuario/lista')
      .then(res => {
        console.log(res.data)
        setUsuarios(res.data)
      })
      .catch(err => {
        console.log(err)
      })
  }, [])
  return (< >
    <div>ListaUsuarios</div>
    <div className='listaContainer'>
    {
      //mapeado condicional de usuarios

      usuarios.length ? usuarios.map(usuario => (
      <Usuario key={usuario._id} {...usuario} />
      )) : (<div>No hay usuarios</div>)
    }
    </div>
  </>
  )
}

export default ListaUsuarios