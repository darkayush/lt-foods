import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './Components/Navbar';
import Home from './Pages/Home/Home';

import Footer from './Components/Footer';
import ExecutiveSummary from './Pages/ExecutiveSummary';
import AboutUs from './Pages/AboutUs';
import OurGeographicalPresence from './Pages/OurGeographicalPresence';
import LeadershipMessage from './Pages/LeadershipMessage';
import OurProductPortfolio from './Pages/OurProductPortfolio';
import OurStrategy from './Pages/OurStrategy';
import RiskManagement from './Pages/RiskManagement';
import StakeholderEngagement from './Pages/StakeholderEngagement';
import MaterialityAssessment from './Pages/MaterialityAssessment';
import VCM from './Pages/VCM';

const App = () => {
  return (
    <div>
      <Router>
        <Navbar />
        <main className="mt-20">
          <Routes>
            <Route path="/" element={<Home />} />

            <Route path="/executive-summary" element={<ExecutiveSummary />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/our-geographical-presence" element={<OurGeographicalPresence />} />
            <Route path="/leadership-message" element={<LeadershipMessage />} />
            <Route path="/our-product-portfolio" element={<OurProductPortfolio />} />
            <Route path='/our-strategy' element={<OurStrategy />} />
            <Route path='/risk-management' element={<RiskManagement />} />
            <Route path='/stakeholder-engagement' element={<StakeholderEngagement />} />
            <Route path='/materiality-assessment' element={<MaterialityAssessment />} />
            <Route path='/value-creation-model' element={<VCM />} />
          </Routes>
          <Footer />
        </main>
      </Router>
    </div>
  )
}

export default App