
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import NavbarComp from './components/NavbarComp'
import RoutesComp from './components/RoutesComp';
import UserContextProvider from './components/Context/UserContext/UserContextProvider';
import CartContextProvider from './components/Context/CartContext/CartContextProvider';

function App() {

  return (
    <div>
      {/* UserContextProvider viene con su value={user} traido desde el provider.
      Por lo cual todos los childrens puede acceder al mismo */}
      <CartContextProvider>
        <UserContextProvider>

          <NavbarComp />
          {/* Defino las rutas y Componentes/pages que van a seguir mis enlaces. 
          Lo que esté fuera de mis rutas, VA A QUEDAR SIEMPRE FIJO*/}
          <RoutesComp />

        </UserContextProvider>
      </CartContextProvider>

    </div>
  )
}

export default App
