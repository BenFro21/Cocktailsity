import {Route, Routes} from 'react-router-dom'
import Layout from './components/Layout/Layout';
import ShowAllCocktails from './pages/ShowAllCocktails/ShowAllCocktails';
function App() {
  return (
    <div className="App">
      <Layout >
        <Routes>
          <Route path='/cocktails' element={<ShowAllCocktails />} />

        </Routes>
      </Layout>
    </div>
  );
}

export default App;
