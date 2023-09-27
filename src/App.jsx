
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import NavbarComp from './components/NavbarComp'


import RoutesComp from './components/RoutesComp';





function App() {
  
  return (
    <div>
      <NavbarComp/>
      {/* Defino las rutas y Componentes/pages que van a seguir mis enlaces. 
      Lo que esté fuera de mis rutas, VA A QUEDAR SIEMPRE FIJO*/}
      <RoutesComp/>
    </div>
  )
}

export default App
