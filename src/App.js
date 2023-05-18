import {Route, Routes, Navigate} from 'react-router-dom'
import Layout from './components/Layout/Layout';
import ShowAllCocktails from './pages/ShowAllCocktails/ShowAllCocktails';
import LandingPage from './pages/LandingPage/LandingPage';
import tokenService from './utils/tokenAuth';
let {getToken} =tokenService

let token = getToken()


function App() {

  return (
    <div className="App">
      <Layout >
        <Routes>
          <Route path='/' element={token? <Navigate to='/cocktails'/> : <LandingPage />} />
          <Route path='/cocktails' element={token?  <ShowAllCocktails /> : <Navigate to='/'/>} />
          
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
