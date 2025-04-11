
import './App.css';
import Best from './Best';
import CleaningServices from './CleaningServices';
import NavHero from './Hero';
import Navbar from './Navbar';
import TeamSection from './TeamsSection';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <NavHero/>
      <CleaningServices/>
      <Best/>
      <TeamSection/>
    </div>
  );
}

export default App;
