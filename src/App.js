import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from './components/header';
import Loggedinpage from './Logged-in-page/loggedinpage';
import DashboardScreen from './screens/dashboard-screen';
import FleetScreen from './screens/fleets-screen';
import ClusterScreen from './screens/clusters-screen';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Loggedinpage />} />
          <Route path='/dashboard' element={<DashboardScreen />} />
          <Route path='/fleet' element={<FleetScreen />} />
          <Route path='/cluster' element={<ClusterScreen />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
