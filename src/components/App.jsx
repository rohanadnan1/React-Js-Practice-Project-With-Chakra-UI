import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Header from "./Header";
import Home from "./Home"
import Footer from "./Footer"
import Videos from "./Videos";
import Upload from "./Upload";
import Signup from "./Signup";
import Login from "./Login";


function App() {
  return (
    <Router>
     <Header/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/videos" element={<Videos/>}/>
      <Route path="/upload" element={<Upload/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/signup" element={<Signup/>}/>
    </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
