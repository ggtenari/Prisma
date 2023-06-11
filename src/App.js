import './App.css';
import Topbar from './components/Topbar';
import NavBar from './components/NavBar';
import MainCarousel from './components/MainCarousel';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
      <Topbar class='desktop'/>
      <NavBar />
      <MainCarousel />
      <Footer />
    </div>
  );
}

export default App;
