import {Route, Routes, Navigate} from 'react-router-dom'
import Layout from './components/Layout/Layout';
import ShowAllCocktails from './pages/ShowAllCocktails/ShowAllCocktails';
import LandingPage from './pages/LandingPage/LandingPage';
import tokenService from './utils/tokenAuth';
import CocktailDetails from './pages/CocktailDetails/CocktailDetails';
import CocktailEdit from './pages/CocktailEdit/CocktailEdit';
import NewCocktail from './pages/NewCocktail/NewCocktail';
let {getToken, removeToken} =tokenService

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
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
