import './App.css';
import Header from './componentes/Header/Header.js';
import Banner from './componentes/Banner/Banner.js';
import Footer from './componentes/Footer/Footer.js';

function App() {
  return (
    <div className="App">
      <Header/>
      <main>
        <Banner/>
      </main>
      <Footer/>
    </div>
  );
}

export default App;
