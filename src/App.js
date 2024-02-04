import logo from './logo.svg';
import './App.css';
import Piraty from './data/fkl';
import Header from './components/header.js';
import Footer from './components/footer.js';
import Main from './components/main.js';

function App() {
  return (
    <div className="App">
        <Header />
        <Main />  
        <Footer />      
    </div>
  );
}

export default App;
