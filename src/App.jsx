
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import NavbarComp from './components/NavbarComp'
import ItemListContainer from './components/ItemListContainer';


function App() {

  return (
    <div className='bg-body'>
      <NavbarComp/>
      <ItemListContainer greeting="Nuestros productos"/>
    </div>
  )
}

export default App
