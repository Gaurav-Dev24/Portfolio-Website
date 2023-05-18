
import './App.css';
import Contact from './components/Contact/Contact';
import Experience from './components/Experience/Experience';
import Intro from './components/Intro/Intro';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Services from './components/Services/Services';
import Testimonial from './components/Testimonial/Testimonial';
import Works from './components/Works/Works';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Intro/>
      <Services />
      <Experience />
      <Works />
      <Profile/>
      <Testimonial/>
      <Contact/>
    </div>
  );
}

export default App;
