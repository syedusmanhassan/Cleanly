
import './App.css';
import Best from './Best';
import CleaningServices from './CleaningServices';
import CTASection from './CTASection';
import NavHero from './Hero';
import LowerFooter from './LowerFooter';
import Navbar from './Navbar';
import Pricing from './Pricing';
import Reviews from './Reviews';
import TeamSection from './TeamsSection';
import UpperFooter from './UpperFooter';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <NavHero/>
      <CleaningServices/>
      <Best/>
      <TeamSection/>
      <Pricing/>
      <Reviews/>
      <CTASection/>
      <UpperFooter/>
      <LowerFooter/>
    </div>
  );
}

export default App;
