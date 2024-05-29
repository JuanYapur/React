import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/general/navbar/Navbar'
import Card from './components/general/card/card'

function App() {
  const [count, setCount] = useState(0)
//   const movies = [{
//     title:"napoleon",
//     description:"La carrera militar y política de Napoleón Bonaparte desde sus inicio",
//   },
//   {
//     title:"napoleon",
//     description:"La carrera militar y política de Napoleón Bonaparte desde sus inicio",
//   },
//   {
//     title:"napoleon",
//     description:"La carrera militar y política de Napoleón Bonaparte desde sus inicio",
//   }
// ]

  return (
    <>
      <Navbar/>
      <div className='d-flex justify-content-center'>
      
      {/*FORMA DE GENERAR UN ARRAY POR EJ DE PELICULAS Y ITERARLO
       {movies.map((movie) => {
        return (<Card title={movie.title} description={movie.description}/>)
      })
      } */}
      <Card title="napoleon" description="hola mundo"/>
      <Card/>
      <Card/>
      </div>
    </>
  )
}

export default App
