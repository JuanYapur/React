import Nav from "./Components/NavBar/Nav";

function App() {
  const comision69I = true;
  const edad = 18;
  const menorEdad = edad<18 ? <h1>La persona es menor de edad</h1> : <h1>la persona tiene 18 años</h1> 

  return (
    <>
    <Nav/>
    <h1 className="text-danger">Hola mundo</h1>
    {
      //condicion    bloque de codigo true   : bloque de codigo else  (es un ternario) es una version resumida de un if
    comision69I ? <h1>Hola comision 69I</h1> : <h1>Hola gente</h1>}{
    edad > 18 ? <h1>Es Mayor de edad</h1> : <h1>No es mayor de edad</h1>
    }
    {//para evaluar solo una condicion
    comision69I && <h1>Hola Amigos soy una sola condicion</h1>}
    {//se pueden anidar varias condiciones
    edad>18 ? <h1>La persona es mayor de edad</h1> : edad<18 ? <h1>La persona es menor de edad</h1> : <h1>la persona tiene 18 años</h1> 
    }       
    {//se puede anidar mediante una constante para que quede mas prolijo, creo la constante menor de edad y pongo las condiciones ahi
    edad>18 ? <h1>La persona es mayor de edad</h1> : menorEdad
    }
    </>
  )
}
//detener la ejecucion de react en la consola de powershell o en la terminal de visual -- ctrl + c

export default App
