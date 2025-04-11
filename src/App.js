
import './App.css';
import Best from './Best';
import CleaningServices from './CleaningServices';
import NavHero from './Hero';
import Navbar from './Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <NavHero/>
      <CleaningServices/>
      <Best/>
    </div>
  );
}

export default App;
