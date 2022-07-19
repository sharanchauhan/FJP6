import './App.css';
import NavBar from './components/NavBar';
import Banner from './components/Banner';
import MovieList from './components/MovieList';
import Fav from './components/Fav'
function App() {
  return (
    <div>
      <NavBar/>
      {/* <Banner/>
      <MovieList/> */}
      <Fav/>
    </div>
  );
}

export default App;