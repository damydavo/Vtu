import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Register from './pages/register';
import Login from './pages/login';
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'
import Profile from './pages/profile';
import { Airtime, Cable, Data, Electricity, Result, User, Wallet, Pricing } from './pages';
import Home from './pages/home';
import PrivateRoute from './component/privateRoute';

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/register' element={<Register />} />
          <Route path="/" element={<Home />} />
          <Route path='/airtime' element={<Airtime />} />
          <Route path='/data' element={<Data />} />
          <Route path='/cable' element={<Cable />} />
          <Route path='/electricity' element={<Electricity />} />
          <Route path='/pricing' element={<Pricing />} />
          <Route path='/result' element={<Result />} />
          <Route path='/fund' element={<Wallet />} />
          <Route path='/users' element={<User />} />
          <Route path='/login' element={<Login />} />
          <Route path="/profile" element={<PrivateRoute />}>
            <Route path="/profile" element={<Profile />} />
          </Route>

        </Routes>
      </Router>
      <ToastContainer />
    </>
  );
}

export default App;