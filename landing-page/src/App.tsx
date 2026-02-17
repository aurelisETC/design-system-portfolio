import Navbar from './components/Navbar';
import HeroBanner from './components/HeroBanner';
import Events from './components/Events';
import Ministries from './components/Ministries';
import AboutUs from './components/AboutUs';
import MissionVision from './components/MissionVision';
import Location from './components/Location';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-navy-800">
      <Navbar />
      <main>
        <HeroBanner />
        <Events />
        <Ministries />
        <AboutUs />
        <MissionVision />
        <Location />
      </main>
      <Footer />
    </div>
  );
}
