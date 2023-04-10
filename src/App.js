import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages';
import Profile from './pages/profile';
import Fridge from './pages/fridge';
import Explore from './pages/explore';
import Grocery from './pages/grocery';
import HomeNoSignIn from './pages/home-no-sign-in';
import SignIn from './pages/signin';

function App() {
    return (
        <div>
        <Router>
            {/* <Navbar /> */}
            <Routes>
            <Route path='/' exact Component={HomeNoSignIn} />
            <Route path='/home' exact Component={Home} />
            <Route path='/profile' Component={Profile} />
            <Route path='/fridge' Component={Fridge} />
            <Route path='/explore' Component={Explore} />
            <Route path='/grocery' Component={Grocery} />
            <Route path='/signIn' Component={SignIn} />
            </Routes>
        </Router>
      </div>
    );
  }
    
  export default App;
