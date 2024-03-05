
import './App.css';
import Login from './Components/Login.jsx';
import{BrowserRouter,Route,Routes} from 'react-router-dom';
// import Product from './Components/Product.jsx';
import Home from './Components/Home.jsx';
import Products from './Components/Products.jsx'
import Sales from './Components/Sales.jsx'
import SalesTable from './Components/SalesTable.jsx';

function App() {
  return (
   <>

   <BrowserRouter>
  
 
   
   <Routes>
      <Route path='/'element={<Login/>}></Route>
      <Route path='/home'element={<Home/>}>
        <Route path='/home/products'element={<Products/>}></Route>
        <Route path='/home/sales'element={<Sales/>}></Route>
        <Route path='/home/salestable'element={<SalesTable/>}></Route>
      </Route>
        
      
   </Routes>
   
  
   
   
   
   </BrowserRouter>
   
   
   </>
   
  )
}

export default App;
