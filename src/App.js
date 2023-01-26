 import { BrowserRouter as Router,Route,Routes } from "react-router-dom";
import Navbar from './Components/Layout/Navbar' 
import Footer from './Components/Layout/Footer' 
import Alert from './Components/Layout/Alert' 
import Home from './Pages/Home'
import About from './Pages/About'
import NotFound from './Pages/NotFound'
import User from "./Pages/User";
import { GithubProvider } from "./context/github/GithubContext";
import { AlertProvider } from "./context/Alert/AlertContext";


function App() {
  return (
    <GithubProvider>
      <AlertProvider>
    <Router>
    <div className="flex flex-col justify-between h-screen">
      <Navbar/>
      <main className="container mx-auto px-3 pb-12">
       
        
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/eachUser/:login" element={<User/>}/>
          <Route path="/notfound" element={<NotFound/>}/>
          <Route path="/*" element={<NotFound/>}/>
        </Routes>
        
        <Alert/>
      </main>
      <Footer/>

    </div>
    </Router>
    </AlertProvider>
    </GithubProvider>
  );
}

export default App;
