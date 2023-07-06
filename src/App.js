import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from './components/header';
import Loggedinpage from './Logged-in-page/loggedinpage';
import Fleets from './screens/fleets';
import FleetScreen from './screens/fleet-screen';
import ClusterScreen from './screens/clusters-screen';
import OnboardingPage from './screens/onboarding/onboarding';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Loggedinpage />} />
          <Route path='/fleet' element={<Fleets />} />
          <Route path='/fleetscreen' element={<FleetScreen />} />
          <Route path='/cluster' element={<ClusterScreen />} />
          <Route path='/onboarding' element={<OnboardingPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
