import './App.css';
import{
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Navbar from './Components/Navbar';
import Login from './Components/Login';
import Protected from './Components/Protected';
import Home from './Components/Home';
import Enterprise from './Components/Enterprise';
import Pricing from './Components/Pricing';
function App() {
  return (
   <Router>
      <div className='app'>
          <Navbar/>
            <Routes>
              <Route exact path="/" element={<Protected Component={Home}/>}></Route>
              <Route exact path="/login" element={<Login/>}></Route>
              <Route exact path="/Pricing" element={<Protected Component={Pricing}/>}></Route>
              <Route exact path="/Enterprise" element={<Protected Component={Enterprise}/>}></Route>
              
            </Routes>
      </div>
    </Router>
  );
}

export default App;
