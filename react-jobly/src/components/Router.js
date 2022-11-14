import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Companies from './Companies';
import CompanyJobs from './CompanyJobs';
import Jobs from './Jobs';
import Navbar from './Navbar';
import Profile from './Profile'
import Login from './Login';
import Logout from './Logout';
import SignupForm from './SignupForm';
import Home from './Home';


function Router() {
  return (
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/companies" element={<Companies />} />
        <Route path="/companies/:handle" element={<CompanyJobs />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/register" element={<SignupForm />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router;