import logo from './logo.svg';
import './App.css';
import Navbar from './navbar';
import Main from './main';
import Collection from './collection';
import Section from "./section"
import Footer from "./footer"

function App() {
  return (
    <div className="App">
      
          <Navbar/>
          <Main/>
          <Collection/>
          <Section/>
          <Footer/>
      
    </div>
  );
}

export default App;
