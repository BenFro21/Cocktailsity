import {Route, Routes, Navigate} from 'react-router-dom'
import Layout from './components/Layout/Layout';
import ShowAllCocktails from './pages/ShowAllCocktails/ShowAllCocktails';
import LandingPage from './pages/LandingPage/LandingPage';
import tokenService from './utils/tokenAuth';
import CocktailDetails from './pages/CocktailDetails/CocktailDetails';
import CocktailEdit from './pages/CocktailEdit/CocktailEdit';
import NewCocktail from './pages/NewCocktail/NewCocktail';
import ShowAllIngredients from './pages/ShowAllIngredients/ShowAllIngredients';
import NewIngredient from './pages/NewIngredient/NewIngredient';
import './App.css'
let {getToken} =tokenService

let token = getToken()


function App() {



  return (
    <div className="App">
      <Layout >
        <Routes>
          <Route path='/' element={token? <Navigate to='/cocktails'/> : <LandingPage />} />
          <Route path='/cocktails' element={token?  <ShowAllCocktails /> : <Navigate to='/'/>} />
          <Route path='/cocktails/new' element={token? <NewCocktail /> : <Navigate to='/' />} />
          <Route path='/cocktails/:cocktailId' element={ token? <CocktailDetails /> : <Navigate to='/'/>} />
          <Route path='/cocktails/edit/:cocktailId' element={token? <CocktailEdit /> : <Navigate to='/'/>} />
          <Route path='/ingredients' element={token? <ShowAllIngredients /> :  <Navigate to='/' />} />
          <Route path='/ingredients/new' element={token? <NewIngredient /> : <Navigate to='/' />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
