import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import DashboardLogin from './pages/login';
import Box from './pages/course'
import Desktop1 from './pages/events'
import Desktop from './pages/info'
import Desktop2 from './pages/registration'

function App(){


 return (
  <Router>
      <DashboardLogin/>
    <Routes>
      <Route path="/login" element={<DashboardLogin/>}> </Route>
      <Route path="/course" element={<Box/>}> </Route> 
      <Route path="/events" element={<Desktop1/>}> </Route> 
      <Route path="/info" element={<Desktop/>}> </Route> 
      <Route path="/registration" element={<Desktop2/>}> </Route> 
    </Routes>
  </Router>
 )
}


export default App;