import './App.css';
import{
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Navbar from './Components/Navbar';
function App() {
  return (
   <Router>
      <div className='app'>
          <Navbar/>
            <Routes>
              <Route exact path="/" element={<Navbar/>}></Route>
              {/* <Route exact path="/Home" element={<Home/>}></Route>
              <Route exact path="/Market" element={<Market/>}></Route>
              <Route exact path="/Whychoose" element={<Whychoose/>}></Route> */}
            </Routes>
      </div>
    </Router>
  );
}

export default App;
